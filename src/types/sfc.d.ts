interface Window {
    //允许任意属性存在
    [propName: string]: any
}

declare module "d3"
declare module "venn.js"
declare module "vue-touch-ripple"
declare module "vue-clipboard2"
declare module '*.js'

declare var WxLogin: any

//覆盖某类型
declare type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

//定义系统业务数据模型
declare namespace sys {
    type loginInfo = {
        //是否是管理员账号
        $isAdmin?: boolean
        name?: string
        loginName?: string
        uid?: string,
        type?: {
            name: string,
            disName: string
        },
        userAppList?: any[],
        resources?: { code: string }[]
    }
    type systemInfo = {
        logo?: string,
        name?: string,
        icon?: string
    }
}