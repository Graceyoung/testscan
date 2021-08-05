<template>
    <div class="clear base-line" :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: "BaseLine"
    })
    export default class BaseLine extends Vue {
        @Prop({
            type: Object,
        })
        newStyle!: CSSStyleDeclaration | any

        @Prop({
            type: Boolean,
            default: false
        })
        noB!: boolean

        marginBottom = '';

        get style() {
            return {...{marginBottom: parseFloat(this.marginBottom) + 'px', ...this.newStyle}}
        }

        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    /*@import '~dcp-common-components/src/theme/Index.vue.less';*/

    .base-line {
        position: relative;
        display: flex;

        &:last-child {
            margin-bottom: 0 !important;
        }

        /deep/ .ivu-form-item {
            color: colorGrey(2);
            margin-bottom: 0;
            float: left;
            //基本样式
            .ivu-input-wrapper {
                width: 200px;
            }

            .ivu-form-item-label {
                height: 34px;
                line-height: 34px;
                color: #666;
                font-size: 13px;
                padding: 0 10px 0 0;
            }

            //右侧扩展元素
            .base-line-body {
                height: 34px;
                line-height: 34px;
                font-size: 13px;
                color: colorGrey(1);
                float: right;

                .state, .unit, .tip, .op, .pop-tip {
                    margin-left: 10px;
                }

                .unit {
                    color: $primary;
                }

                .pop-tip {
                    color: $warning;
                    position: relative;
                    top: -2px;
                    cursor: pointer;
                }

                .op {
                    color: $primary;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            //输入框
            .ivu-input {
                width: inherit;
                color: colorGrey(1);
            }

            //数字输入框
            .ivu-input-number .ivu-input-number-input {
                color: colorGrey(1);
            }

            //placeholder
            .ivu-input::placeholder,
            .ivu-input-number .ivu-input-number-input::placeholder,
            .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
            .ivu-select-multiple .ivu-select-selection .ivu-select-placeholder,
            .ivu-select-input::placeholder {
                color: colorGrey(2);
                font-size: 13px;
            }

            //下拉框
            .ivu-select {
                width: 200px;
            }

            //单选
            .ivu-radio-group {
                .ivu-radio-wrapper {
                    margin-right: 60px;
                    font-size: 13px;
                    color: colorGrey(1);

                    .ivu-radio-inner {
                        position: relative;
                        top: -1px;
                    }

                    .ivu-radio-checked {
                        .ivu-radio-inner {
                            border-color: transparent;
                            //background-color: @primary-color;
                            &:after {
                                width: 4px;
                                height: 4px;
                                background-color: $white;
                                top: 4px;
                                left: 4px;
                            }
                        }
                    }
                }
            }

            //多选
            .ivu-checkbox-group {
                .ivu-checkbox-wrapper {
                    margin-right: 60px;

                    .ivu-checkbox-inner {
                        position: relative;
                        top: -1px;
                    }

                    .ivu-checkbox + span {
                        color: colorGrey(1);
                        margin-right: 0;
                    }
                }
            }

            .base-form-submit, .base-form-cancel {
                width: 100px;
                height: 40px;
                font-size: 14px;
            }

            //提交按钮
            .base-form-submit {
            }

            //取消按钮
            .base-form-cancel {
                background: rgba(198, 201, 204, 1);
                color: colorGrey(1);
            }

            //日期选择框(元素在组件内)
            .ivu-date-picker {
                width: 200px;

                .ivu-input-wrapper {
                    width: 100%;
                }
            }

            //disable样式
            //默认输入框、文本域、数字输入框、单选、多选、日期
            .ivu-input[disabled],
            fieldset[disabled] .ivu-input,
            .ivu-input-number .ivu-input-number-disabled .ivu-input-number-input[disabled],
            .ivu-select.ivu-select-disabled .ivu-select-selection {
                color: colorGrey(2);
                background-color: $grey-lighter;
                border-color: #D9D9D9;
            }

            .ivu-select.ivu-select-disabled .ivu-select-selection .ivu-select-selected-value,
            .ivu-checkbox-group .ivu-checkbox-wrapper-disabled span,
            .ivu-radio-group .ivu-radio-wrapper-disabled {
                color: colorGrey(2) !important;
            }

            //修复 数字输入框 透明度为1
            .ivu-input-number-input[disabled] {
                opacity: 1;
                background-color: $grey-lighter;
                border-color: #D9D9D9;
                color: colorGrey(2);
            }

            .ivu-input[disabled]::placeholder,
            fieldset[disabled] .ivu-input::placeholder,
            .ivu-input-number-input[disabled]::placeholder,
            .ivu-select.ivu-select-disabled .ivu-select-placeholder {
                color: colorGrey(2);
                font-size: 13px;
            }

            //radio 选中
            .ivu-radio-wrapper .ivu-radio-checked {
                &.ivu-radio-disabled .ivu-radio-inner {
                    border-color: #D9D9D9;
                    background-color: $grey-lighter;

                    &::after {
                        background-color: colorGrey(2);
                    }
                }
            }

            .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
                font-size: 13px;
            }

            .ivu-select.ivu-select-disabled .ivu-select-selection .ivu-select-selected-value, .ivu-form-item .ivu-checkbox-group .ivu-checkbox-wrapper-disabled span {
                font-size: 13px;
            }
        }

        /deep/ .ivu-tag {
            font-size: 13px;
        }
    }

</style>
