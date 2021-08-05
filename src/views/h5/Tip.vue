<template>
    <div class="tip-wrap" v-if="isShow">
        {{name}}
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    @Component({
        name: 'Tip'
    })
    export default class Tip extends Vue{
        name:any = null;
        isShow:boolean = false
        warning(name:any) {
            this.name = name;
            this.isShow = true;
            setTimeout(()=>{
                this.isShow = false;
            },2000)
        }
    }
</script>

<style scoped lang="scss">
.tip-wrap{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 70vw;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #000000;
    color: #fff;
}
</style>