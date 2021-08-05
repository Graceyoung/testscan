<template>
    <div class="login">
        <!-- 登录页 -->
        <div class="login-content-box">
            <h3 class="titlehead"></h3>
            <el-tabs class="tabs-login">
                <el-tab-pane style="display: none">
                    <span slot="label"><customIcon iconClass="uniE005"></customIcon> 账号密码</span>
                    <div class="login-tip">账号密码登录</div>
                    <div class="login_m">
                        <el-form :model="formItem"
                                 ref="loginForm" label-width="0px" class="demoRuleForm">
                            <el-form-item prop="loginName" :rules="[
                                                                { required: true, message: '请输入用户名',trigger: 'blur'}
                                                            ]">
                                <el-input placeholder="输入用户名" v-model="formItem.loginName"></el-input>
                            </el-form-item>
                            <el-form-item prop="password" :rules="[
                                                                { required: true, message: '请输入密码',trigger: 'blur'}
                                                            ]">
                                <el-input @keyup.enter.native="login"
                                          type="password"
                                          placeholder="输入密码"
                                          v-model="formItem.password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" class="loginBtn" @click="login">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import {sso_web} from '@/api'
import {ticketUtil} from 'sso2-access-util'
import CustomIcon from "@/components/customIcon/Index.vue";
import {Form} from 'element-ui'
import {md5} from 'md5js'

@Component({
    components: {
        CustomIcon
    }
})
export default class Login extends Vue {
    public $refs!: {
        bindSmsForm: Form
        loginSmsForm: Form
        loginForm: Form
    }
    formItem = {
        loginName: '',
        password: '',
        tel: '',
        codeTicket: '',
        code: ''
    };
    isSend = false;
    time = 60;
    timer: any = null;

    //是否显示绑定页面
    isBindPage = false

    /**
     * 获取短信验证码
     */
    async getSmsCode() {
        try {
            if (this.isBindPage) {
                // await sso.sso_user_sendBindCaptcha_post({
                //     data: {
                //         tel: this.formItem.tel
                //     },
                //     notProcessed: true,
                //     load: {fullLoading: true}
                // })
            } else {
                // await sso.sso_user_sendLoginCaptcha_post({
                //     data: {
                //         tel: this.formItem.tel
                //     },
                //     notProcessed: true,
                //     load: {fullLoading: true}
                // })
            }
        } catch (e) {
            this.$notify.error(e.message)
            throw new Error(e.message)
        }

    }

    async getSend() {
        await this.getSmsCode();
        this.time = 60;
        this.isSend = true;
        clearInterval(this.timer);
        this.timer = setInterval(this.computedTime, 1000);
    }

    computedTime() {
        if (this.time <= 1) {
            clearInterval(this.time);
            this.isSend = false;
            return;
        }
        this.time--;
    }

    bindBySms() {
        this.$refs.bindSmsForm.validate((flag: boolean) => {
            if (flag) {
                // sso.sso_user_bingCtrQrWithLogin_post({
                //     data: {
                //         ...this.formItem,
                //         telCode: this.formItem.codeTicket
                //     },
                //     notProcessed: true
                // }).then((data) => {
                //     this.toHome(data)
                // }, (e) => {
                //     this.$notify.error(e.message)
                // })
            }
        })
    }

    loginBySms() {
        this.$refs.loginSmsForm.validate((flag: boolean) => {
            if (flag) {
                // sso.sso_user_loginTel_post({
                //     data: {
                //         codeTicket: this.formItem.codeTicket,
                //         tel: this.formItem.tel
                //     },
                //     notProcessed: true
                // }).then((data) => {
                //     this.toHome(data)
                // }, (e) => {
                //     this.$notify.error(e.message)
                // })
            }
        })
    }

    toHome(data: { data: { ticket: string } }) {
        ticketUtil.ticket(data.data.ticket)
        this.$router.push('/main')
    }

    login() {
        this.$refs.loginForm.validate((flag: boolean) => {
            if (flag) {
                sso_web.sso_web_sso_login_post({
                    data: {
                        loginName: this.formItem.loginName,
                        loginRoleType:'platform',
                        password: md5(this.formItem.password, 32)
                    },
                    notProcessed: true
                }).then((data:any) => {
                    ticketUtil.ticket(data.data.ticket)
                    this.$router.push('/main')
                }, (e) => {
                    this.$notify.error(e.message)
                });
            }
        })
    }

    async loginWeiXin() {
        try {
            // let data = await sso.sso_user_loginVx_post({
            //     data: {
            //         code: this.formItem.code
            //     },
            //     notProcessed: true
            // })
            // this.toHome(data)
        } catch (e) {
            //显示绑定信息
            this.isBindPage = true
        }

    }
}
</script>
<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background-color: #2C43B8;
    background-image: url("./img/bg.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0 100%;
    position: relative;
}

.tabs-login {
    width: 400px;
    height: 400px;
}

.login-content-box {
    position: absolute;
    width: 100%;
    left: 0;
    top: 104px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //transform: translate(-50%, -55%);
}

.titlehead {
    //position:absolute;
    //top:15%;
    width: 100%;
    margin: 0 auto 30px auto;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 30px;

    @include breakpoint(null, 580px) {
        margin-bottom: 50px;
    }
}

.login_box {

    width: 400px;
    height: 400px;
    background-color: white;

}

.active {
    border-bottom: 3px solid #4478cb !important;
    color: #4478cb !important;
}

.login_t {
    display: flex;
    // background-color: pink;
    height: 60px;
}

.login_w {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 16px;
    color: #666666;
    border-right: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;

    > i {
        margin-right: 10px;
    }
}

.login-tip {
    font-size: 16px;
    color: #666666;
    padding: 50px 0 30px 0;
    text-align: center;
}

.login_img {
    display: flex;
    justify-content: center;
    align-items: center;

    /deep/ iframe {
        height: 250px;
    }

    img {
        width: 160px;
        height: 160px;
    }

}

.login_tip {
    font-size: 16px;
    color: #666666;
    padding: 50px 0;
    text-align: center;
}

.cusImg {
    position: absolute;
    left: 13%;
    top: 5%;
}

.demoRuleForm {
    width: 100%;
    padding: 0 35px;
    box-sizing: border-box;
}

.ruleForm {
    width: 100%;
    padding: 35px;
    box-sizing: border-box;
}

.message {
    color: blue;
}

.trademark {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    color: #ffffff;
    font-size: 14px;
    text-align: center;

    .markText {
        padding: 0 15px;
    }
}

.loginBtn {
    width: 100%;

}
</style>
