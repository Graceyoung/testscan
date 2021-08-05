<template>
    <div>
        <el-form ref="form"
                 v-bind="$attrs"
                 v-on="$listeners"
                 @submit.native.prevent
                 class="base-form"
                 :class="{'bl':bl,'br':br}"
                 :style="{paddingTop: top+'px',paddingLeft: left+'px',paddingBottom: bottom+'px'}">
            <div class="title" v-if="$slots.title">
                <slot name="title"></slot>
            </div>

            <slot></slot>
        </el-form>
        <template v-if="showSaveBtn||showBackBtn">
            <!-- 操作按钮居中 -->
            <el-form class="base-form btnForm"  v-if="isBtnCenter">
                <div class="line" v-if="showLine"></div>
                <base-form-line v-if="showSaveBtn||showBackBtn" class="btn-groups">
                    <base-form-Item style="float: none;margin: 0 auto">
                        <el-button v-if="showSaveBtn" type="primary" class="base-form-submit cst-success-btn"
                                   @click="$emit('on-save')">{{showSaveBtnName}}
                        </el-button>
                        <el-button v-if="showBackBtn" class="base-form-cancel cst-default-btn" @click="back">
                            {{showBackBtnName}}
                        </el-button>
                    </base-form-Item>
                </base-form-line>
            </el-form>
            <el-form class="base-form btnForm" :labelWidth="labelWidth" v-else>
                <div class="line" v-if="showLine"></div>
                <base-form-line v-if="showSaveBtn||showBackBtn" class="btn-groups">
                    <base-form-Item label="">
                        <el-button v-if="showSaveBtn" type="primary" class="base-form-submit cst-success-btn"
                                   @click="$emit('on-save')">{{showSaveBtnName}}
                        </el-button>
                        <el-button v-if="showBackBtn" class="base-form-cancel cst-default-btn" @click="back">
                            {{showBackBtnName}}
                        </el-button>
                    </base-form-Item>
                </base-form-line>
            </el-form>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {findComponentsDownward} from '@/util';
    import _ from 'lodash';
    import BaseFormLine from './BaseFormLine.vue';
    import BaseFormItem from './BaseFormItem.vue';
    import {Form} from "element-ui";


    @Component({
        name: "BaseForm",
        components: {
            BaseFormLine,
            BaseFormItem
        }
    })
    export default class BaseForm extends Vue {
        public $refs!: {
            form: Form
        }

        @Prop({
            type: Number,
            default: 40
        })
        top!: number;

        @Prop({
            type: Number,
            default: 0
        })
        left!: number

        @Prop({
            type: Number,   //下边距离
            default: 50
        })
        bottom!: number

        @Prop({
            type: [Number,String],
            default: 0
        })
        marginBottom!: number|string

        @Prop({
            type: Boolean,
            default: false
        })
        showSaveBtn!: boolean

        @Prop({
            type: String,
            default: '保 存'
        })
        showSaveBtnName!: string

        @Prop({
            type: Boolean,
            default: false
        })
        showBackBtn!: boolean

        @Prop({
            type: String,
            default: '取 消'
        })
        showBackBtnName!: string

        @Prop({
            type: Boolean,
            default: false
        })
        showLine!: boolean

        @Prop({
            type: Boolean,
            default: false
        })
        bl!: boolean

        @Prop({
            type: Boolean,
            default: false
        })
        br!: boolean

        @Prop({
            type: Boolean,
            default: false
        })
        backAlert!: boolean

        @Prop({
            type: Boolean,
            default: true
        })
        isAdd!: boolean

        //按钮是否居中
        @Prop({
            type: Boolean,
            default: true
        })
        isBtnCenter!: boolean

        labelWidth = '0'

        validate(cb:Function) {
            if (this.$refs.form) {
                this.$refs.form.validate((valid) => {
                    if (_.isFunction(cb)) {
                        cb(valid)
                    } else {
                        console.error('入参为一个函数')
                    }
                })
            } else {
                console.error('缺少ref为form的对象')
            }
        }

        back() {
            if (this.backAlert && this.showSaveBtn) {
                this.$confirm(this.isAdd ? `您页面数据还未保存，确定要返回吗？` : `当前页面更新数据尚未保存，是否确定返回？`, '提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$emit('on-back');
                })
            } else {
                this.$emit('on-back');
            }
        }

        mounted() {
            const baseLine = (findComponentsDownward(this, 'BaseLine') as BaseFormLine[]);
            _.each(baseLine, (item:any) => {
                item.marginBottom = this.marginBottom;
            });
            if (!this.isBtnCenter) {
                this.labelWidth = this.$refs.form.labelWidth
            }
        }
    }
</script>

<style scoped lang="scss">
    .base-form {
        &.btnForm{
            padding-bottom:120px;
        }
        //边框线
        &.bl {
            /deep/ .base-item.el-form-item {
                border-left: 1px solid #DCE0E5;
                padding-bottom: 20px;
            }
        }

        &.br {
            /deep/ .base-item.el-form-item {
                border-right: 1px solid #DCE0E5;
                padding-bottom: 20px;
            }
        }

        .title {
            height: 32px;
            line-height: 32px;
            background: rgba(230, 230, 230, 1);
            font-size: 14px;
            font-weight: bold;
            color: $grey-dark;
            padding-left: 15px;
            margin-bottom: 30px;
        }

        /deep/ .el-input {
            font-size: 13px;
        }

        /deep/ .el-select {
            width: 100%;
            font-size: 13px;
        }

        /deep/ .el-radio-group {
            font-size: 13px;
        }

        /deep/ .el-textarea__inner {
            font-family: $arial;
        }

        /deep/ .el-form-item__label {
            font-size: 13px;
        }

        /deep/ .el-checkbox-group {
            font-size: 13px;
        }

        /deep/ .line {
            height: 1px;
            width: 100%;
            margin-top: 40px;
            margin-bottom: 60px;
            background: rgba(230, 230, 230, 1);
        }

        /deep/ .btn-groups {
            text-align: center;
            margin-bottom: 30px;

            button {
                margin-left: 30px;
            }
        ;

            button:first-child {
                margin-left: 0;
            }

            button:nth-child(2) {
                background: rgba(0, 0, 0, 0);
                border: 0;
                //@include text-gradient();
                //.gradient-text-1

            }
        }

        .base-form-cancel {
            /*border: 0;*/
            /*background-color: rgba(204,204,204,1) !important;*/
            /*border-radius:2px;*/
            color:#666666;//#fff;
            padding:0;
            width:90px;
            height: 36px;
            border: 1px solid #D9D9D9!important;
            border-radius: 5px;

            &:hover {
                opacity: 0.9;
            }
        }

        .cst-success-btn {
           background-color:  $primary;
            padding:0;
            width:90px;
            height: 36px;
        }

        .btn-groups .base-item button:nth-child(2) {
            //color: @primary-color;
            background-image: none;
            //-webkit-text-fill-color: @primary-color;
        }
    }
</style>
