(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5130c923"],{"0730":function(e,t,i){"use strict";var a=i("8055"),s=i.n(a);s.a},8055:function(e,t,i){},e16d:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("span",{on:{click:e.backFun}},[e._v("取消")]),i("span",{staticClass:"header-btn color-blue",on:{click:e.openMedia}},[e._v("扫码")]),i("span")]),i("div",{staticClass:"canvas-wrap"},[i("canvas",{ref:"canvas",staticClass:"canvas"}),e._m(0)]),i("tip",{ref:"tip"})],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg"},[i("div",{staticClass:"pane"})])}],n=(i("c975"),i("b0c0"),i("466d"),i("276c")),o=i("e954"),c=i("e1a7"),r=i("f20d"),d=i("920b"),l=i("9ab4"),u=i("60a3"),v=i("ecec"),h=i.n(v),m=i("05eb"),p=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.timer=null,e.result="",e.imgurl="https://raw.githubusercontent.com/MuGuiLin/QRCode/master/VueQRCode/src/assets/github.com.png",e.imgurl2="https://raw.githubusercontent.com/MuGuiLin/QRCode/master/VueQRCode/src/assets/github.com.png",e.isAnimation=!0,e.audio=null,e.video=null,e.cvsele=null,e.canvas=null,e.mediaStreamTrack=null,e.isOpenMedia=!1,e}return Object(d["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){var e=this;this.audio=new Audio("../assets/tone.mp3"),this.video=document.createElement("video"),this.cvsele=this.$refs.canvas,this.canvas=this.cvsele.getContext("2d"),this.$nextTick((function(){e.media()}))}},{key:"openMedia",value:function(){this.isOpenMedia||this.media()}},{key:"sweep",value:function(){var e=this;if(this.video.readyState===this.video.HAVE_ENOUGH_DATA){var t=this.video,i=t.videoWidth,a=t.videoHeight;this.cvsele.width=i,this.cvsele.height=a,this.canvas.drawImage(this.video,0,0,i,a);try{var s=this.canvas.getImageData(0,0,i,a);this.imgurl=s;var n=h()(s.data,s.width,s.height,{inversionAttempts:"dontInvert"});if(n){n.location;if(this.result!=n.data){this.audio.play(),this.result=n.data,this.isAnimation=!1,cancelAnimationFrame(this.timer),console.info("识别结果：",n.data);var o=n.data;this.closeMedia(),this.scanSuccess(o)}}else console.error("识别失败，请检查二维码是否正确！")}catch(c){console.error("识别失败，请检查二维码是否正确！",c)}}this.isAnimation&&(this.timer=requestAnimationFrame((function(){e.sweep()})))}},{key:"media",value:function(){var e=this;this.isAnimation=!0,this.cvsele.style.display="block",navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(t){e.isOpenMedia=!0,e.mediaStreamTrack=t,e.video.srcObject=t,e.video.setAttribute("playsinline",!0),e.video.setAttribute("webkit-playsinline",!0),e.video.addEventListener("loadedmetadata",(function(){e.video.play(),e.sweep()}))})).catch((function(e){console.error(e.name+"："+e.message+"，"+e.constraint)})):navigator.getUserMedia?navigator.getUserMedia({video:{facingMode:"environment"}},(function(t){e.isOpenMedia=!0,e.mediaStreamTrack=t,e.video.srcObject=t,e.video.setAttribute("playsinline",!0),e.video.setAttribute("webkit-playsinline",!0),e.video.addEventListener("loadedmetadata",(function(){e.video.play(),e.sweep()}))}),(function(e){console.error(e.name+"："+e.message+"，"+e.constraint)})):navigator.userAgent.toLowerCase().match(/chrome/)&&location.origin.indexOf("https://")<0?(console.error("获取浏览器录音功能，因安全性问题，需要在localhost 或 127.0.0.1 或 https 下才能获取权限！"),this.$refs.tip.warning("获取浏览器录音功能，因安全性问题，需要在localhost 或 127.0.0.1 或 https 下才能获取权限！")):this.$refs.tip.warning("对不起：未识别到扫描设备!")}},{key:"scanSuccess",value:function(e){this.$router.push({path:"/h5/info",query:{traceCode:e}})}},{key:"backFun",value:function(){this.closeMedia(),this.$emit("backEvent")}},{key:"closeMedia",value:function(){this.audio.play(),this.isAnimation=!1,cancelAnimationFrame(this.timer),this.isOpenMedia=!1;try{this.mediaStreamTrack.getTracks()[0].stop()}catch(e){console.log(e)}}}]),t}(u["d"]);p=l["a"]([Object(u["a"])({components:{tip:m["default"]}})],p);var g=p,f=g,b=(i("0730"),i("2877")),k=Object(b["a"])(f,a,s,!1,null,"ea3be232",null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-5130c923.a795bd91.js.map