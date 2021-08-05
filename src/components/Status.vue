<template>
    <div class="status-wrap">
        <span v-if="title" class="status-title">
             <i class="circle" :class="title"></i>
            {{ matchingType.title }}
        </span>
        <span v-else>-</span>
    </div>
</template>

<script>
export default {
    name: "status",
    props: {
        title: {
            title: String,
            default: ''
        },
    },
    data() {
        return {
            config: {
                y: {
                    title: "启用"
                },
                n: {
                    title: "停用"
                },
                success: {
                    title: "成功"
                },
                fail: {
                    title: "失败"
                },
                not_contacted: {
                    title: '未联系'
                },
                contacted: {
                    title: '已联系'
                },
                effective: {
                    title: '已生效'
                },
                expired: {
                    title: '已过期'
                },
                ineffective: {
                    title: '未生效'
                },
                invalid: {
                    title: '已作废'
                },
                wait_submit: {
                    title: '待提交'
                },
                end: {
                    title: '已终止'
                },
                not_signed: {
                    title: '未签单'
                },
                normal: {
                    title: '正常'
                },
                stop: {
                    title: '停用'
                },
                contract_expired: {
                    title: '合同过期'
                },
                wait_deal: {
                    title: '未处理'
                },
                deal: {
                    title: '已处理'
                },
                reject: {
                    title: '驳回'
                },
                not: {
                    title: '未盘库'
                },
                doing: {
                    title: '盘库中'
                },
                already: {
                    title: '已盘库'
                },
                plan_wait_submit: {
                    title: '未提交'
                },
                not_storage: {
                    title: '未入库'
                },
                stored: {
                    title: '已入库'
                },
                not_transfer: {
                    title: '未调仓'
                },
                transferred: {
                    title: '已调仓'
                },
                not_delivery: {
                    title: '未出库'
                },
                order_wait_submit: {
                    title: '未提交'
                },
                unsettled: {
                    title: '未结算'
                },
                unclear: {
                    title: '未结清'
                },
                written_off: {
                    title: '已冲销'
                },
                settled: {
                    title: '已结算'
                },
                delivery: {
                    title: '已出库'
                },
                not_submit: {
                    title: '未提交'
                }
            }
        }
    },
    computed: {
        matchingType() {
            let c = this.config[this.title];
            if (c) {
                return c;
            } else {
                return {
                    title: '-'
                };
            }
        }
    }
}
</script>

<style scoped lang="scss">
.status-wrap {
    font-size: 13px;
    display: inline-block;
    color: #505050;

    .circle {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: $warning;
        border-radius: 50%;
        margin-right: 4px;
    }

    .status-title {
        display: flex;
        align-items: center;
    }

    .y, .success, .contacted, .effective, .deal, .already, .settled, .delivery {
        background: #39BF39;
    }

    .normal, .stored, .transferred {
        background: #36B336;
    }

    .stop, .contract_expired, .lock_up {
        background: #E04F48;
    }

    .not_contacted, .wait_submit, .not_signed, .doing, not_delivery, .wait_deal, .unclear, .written_off {
        background: #D68711;
    }

    .ineffective, .not, .plan_wait_submit, .order_wait_submit, .unsettled,.not_submit {
        background: #2D57CC;
    }

    .n, .fail, .invalid, .end, .expired, .reject {
        background: #EE544D;
    }
}
</style>
