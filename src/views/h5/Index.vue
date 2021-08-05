<template>
    <inset-back pageName="/h5" class="wrapper scrollBar">
        <div class="header">商品流通追溯</div>
        <div class="content">
            <div class="title">
                <p>亚北冷链产业园</p>
                <p>商品流通追溯服务平台</p>
            </div>
            <img src="../../assets/images/h5/bg.png">
            <div class="scan-wrap">
                <img @click="toPage" src="../../assets/images/h5/scan.png">
<!--                <scan @on-scan="toScan"></scan>-->
            </div>
        </div>
        <tip ref="tip"></tip>
    </inset-back>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator';
    import tip from './Tip.vue';

    @Component({
        name: 'Index',
        components: {
            tip
        }
    })
    export default class Index extends Vue{
        $refs!: {
            canvas:any,
            tip: tip,
        }

        created() {
        }
        toScan(trace:any) {
            this.$router.push({
                path: '/h5/info',
                query: {
                    traceCode: trace
                }
            })
        }

        toPage() {
            if(this.isInWx()) {
                this.$router.push({
                    path: '/h5/scanner',
                })
            }else {
                this.$refs.tip.warning('请在微信中使用！');
            }
        }

        isInWx() {
            let userAgent = navigator.userAgent || '';
            return userAgent.toLowerCase().indexOf('micromessenger') !== -1;
        }
    }
</script>

<style scoped lang="scss">
.wrapper{
    height: 100%;
    position: relative;
    .header{
        width: 100%;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        font-size: 1.6rem;
        color: #000000;
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
    }
    .content{
        height: 100%;
        background: linear-gradient(90deg, #0052F5, #0076F6);
        overflow-y: auto;
        padding-top: 4.4rem;
    }
    .title{
        padding-top: 6rem;
        padding-bottom: 3rem;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 5rem;
    }
    .scan-wrap{
        height: 13.6rem;
        display: flex;
        justify-content: center;
        background: url("../../assets/images/h5/round.png") no-repeat;
        background-size: cover;
        background-position: center;
        /deep/ img{
            width: 10rem;
            height: 10rem;
            margin-top: 2.4rem;
        }
    }
}
</style>