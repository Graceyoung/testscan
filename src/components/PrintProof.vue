<template>
    <div>
        <!--todo 对接时直接调用组件函数,没有这个按钮 -->
        <el-button @click="print">打印</el-button>
        <div class="print-proof" ref="printContent">
            <div v-for="(item,index) of tableList"
                 :key="index"
                 :class="`${baseClass}-row-item`">
                <div class="title">
                    <canvas class="code" ref="code"></canvas>
                    <div class="title-text">{{ printTitle }}</div>
                    <div class="page">{{ getPageNum(index + 1) }}/{{ getPageNum(tableList.length) }}</div>
                </div>
                <div class="field">
                    <div class="field-item">
                        <div class="field-label">
                            {{orderName}}单号：
                        </div>
                        <div class="field-value">
                            {{ info.code }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            {{orderName}}时间：
                        </div>
                        <div class="field-value">
                            {{ info.entryTime }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            打印时间：
                        </div>
                        <div class="field-value">
                            {{ printTime }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            货主姓名：
                        </div>
                        <div class="field-value">
                            <!-- 超长隐藏 -->
                            {{ info.ownerName }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            合同名称：
                        </div>
                        <div class="field-value">
                            {{ info.contractName }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            联系方式：
                        </div>
                        <div class="field-value">
                            {{ info.tel }}
                        </div>
                    </div>
                </div>
                <!-- 表格部分 -->
                <table class="table-content"
                       border="1" cellspacing="0" cellpadding="0">
                    <thead>
                    <tr>
                        <th v-for="c in columns" :key="c.key">{{ c.name }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(itemRow,indexRow) in item" :key="indexRow">
                        <td v-for="c in columns" :key="`td${c.key}`">{{ itemRow[c.key] }}</td>
                    </tr>
                    <tr v-if="isShowTotal">
                        <!-- 认为第一项必定是非统计列处理 -->
                        <td v-for="(c,cIndex) in countColumns" :key="`count${c.key}`">
                            {{ cIndex ? c.countNum === undefined ? '' : c.countNum : '合计' }}
                        </td>
                    </tr>
                    <tr v-if="isShowRemark">
                        <td :colspan="columns.length" style="text-align: left;padding-left: 5mm;">备注</td>
                    </tr>
                    </tbody>
                </table>
                <div class="info-content">
                    <div class="field-item">
                        <div class="field-label">
                            开单员：
                        </div>
                        <div class="field-value">
                            <!-- 当前登录账户 -->
                            {{ LOGIN_INFO.name }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            理货员：
                        </div>
                        <div class="field-value">
                            {{ info.tallyClerk }}
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            实操员：
                        </div>
                        <div class="field-value">
                            &nbsp;
                        </div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">
                            货主：
                        </div>
                        <div class="field-value">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Mixins, Prop, Watch} from 'vue-property-decorator'
import {printdiv} from '@/util'
import jsBarcode from 'jsbarcode'
import moment from 'moment'
import _ from 'lodash'
import LoginInfo from "@/mixins/loginInfo";

/**
 * 打印插件,用于分页显示内容
 */
@Component({
    mixins: [LoginInfo]
})
export default class PrintProof extends Mixins(LoginInfo) {
    public $refs!: {
        printContent: HTMLDivElement
        code: HTMLCanvasElement[]
    }
    baseClass = 'print-proof'

    /**
     * 打印单标题
     */
    @Prop({
        type: String,
        default: '亚北冷链出库单'
    })
    printTitle!: string

    // 入库单号，入库时间
    @Prop({
        type: String,
        default: '入库'
    })
    orderName!: string

    // 是否打印合计，系统配置打印字段获取
    @Prop({
        type: Boolean,
        default: true
    })
    isShowTotal!: boolean

    // 是否打印备注，系统配置打印字段获取
    @Prop({
        type: Boolean,
        default: true
    })
    isShowRemark!: boolean

    /**
     * 数据列表
     */
    @Prop({
        type: Array,
        default() {
            //todo 正式对接时移除测试数据
            let item = {
                a: '#6823',
                b: 'S1463',
                c: '三花',
                d: '5',
                e: '23',
                f: '115',
                g: '21',
                h: '1',
                i: '库位一',
                k: '20'
            }
            let res = []
            for (let i = 0; i < 8; i++) {
                res.push(_.cloneDeep(item))
            }
            return res
        }
    })
    list!: any[]

    /**
     * 列表字段配置
     */
    @Prop({
        type: Array,
        default() {
            //todo 需要调整默认的字段key值
            return [
                {key: 'a', name: '批号'},
                {key: 'b', name: '商品编号'},
                {key: 'c', name: '商品名称/规格'},
                {key: 'd', name: '件数', isCount: true},
                {key: 'e', name: '件重(Kg)'},
                {key: 'f', name: '总重(Kg)', isCount: true},
                {key: 'g', name: '件/板', isCount: true},
                {key: 'h', name: '板数', isCount: true},
                {key: 'i', name: '存放库位'},
                {key: 'k', name: '剩余件数'}
            ]
        }
    })
    columns!: {
        key: string
        name: string
        isCount: boolean
        countNum?: number
    }[]

    /**
     * 其他展示信息
     */
    @Prop({
        type: Object,
        default() {
            //todo 对接时清空数据
            return {
                code: 'E202106112210',
                entryTime: '2020-01-02 11:23:24',
                ownerName: '王帆',
                contractName: 'L202106112210',
                tel: '13409040163',
                tallyClerk: '陈少华、罗平、黄俊才、王国勇、章丘林、张高华、范修文'
            }
        }
    })
    info!: {
        //todo 对接时以实际字段为准
        //入库单号
        code: string
        //入库时间
        entryTime: string
        //货主姓名
        ownerName: string
        //合同名称
        contractName: string
        //联系方式
        tel: string
        //理货员
        tallyClerk: string
    }

    //分页后的列表
    get tableList() {
        return _.chunk(this.list, 5)
    }

    //列表数据变化时重新渲染一维条码
    @Watch('list', {
        deep: true,
        immediate: true
    })
    watchList() {
        this.$nextTick(() => {
            if (this.$refs.code && this.$refs.code.length) {
                jsBarcode(this.$refs.code, this.info.code, {displayValue: false, fontOptions: 'bold'})
            }
        })
    }

    //合计列数据
    get countColumns() {
        let res = _.cloneDeep(this.columns)
        for (let item of res) {
            if (!item.isCount) {
                continue
            }
            item.countNum = 0
            for (let itemData of this.list) {
                if (!itemData[item.key]) {
                    continue
                }
                let num = parseFloat(itemData[item.key])
                if (!_.isNaN(num)) {
                    item.countNum += num;
                }
            }
        }

        return res;
    }

    getPageNum(num: number) {
        return _.padStart(num, 4, '0')
    }

    //打印时间
    printTime = moment().format('YYYY-MM-DD HH:mm:ss')

    //打印当前页面
    print() {
        this.printTime = moment().format('YYYY-MM-DD HH:mm:ss');

        //更新时间后再打印
        this.$nextTick(() => {
            printdiv(this.$refs.printContent)
        })
    }
}
</script>

<style scoped lang="scss">
.print-proof {
    margin-bottom: 20px;

    &-row-item {
        background: #FFFFFF;
        overflow: hidden;
        width: 200mm;
        height: 85mm;
        padding: 2mm 0 0 2mm;
        page-break-after: always;
        position: relative;
        font-size: 2mm;

        .title {
            height: 15mm;
            line-height: 15mm;
            position: relative;
            text-align: center;

            .title-text {
                font-size: 6mm;
            }

            .code {
                position: absolute;
                top: 0;
                left: 0;
                height: 15mm;
                width: 50mm;
            }

            .page {
                position: absolute;
                top: 0;
                right: 0;
                height: 15mm;
                width: 50mm;
            }
        }

        .field {
            display: grid;
            grid-template-columns: repeat(3, 33.33%);

            .field-item {
                display: flex;
                margin-bottom: 1mm;

                .field-label {
                    width: 16.5mm;
                }

                .field-value {
                    width: calc(100% - 20mm);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }

        .table-content {
            width: 100%;
        }

        table, table tr th, table tr td {
            border: .5mm solid black;
            text-align: center;
        }

        .info-content {
            display: grid;
            grid-template-columns: repeat(4, 25%);
            border-top: .5mm solid black;
            margin-top: 3mm;
            padding-top: 1mm;
            height: 15mm;
            overflow: hidden;

            .field-item {
                display: flex;
                margin-bottom: 1mm;

                .field-label {
                    width: 13mm;
                }

                .field-value {
                    width: calc(100% - 16mm);
                }
            }
        }
    }
}
</style>
