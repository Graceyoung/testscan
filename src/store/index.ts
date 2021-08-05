import Vue from 'vue'
import Vuex from 'vuex'
import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import { sso_web, trace_web} from '@/api'
import {ticketUtil} from 'sso2-access-util'
import * as tinyCookie from 'tiny-cookie'
import {envData} from '@/util'
import {verify} from 'pp-product-verify'

//模块
import pattern from './modules/pattern'
import sysSearch from './modules/sysSearch'
import catchState from './catchState'

Vue.use(Vuex)

@Module
class VuexStore extends VuexModule {
    public LOGIN_INFO: sys.loginInfo = {}

    // 设置系统名称和图标
    public SYSTEM_INFO: sys.systemInfo = {}

    //系统枚举值
    public ENUMS: {
        //允许任意属性存在
        [propName: string]: serviceType.Enum[]
    } = {}

    get userP() {
        let p: any = {};
        //其他用户通过用户拥有的菜单加载显示
        if (this.LOGIN_INFO.userAppList) {
            for (let item of this.LOGIN_INFO.userAppList) {
                if (item.code === envData.VUE_APP_APP_CODE) {
                    for (let resCode of item.resourceCodes) {
                        p[resCode] = true;
                    }
                    break
                }
            }
        }
        return p;
    }

    @Mutation
    public setLoginInfo(info: any = {}) {
        this.LOGIN_INFO = info;
        //判断是否是超级管理员
        if (info.loginName === 'admin') {
            this.LOGIN_INFO.$isAdmin = true;
        }
        //todo 判断特殊身份权限标记
    }

    @Mutation
    public getLogo(info: any = {}) {
        // this.SYSTEM_INFO = info
        // if (JSON.stringify(info) !== '{}') {
        //     document.title = info.name;
        //     let linkEl: any = document.querySelector("link[rel*='icon']") || document.createElement('link')
        //     linkEl.href = 'data:image/jpeg;base64,' + info.icon;
        // }
    }

    @Mutation
    public clearLogin() {
        this.LOGIN_INFO = {};
        //todo 清除权限等其他信息
        ticketUtil.clearTicket();
        //修复本地异常保存的ticket问题
        tinyCookie.remove(ticketUtil.getKey());
    }

    @Mutation
    setEnums(info: any) {//更新枚举信息
        this.ENUMS = info;
    }

    @Action({rawError: true})
    public async syncLoginInfo() {
        let data: any = (await sso_web.sso_web_ssoClient_user_post({load: {fullLoading: true}})).data;
        this.context.commit('setLoginInfo', data || {})
        verify(this.LOGIN_INFO.$isAdmin).then()
    }

    @Action({rawError: true})
    public async syncLogo() {
        let data: any = (await sso_web.sso_web_systemConfig_getImgs_post({load: {fullLoading: true}})).data;
        this.context.commit('getLogo', data || {})
    }


    //同步枚举
    @Action({rawError: true})
    public async syncEnums() {
        let data: any = (await trace_web.trace_web_general_queryEnums_post({load: {fullLoading: true}})).data;
        this.context.commit('setEnums', data || {})
    }

    @Action({rawError: true})
    public async logout() {
        try {
            await sso_web.sso_web_sso_logout_post({load: {fullLoading: true}, notProcessed: true})
        } catch (e) {
            //注销异常时依然执行返回登录页
        }
        this.context.commit('clearLogin')
        let data = await sso_web.sso_web_sso_getEnv_post()

        if (data.data && data.data.loginPageUrl) {
            let url: string = data.data.loginPageUrl
            let urls = url.split('/#')
            urls[0] = `${urls[0]}?service=${encodeURIComponent(window.location.href)}`
            if (urls.length > 1) {
                url = urls.join('#')
            }
            window.location.href = url
        }
    }
}

const store = new Vuex.Store(Object.assign({
        strict: process.env.NODE_ENV !== 'production'
    },
    VuexStore, {
        modules: {pattern, catchState, sysSearch}
    }));

Vue.prototype.$store = store;
export default store
export {
    VuexStore
}
