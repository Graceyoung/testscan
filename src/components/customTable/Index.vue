<template>
    <div class="custom-table">
        <div class="custom-table-content">
            <div class="custom-table-title" v-if="tableTitle">
                <div class="left">
                    <slot name="title-left">
                        <span style="margin-right: 8px">{{ tableTitle }}</span>{{
                            total ? '(' + formatTotal + ')' : ''
                        }}
                    </slot>
                    <slot name="left-info" style="font-weight:100">

                    </slot>
                </div>
                <div class="right">
                    <slot name="title-right"></slot>
                </div>
            </div>
            <div class="custom-table-box">
                <div class="custom-table-search" v-if="$slots.search">
                    <el-form ref="form" class="demo" :class="!isShowMore ? 'demo-form-inline':''"
                             :inline="true"
                             label-position="top">
                        <slot v-if="isShowMore" name="search"></slot>
                        <div class="slot-hidden" v-else>
                            <slot name="search"></slot>
                        </div>
                        <el-form-item>
                            <div slot="label">
                                <div style="visibility: hidden">占位</div>
                            </div>
                            <div class="search-option">
                                <el-button type="warning" size="medium"
                                           icon="el-icon-search"
                                           @click="onSearch"
                                           class="search-button">搜索
                                </el-button>
                                <el-button size="medium"
                                           type="info"
                                           icon="el-icon-refresh-right"
                                           @click="onReset"
                                           class="reset-button">重置
                                </el-button>
                                <!-- 完成根据数量自动控制显示或者按照更多插槽完成展示更多的功能 -->
                                <template v-if="showText">
                                    <el-button size="medium" @click="viewMore" v-if="isShowMore">^收起</el-button>
                                    <el-button size="medium" @click="viewMore" v-else>∨展开</el-button>
                                </template>
                            </div>

                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div v-if="tableTitleShow" class="table-title">
                <slot name="table-title"></slot>
            </div>
            <div class="custom-table-box">
                <el-table
                    :no-data-text="noDataText"
                    :span-method="spanMethod"
                    @selection-change="selectedChange"
                    @sort-change="onSortChange"
                    @filter-change="onFilterChange"
                    :row-key="getRowKey"
                    :row-class-name="rowClassName"
                    :default-sort="defaultSort"
                    :data="data"
                    ref="table"
                    v-loading="loading">
                    <slot></slot>
                    <template v-if="newColumns && newColumns.length">
                        <el-table-column
                            v-if="showCheckbox"
                            type="selection"
                            :reserve-selection="true"
                            :selectable="selectable"
                            width="45">
                        </el-table-column>
                        <el-table-column
                            v-if="showIndex"
                            :label="indexLabel"
                            type="index"
                            align="left"
                            :index="indexMethod"
                            width="80">
                        </el-table-column>
                        <template v-for="(item) in newColumns">
                            <tree-table-column
                                v-if="!item.isHide"
                                :key="item.key"
                                :item-columns="item">
                            </tree-table-column>
                        </template>
                    </template>
                </el-table>
                <div class="paginationB" v-if="!hidePaging">
                    <div>
                        <slot name="pagination-left"></slot>
                    </div>
                    <div class="pagination-right">
                        <span class="total">共{{ formatTotal }}条</span>
                        <el-pagination
                            @size-change="pageSizeChange"
                            @current-change="changePageNum"
                            :current-page="selfPageNum"
                            :page-sizes="[10,50,100]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next, sizes,jumper"
                            :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Mixins, Prop, Vue, Watch} from "vue-property-decorator";
import m from "moment/moment";
import _ from "lodash";
import Expand from "./expands";
import {Form, Progress, Table} from "element-ui";
import TreeTableColumn from "@/components/customTable/TreeTableColumn.vue";
import {numFormatMoney, traversingTree} from "@/util";
import {oc} from "ts-optchain";
import {VNode} from "vue";
import Enums from "@/mixins/enums";

/**
 * 通用列表组件
 */
@Component({
    name: "CustomTable",
    components: {
        Expand,
        TreeTableColumn
    },
    mixins: [Enums]
})
export default class CustomTable extends Mixins(Enums) {
    public $refs!: {
        table: Table,
        form: Form
    };
    public $slots!: {
        search: VNode[]
    }

    isShowMore: boolean = false
    showText: boolean = false
    @Prop({
        type: String
    })
    tableTitle!: string

    //搜索key,用于高亮显示
    @Prop({
        type: [String, Number]
    })
    searchKey!: string

    //禁止响应全局搜索
    @Prop({
        type: Boolean
    })
    stopSearch!: boolean

    //复选框
    @Prop({
        type: Boolean,
        default: false
    })
    showCheckbox!: boolean;

    @Prop({
        type: Number,
        default: 0,
    })
    value!: number;

    @Prop({
        type: Object,
    })
    defaultSort!: { prop: string; order: "ascending" | "descending" };

    @Prop({
        type: Array,
        default: () => {
            return [];
        },
    })
    columns!: any[];

    @Prop({
        type: Array,
        default: () => {
            return [];
        },
    })
    data!: any[];

    @Prop({
        type: Number,
        default: 0,
    })
    total!: number;

    @Prop({
        type: Boolean,
        default: false,
    })
    loading!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    hidePaging!: boolean;

    @Prop({
        type: String,
        default: "暂无数据",
    })
    noDataText!: string;

    //查询列表的函数默认第一个参数是当前页,其他参数通过这个参数配置
    @Prop({
        type: Array,
        default: () => {
            return [];
        },
    })
    queryParams!: any[];

    //序号
    @Prop({
        type: Boolean,
        default: false,
    })
    showIndex!: boolean;

    @Prop({
        type: String,
        default: '序号'
    })
    indexLabel!: string;

    @Prop({
        type: Function
    })
    spanMethod!: Function

    @Prop({
        type: Number,
        default: 1,
    })
    pageNum!: number;

    @Prop({
        type: Boolean,
        default: false,
    })
    tableTitleShow?: boolean;

    @Prop({
        type: Function
    })
    rowClassName!: Function

    @Prop({
        type: Boolean,
        default: true,
    })
    tableBoxShow?: boolean;

    pageSize = 10;
    selfPageNum = this.pageNum || 1;

    @Watch("value", {
        deep: true,
    })
    watchValue(data: number) {
        this.pageSize = data;
    }

    @Watch("pageNum", {
        deep: true,
    })
    watchPageNum(data: number) {
        this.selfPageNum = data;
    }

    //重构total
    get formatTotal() {
        return (this.total || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }

    getRowKey(row: any) {//给每行添加一个唯一值用于分页勾选
        return row.uid
    }

    selectedChange(data: any) {
        this.$emit('on-selection-change', data);
    }

    //checkbox 那些是不能选
    selectable(row: any) {
        if (row.disabled) {
            return 0;
        } else {
            return 1;
        }
    }

    /**
     * 重置查询条件
     */
    onReset() {
        //element自带重置,需要绑定mode并且写上prop才有效,暂时无用
        this.$refs.form.resetFields();
        for (let item of this.$slots.search) {
            let formItem = _.get(item, 'componentInstance.$children[1]', '')
            if (formItem) {
                //更改v-model的值
                formItem.$emit('input', '')
                //部分页面用到change更改时间控件的值
                formItem.$emit('change', '')
            }
        }

        //清除列表相关,排序,筛选,勾选等
        this.clearSort();
        this.$refs.table.clearFilter();
        this.$refs.table.clearSelection();

        //发送重置事件用于自定义清除
        this.$emit('on-reset')
        //重置后点击搜索
        this.onSearch()
    }

    onSearch() {
        this.changePageNum(1)
    }

    //重置勾选
    clearSelection() {
        this.$refs.table.clearSelection();
    }

    //序号
    indexMethod(index: number) {
        if (this.selfPageNum === 1) {
            return index + 1;
        } else {
            return index + 1 + this.pageSize * (this.selfPageNum - 1);
        }
    }

    clearSort() {
        this.$refs.table.clearSort();
    }

    pageSizeChange(pageSize: number) {
        this.pageSize = pageSize;
        this.$emit("input", this.pageSize);
        this.changePageNum(1);
    }

    changePageNum(pageNum: number) {
        this.selfPageNum = pageNum;
        this.$emit("on-change", pageNum, ...this.queryParams);
    }

    onSortChange() {
        this.$emit("on-sort-change", ...arguments);
    }

    onFilterChange() {
        this.$emit("on-filter-change", ...arguments);
    }

    viewMore() {
        this.isShowMore = !this.isShowMore
    }

    //获取转换之后的标记html
    public static getHtmlBySearchKey(searchKey: string, value: string | number, stopSearch = false) {
        if (value == null || value === '') {
            return '';
        }
        if (!searchKey) {
            return value;
        }
        //禁止响应搜索
        if (stopSearch) {
            return value
        }
        return (value + '').split(searchKey).join('<span class="primary-text-color">' + searchKey + '</span>');
    }

    get newColumns() {
        //todo 深度拷贝可能导致直接修改列表数据无效(如直接在列表渲染输入框输入内容改变列表数据的场景)
        let res = _.cloneDeep(this.columns) || [];
        traversingTree(res, {
            childList: "children",
            filterFun: (item: any) => {
                //key存在并且不存在渲染函数时重新渲染为带有title的标签
                if (item.key && !item.renderHeader) {
                    item.renderHeader = (h: Vue.CreateElement) => {
                        //title配置不存在时尝试获取列表左侧勾选字段
                        let title = item.title
                        return h("div", {
                            domProps: {
                                innerHTML: title,
                            },
                            class: item.headType,
                        });
                    };
                }
                if (item.key && !item.render) {
                    item.render = (h: Vue.CreateElement, params: any) => {
                        return h(
                            "span",
                            {
                                domProps: {
                                    //title: params.row[item.key],
                                    innerHTML: CustomTable.getHtmlBySearchKey(this.searchKey, params.row[item.key] != null
                                        ? params.row[item.key]
                                        : "-", this.stopSearch)
                                },
                            },
                        );
                    };
                }

                //特殊数据类型处理
                if (item.dataType) {
                    switch (item.dataType) {
                        //时间类型 默认格式: 年-月-日 时:分
                        case "time":
                            item.render = (
                                h: Vue.CreateElement,
                                params: any
                            ) => {
                                let res = params.row[item.key];
                                if (res) {
                                    res = m(res).format(
                                        item.timeF
                                            ? item.timeF
                                            : "YYYY-MM-DD HH:mm"
                                    );
                                }
                                return h(
                                    "div",
                                    {
                                        domProps: {
                                            title: params.row[item.key],
                                        },
                                    },
                                    res
                                );
                            };
                            break;
                        case "enum":
                            item.render = (
                                h: Vue.CreateElement,
                                params: any
                            ) => {
                                // console.log(params)
                                let res = params.row[item.key];
                                if (res) {
                                    res = res.disName;
                                }
                                return h(
                                    "div",
                                    {
                                        domProps: {
                                            title: res || "-",
                                        },
                                    },
                                    res || "-"
                                );
                            };
                            break;
                        case "enums":
                            item.render = (
                                h: Vue.CreateElement,
                                params: any
                            ) => {
                                let datas = params.row[item.key]
                                let mei: any = this.ENUMS['VersionType']
                                let str: string = ''
                                if (datas.indexOf(',') > -1) {
                                    let arr = datas.split(',')


                                    for (let i = 0; i < arr.length; i++) {
                                        for (let j = 0; j < mei.length; j++) {
                                            if (arr[i] == mei[j].name) {
                                                str += mei[j].disName + ','
                                            }
                                        }
                                    }
                                    str = str.substr(0, str.length - 1)
                                } else {
                                    for (let j = 0; j < mei.length; j++) {
                                        if (datas == mei[j].name) {
                                            str += mei[j].disName + ','
                                        }
                                    }
                                    str = str.substr(0, str.length - 1)
                                }
                                let res = str;
                                return h(
                                    "div",
                                    {
                                        domProps: {
                                            title: res || "-",
                                        },
                                    },
                                    res || "-"
                                );
                            };
                            break;
                        //拼接多个字段
                        case "join":
                            item.render = (
                                h: Vue.CreateElement,
                                params: any
                            ) => {
                                let keys = item.joinKeys;

                                let res: any = [];
                                _.each(keys, (key) => {
                                    res.push(_.at(params.row, key));
                                });
                                res = res.join(item.joinSym || "");
                                return h(
                                    "div",
                                    {
                                        domProps: {
                                            title: res,
                                        },
                                    },
                                    res
                                );
                            };
                            break;
                        //转换数字为逗号隔开
                        case "money":
                            item.render = (h: Vue.CreateElement, params: any) => {
                                let res = params.row[item.key];
                                if (res) {
                                    res = numFormatMoney(res);
                                }
                                return h(
                                    "div",
                                    {
                                        domProps: {
                                            title: res || "-",
                                        },
                                    },
                                    res || "-"
                                );
                            };
                            break;
                        //上升下降
                        case "upDown":
                            item.render = (
                                h: Vue.CreateElement,
                                params: any
                            ) => {
                                let res = params.row[item.key];
                                let isUp = _.toNumber(res) >= 0;
                                res = (isUp ? "▲ " : "▼ ") + Math.abs(res);
                                return h(
                                    "div",
                                    {
                                        domProps: {
                                            title: res || "0",
                                        },
                                        style: {
                                            color: isUp
                                                ? "rgba(230, 60, 60, 1)"
                                                : "rgba(50, 191, 25, 1)",
                                        },
                                    },
                                    res
                                );
                            };
                            break;
                        //进度条
                        case "progress":
                            item.render = (h: Vue.CreateElement, params: any) => {
                                let res = params.row[item.key];
                                if (res && res.indexOf('%') !== -1) {
                                    res = parseFloat(res);
                                } else {
                                    res = _.toNumber(res) * 100;

                                }

                                res = res.toFixed(2);

                                return h(
                                    "div",
                                    {
                                        style: {width: "100%"},
                                    },
                                    [
                                        h(
                                            "div",
                                            {
                                                domProps: {
                                                    title: res || "0%",
                                                },
                                                style: {
                                                    color:
                                                        "rgba(102, 102, 102, 1)",
                                                    textAlign: "right",
                                                },
                                            },
                                            res + "%"
                                        ),
                                        h(Progress, {
                                            props: {
                                                showText: false,
                                                percentage: _.toNumber(res),
                                                color: "rgba(38, 57, 77, 1)",
                                            },
                                        }),
                                    ]
                                );
                            };
                            break;
                        default:
                            console.error("不存在的数据类型", item.dataType);
                    }
                }
            },
        });
        return res;
    }

    resize() {
        setTimeout(() => {
            let lastEle = oc(this.$refs).form.$el.firstElementChild.lastElementChild(null) as HTMLElement
            let lastOffsetTop = lastEle ? lastEle.offsetTop : 0
            //查询条件最后一项距离父元素顶部距离(默认20,展开后42)
            this.showText = lastOffsetTop > 82;
            //取消收起后还原显示更多状态
            if (!this.showText) {
                this.isShowMore = false;
            }
        }, 100)
    }

    created() {
        //函数节流
        this.resize = _.throttle(this.resize, 300)
    }

    mounted() {
        this.$emit("input", this.pageSize);
        this.resize();
        window.addEventListener("resize", this.resize)
    }

    beforeDestroy() {
        window.removeEventListener("resize", this.resize);
    }
}
</script>

<style scoped lang="scss">
.custom-table {
    position: relative;

    .custom-table-search {
        background: #FFFFFF;
        padding: 20px 0 0;

        /deep/ .el-form {
            .el-form-item {
                //margin: 10px 10px;
            }

            .el-form-item__label {
                line-height: 0.5;
                font-size: 14px;
                height: 12px;
                color: rgba(80, 80, 80, 1);
                margin-bottom: 5px;
            }

            .el-form-item__content {
                line-height: 0;

            }

            .el-input {
                .el-input__inner {
                    height: 36px;
                    line-height: 36px;
                }
            }

            .el-select {
                .el-select__caret {
                    line-height: 36px;
                }
            }
        }
    }

    .demo-form-inline {
        display: flex;
        //align-items: center;
    }

    .slot-hidden {
        display: flex;
        width: auto;
        max-width: calc(100% - 250px);
        //max-width:600px;
        min-width: 1%;
        height: 60px;
        flex-wrap: wrap;
        overflow: hidden;
    }

    .search-option {
        width: 230px;
        height: 38px;
        line-height: 0;
        display: flex;
        align-items: flex-start;

        .search-button, .reset-button {
            width: 70px;
            height: 36px;
            padding: 10px;
        }
    }

    .custom-table-content {
        background: #FFFFFF;
        border-radius: 20px;

        .custom-table-box {
            padding: 0 30px 20px 30px;
        }
    }

    .custom-table-title {
        display: flex;
        justify-content: space-between;
        padding: 7px 30px;
        box-sizing: border-box;
        border-bottom: 1px solid #DBDBDB;

        .left {
            color: #505050;
            font-size: 16px;
            display: flex;
            align-items: center;
            height: 36px;
        }
    }

    .table-title {
        display: flex;
        align-items: center;
        width: 100%;
        border-top: 1px solid #DBDBDB;
        padding: 20px 30px;
    }

    .total-left {
        font-size: 13px;
        color: #505050;

        &-num {
            color: $primary;
        }
    }

    /deep/ .el-table {
        color: #505050;
    }

    /deep/ .el-table .cell {
        line-height: 50px !important;
        height: 50px !important;
    }

    /deep/ .el-table__header-wrapper, .el-table__footer-wrapper {
        border-radius: 5px;
    }

    /deep/ .el-table__row--striped {
        background: rgba(246, 247, 251, 1) !important;

        td {
            background: unset !important;
        }
    }

    /deep/ .el-table__row > td {
        /* 去除表格线 */
        border-left: none;
        border-right: none;
    }

    /deep/ .has-gutter tr th .cell {
        background-color: #fff;
    }

    .paginationB {
        display: flex;
        //justify-content: flex-end;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        .pagination-right {
            display: flex;
            align-items: center;
        }

        .total {
            font-size: 13px;
            color: #505050;
        }
    }

    /deep/ .el-pagination {
        .btn-prev, .btn-next {
            background: transparent;
        }

        .number.active {
            background: $primary;
            color: #ffffff;
            border-radius: 5px;
        }

        .el-pagination__rightwrapper {
            height: 60px;
            line-height: 60px;
            display: flex;
            align-items: center;

            .el-pager {
                display: flex;
                align-items: center;

                li {
                    height: 24px;
                    min-width: 24px;
                    min-height: 24px;
                }
            }
        }
    }

    /deep/ .el-checkbox {
        padding: 0 10px !important;
    }

    /deep/ .el-table__body {
        .el-table__row {

            > td {
                padding: 0;
                font-size: 13px;
                height: 40px;
                line-height: 40px;

                > .cell {
                    //padding: 0;
                    height: 40px;
                    line-height: 40px;

                }
            }

            //td:first-child{
            //    padding: 0 14px;
            //}
        }
    }

    /deep/ .el-table__header-wrapper,
    /deep/ .el-table__fixed-header-wrapper {
        //覆盖表头样式,自定义的表头填充满整个空间方便定制
        thead th {
            //flex-grow: 1;
            padding: 0;
            font-size: 14px;
            font-weight: 400;
            color: #505050;
            border-right: 0;
            //background: #EBEDF2;

            > .cell {

                //padding: 0;
                display: flex;
                align-items: center;
                background: #f0f1f5;

                > div {
                    height: 40px;
                    line-height: 40px;
                }
            }
        }
    }
}
</style>
