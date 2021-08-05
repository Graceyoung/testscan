const config = require('pp-vue-components/config/vue.config');

let proxy = {};
proxy[process.env['VUE_APP_SERVICE_PATH']] = {
    target: process.env['VUE_APP_SERVICE_URL'],
    ws: true,
    changeOrigin: true,
};

proxy[process.env['VUE_APP_WMS_PATH']] = {
    target: process.env['VUE_APP_WMS_URL'],
    ws: true,
    changeOrigin: true,
};

config.devServer = {
    //修复内网穿透报错的问题
    disableHostCheck: true,
    proxy: proxy,
    port: 8600,
};
//scss全局变量导入
config.css = {
    loaderOptions: {
        sass: {
            prependData: '@import "@/scss/settings.scss";'
        },
        /*postcss: {
            plugins: [
                require('postcss-plugin-px2rem')({
                    rootValue: 10,
                    exclude: /(node_module)/
                }),
            ]
        }*/
    }
}
//显式通过babel-loader转义文件
config.transpileDependencies = ['vuex-module-decorators', 'proxy-polyfill', 'element-ui'];

if (process.env.NODE_ENV === 'production') {
    config.configureWebpack = config => {
        config.plugins.forEach((item, i) => {
            if (item.tsconfig) {
                config.plugins.splice(i, 1);
            }
        })
    }
}

module.exports = config
