<template>
    <el-form-item v-bind="$attrs"
                  v-on="$listeners"
                  class="base-item"
                  :class="{'noLabel':noLabel,'noBorder':noBorder}">
        <slot></slot>
    </el-form-item>
</template>

<script lang="ts">
    import {findComponentUpward} from '@/util';
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import BaseFormLine from './BaseFormLine.vue'

    @Component({
        name: "BaseItem"
    })
    export default class BaseItem extends Vue {

        @Prop({
            type: Boolean,
            default: false
        })
        noLabel!: boolean

        @Prop({
            type: Boolean,
            default: false
        })
        noB!: boolean

        noBorder = false

        mounted() {
            const baseLine = (findComponentUpward(this, 'BaseLine') as BaseFormLine);
            if (baseLine.noB) {
                this.noBorder = true;
            }
            if (this.noB) {
                this.noBorder = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .base-item {
        /deep/ .el-form-item__content {
            font-size: 13px;
        }

        &.noBorder {
            border: 0 !important;
        }

        &.noLabel {
            /deep/ .el-form-item__content {
                margin-left: 0 !important;
                margin-right: 10px;
                font-size: 14px;
            }
        }
    }
</style>
