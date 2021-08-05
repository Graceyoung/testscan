/**
 * Created by ArvinChen9539 on 2019/2/18.
 */
import {initEnv, traversingTree} from 'pp-js-util';
import {Vue} from 'vue-property-decorator';
import _ from 'lodash'
import {setting} from "sso2-access-util";
import {setConfig} from 'pp-product-verify'
import printJS from "print-js";
//统一用到的配置数据
const envData: {
    VUE_APP_APP_CODE: string
    VUE_APP_SERVICE_PATH: string
    VUE_APP_WMS_PATH: string
    VUE_APP_SYS_NAME: string
    VUE_APP_VERSION: string
} = initEnv(process.env);

//没有配置各系统地址的情况下无法使用goto相关的api
setting({
    //应用编码
    appCode: envData['VUE_APP_APP_CODE'],
    //sso登录地址
    ssoLoginUrl: '',
    //sso后台地址,通常用于注销
    ssoServiceUrl: window.location.origin,
    sysPath: window.location.pathname
}, {}, {ssoPath: '/sso-web', isEncryptTicket: true, isVerify: false, apiPath: '/sso'})
setConfig({
    servicePath: '/sso-web'
})

const findComponentsDownward = function (context: Vue, componentName: string): Vue[] {
    return context.$children.reduce((components: Vue[], child: Vue) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
};

const findComponentUpward = function (context: Vue, componentName: string | string[]): any {
    let componentNames: string[];
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
};

/**
 * 获取单个实例
 */
const getInstance = function <T>(fn: Function) {
    let result: any;
    return function (...params: any[]): T {
        //首个参数为null时释放资源
        if (arguments[0] === null) {
            result = null
            return result;
        }
        //@ts-ignore
        let that: any = this;
        return result || (result = fn.apply(that, arguments));
    }
};


const readAsDataURL = function (file: File, cb: Function) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e: any) {
        if (cb) {
            cb(this.result, e.target.result);
        }

    }
};

/**
 * 转换数字为逗号隔开的格式
 * @param num 数字
 * @param n 保留小数位数 默认2
 */
function numFormatMoney(num: string | number, n: number = 2) {
    //存在逗号时直接返回元数据
    if (num && (num + '').indexOf(',') !== -1) {
        return num;
    }
    num = _.toNumber(num + '')
    num = num.toFixed(n);
    num = parseFloat(num)
    num = num.toLocaleString();
    return num;
}

const stylePrint = '@page { } @media print { @page {size:270mm 93mm ;margin: 0;} }'//自定义样式
const printdiv = function (printpage: any, type: printJS.PrintTypes = 'html', title = '') {
    printJS({
        printable: printpage,
        type,
        honorColor: true,
        // 继承原来的所有样式
        targetStyles: ['*'],
        style: stylePrint,
        documentTitle: '',
        font_size: ''
    })
}

export {
    findComponentsDownward,
    findComponentUpward,
    readAsDataURL,
    traversingTree,
    envData,
    getInstance,
    numFormatMoney,
    printdiv
}
