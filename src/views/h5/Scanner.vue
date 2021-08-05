<template>
    <div class="wrapper">
        <div class="header">
            <span @click="backFun">取消</span>
            <span @click="openMedia" class="header-btn color-blue">扫码</span>
            <scan @on-close="closeMedia" @on-scan="scanSuccess"></scan>
        </div>
        <div class="canvas-wrap">
            <canvas class="canvas" ref="canvas"></canvas>
            <div class="bg">
                <div class="pane"></div>
            </div>
        </div>
        <tip ref="tip"></tip>
    </div>
</template>

<script lang="ts">
    import {Vue,Component,Watch,Prop} from 'vue-property-decorator';
    import jsQR from "jsqr";
    import scan from './Scan.vue';
    import tip from './Tip.vue';

    @Component({
        components:{
            scan,
            tip,
        }
    })
    export default class Scan extends Vue{
        $refs!: {
            canvas:any,
            tip: tip,
        }
        timer:any= null;
        result:any= "";
        imgurl:any=
            "https://raw.githubusercontent.com/MuGuiLin/QRCode/master/VueQRCode/src/assets/github.com.png";
        imgurl2:any=
            "https://raw.githubusercontent.com/MuGuiLin/QRCode/master/VueQRCode/src/assets/github.com.png";
        isAnimation:any= true;
        audio:any= null;
        video:any= null;
        cvsele:any= null;
        canvas:any= null;
        mediaStreamTrack:any=null;
        isOpenMedia:boolean = false;

        mounted() {
            this.audio = new Audio("../assets/tone.mp3");
            this.video = document.createElement("video");
            this.cvsele = this.$refs.canvas;
            this.canvas = this.cvsele.getContext("2d");
            this.$nextTick(()=>{
                this.draw();
                this.media();
            })
        }

        openMedia() {
            if(!this.isOpenMedia) {
                this.media();
            }
        }

        draw(begin?:any, end?:any) {
            /*this.canvas.beginPath();
            this.canvas.moveTo(begin.x, begin.y);
            this.canvas.lineTo(end.x, end.y);
            this.canvas.lineWidth = 3;
            this.canvas.strokeStyle = "red";
            this.canvas.stroke();*/

        }

        sweep() {
            if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
                const { videoWidth, videoHeight } = this.video;
                this.cvsele.width = videoWidth;
                this.cvsele.height = videoHeight;
                this.canvas.drawImage(this.video, 0, 0, videoWidth, videoHeight);
                try {
                    const img = this.canvas.getImageData(0, 0, videoWidth, videoHeight);
                    this.imgurl = img;
                    const obj = jsQR(img.data, img.width, img.height, {
                        inversionAttempts: "dontInvert",
                    });
                    if (obj) {
                        const loc = obj.location;
                        this.draw(loc.topLeftCorner, loc.topRightCorner);
                        this.draw(loc.topRightCorner, loc.bottomRightCorner);
                        this.draw(loc.bottomRightCorner, loc.bottomLeftCorner);
                        this.draw(loc.bottomLeftCorner, loc.topLeftCorner);
                        if (this.result != obj.data) {
                            this.audio.play();
                            this.result = obj.data;
                            this.isAnimation = false;
                            cancelAnimationFrame(this.timer);
                            console.info("识别结果：", obj.data);
                            let result = obj.data;
                            this.closeMedia();
                            this.scanSuccess(result);
                            /*setTimeout(() => {
                                this.cvsele.style.display = "none";
                            }, 400);*/
                        }
                    } else {
                        console.error("识别失败，请检查二维码是否正确！");
                    }
                } catch (err) {
                    console.error("识别失败，请检查二维码是否正确！", err);
                }
            }
            if (this.isAnimation) {
                this.timer = requestAnimationFrame(() => {
                    this.sweep();
                });
            }
        }

        media() {
            this.isAnimation = true;
            this.cvsele.style.display = "block";
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
            // alert(navigator.getUserMedia);
            if (navigator.mediaDevices) {
                navigator.mediaDevices
                    .getUserMedia({
                        video: { facingMode: "environment" },
                    })
                    .then((stream) => {
                        this.isOpenMedia = true;
                        this.mediaStreamTrack = stream;
                        this.video.srcObject = stream;
                        this.video.setAttribute("playsinline", true);
                        this.video.setAttribute("webkit-playsinline", true);
                        this.video.addEventListener("loadedmetadata", () => {
                            this.video.play();
                            this.sweep();
                        });
                    })
                    .catch((error:any) => {
                        console.error(
                            error.name + "：" + error.message + "，" + error.constraint
                        );
                    });
            } else if (navigator.getUserMedia) {
                navigator.getUserMedia(
                    {
                        video: { facingMode: "environment" },
                    },
                    (stream) => {
                        this.isOpenMedia = true;
                        this.mediaStreamTrack = stream;
                        this.video.srcObject = stream;
                        this.video.setAttribute("playsinline", true);
                        this.video.setAttribute("webkit-playsinline", true);
                        this.video.addEventListener("loadedmetadata", () => {
                            this.video.play();
                            this.sweep();
                        });
                    },
                    (error:any) => {
                        console.error(
                            error.name + "：" + error.message + "，" + error.constraint
                        );
                    }
                );
            } else {
                if (
                    navigator.userAgent.toLowerCase().match(/chrome/) &&
                    location.origin.indexOf("https://") < 0
                ) {
                    console.error(
                        "获取浏览器录音功能，因安全性问题，需要在localhost 或 127.0.0.1 或 https 下才能获取权限！"
                    );
                    this.$refs.tip.warning('获取浏览器录音功能，因安全性问题，需要在localhost 或 127.0.0.1 或 https 下才能获取权限！');
                } else {
                    this.$refs.tip.warning('对不起：未识别到扫描设备!');
                }
            }
        }

        scanSuccess(trace:any) {
            this.$router.push({
                path: '/h5/info',
                query: {
                    traceCode: trace
                }
            })
        }
        backFun() {
            this.closeMedia();
            this.$emit('backEvent');
        }
        closeMedia() {
            this.audio.play();
            this.isAnimation = false;
            cancelAnimationFrame(this.timer);
            this.isOpenMedia = false;
            try {
                this.mediaStreamTrack.getTracks()[0].stop();
            }catch (e) {
                console.log(e);
            }
        }

    }
</script>

<style scoped lang="scss">
    .wrapper{
        height: 100vh;
        width: 100%;
        background-color: #000;
        .canvas-wrap{
            height: 50vh;
            width: 100%;
            margin-top: 6rem;
            position: relative;
        }
        .canvas{
            height: 50vh;
            width: 100%;
            background-color: #000;
        }
        .bg, .pane {
            width: 20rem;
            height: 20rem;
            overflow: hidden;  /* 隐藏显示区域外的内容*/
        }
        .bg{
            position: absolute;
            top: calc((50vh - 20rem)/2);
            left: calc((100vw - 20rem)/2);
        }

        .bg {
            background: url(../../assets/images/h5/2.png) no-repeat;// center center no-repeat;
            background-size: cover;
            border: 1px solid #b0f9e4;
            z-index: 9;
        }

        .pane {
            position: absolute;
            z-index: 8;
            background: url(../../assets/images/h5/4.png)no-repeat;
            background-size: cover;
            animation: move 1.5s ease-in-out infinite ;
            -webkit-animation: move 1.5s ease-in-out infinite;
        }
        @keyframes move {
            from{top:-20rem}  /*网格移动到显示区域的外面*/
            to{top:0}
        }
        @-webkit-keyframes move {
            from{top:-20rem}
            to{top:0}
        }
        .header{
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 4.4rem;
            padding: 0 1.5rem;
            font-size: 1.6rem;
            color: #fff;
            background-color: #000;
            .header-btn{
                padding: 0 1rem;
            }
            .color-blue{
                color: #2D57CC;
                font-weight: bold;
            }
        }

        /deep/ .upload-file > div{
            height: auto;
        }
    }
</style>