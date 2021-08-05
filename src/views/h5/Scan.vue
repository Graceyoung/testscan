<template>
    <div class="module-content">
        <select-file :showFileList="false"
                     accept="image/*"
                     :outFiles.sync="tempFile"
        >
            <span @click="clickFun">相册</span>
<!--            <img src="../../assets/images/h5/scan.png">-->
        </select-file>
        <canvas id="myCanvas" width="600" height="600" style="display: none"></canvas>
        <tip ref="tip"></tip>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Watch,Prop} from 'vue-property-decorator';
    import SelectFile from "@/components/SelectFile.vue";
    import jsqr from "jsqr";
    import tip from './Tip.vue';
    @Component({
        components:{
            SelectFile,
            tip,
        }
    })
    export default class Scan extends Vue{
        $refs!: {
            tip: tip,
        }
        traceCode:any = null;
        tempFile:any = null;

        clickFun() {
            this.$emit('on-close');
        }

        @Watch('tempFile',{
            deep: true
        })
        watchtempFile(data:any) {
            if(data) {
                this.beforeAvatarUpload(data);
            }
        }
        analysisQrcode(file:any){
            return new Promise((resolve)=>{
                var img = new Image();
                var reader = new FileReader()
                reader.readAsDataURL(file);
                reader.onload = function(e:any) {
                    img.src = e.target.result;
                    var myCanvas:any = document.getElementById('myCanvas');
                    var myCanvaswd = myCanvas.getContext('2d');
                    img.onload = function () {
                        myCanvaswd.drawImage(img, 0, 0, 600, 600);
                        var imageData = myCanvaswd.getImageData(0, 0, 600, 600);
                        let data:any = {
                            qrcode: '',
                            isqrcode: true
                        }
                        data.qrcode = jsqr(imageData.data, imageData.width, imageData.height, {
                            inversionAttempts: "dontInvert",
                        });
                        if (data.qrcode == null){
                            data.isqrcode = false
                        }
                        resolve(data)
                    }
                }
            })
        }
        //上传成功前的回调
        async beforeAvatarUpload(file:any) {
            let data:any = await this.analysisQrcode(file)
            console.log(data)
            let traceCode = data.qrcode && data.qrcode.data;
            if(traceCode !== '' && traceCode != null) {
                this.$emit('on-scan',traceCode);
            }else {
                this.$refs.tip.warning('识别失败，请检查二维码是否正确！');
            }
        }
    }
</script>

<style scoped lang="scss">
</style>