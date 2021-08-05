import Vue from 'vue'
import VueRouter from 'vue-router'
import {getComponentByRootPath} from './util'

Vue.use(VueRouter)

import h5 from './h5';

let getComponent;

//开发环境下不使用按需加载打包模式,提升打包速度
getComponent = getComponentByRootPath('');
const root = {
    path: '/', // 登录页
    name: '',
    redirect: {path: '/h5'}
};

const login = {
    path: '/login',
    name: '登录',
    component: getComponent('login/Index'),
};

//未定义路由跳转404
const notFindPage = {
    path: '*',
    name: '找不到页面',
    component: getComponent('notFind/Index')
};


const router = new VueRouter({
    routes: [
        root,
        ...h5,
        notFindPage
    ]
});
router.beforeEach((to, from, next) => {
    next()
});

export default router
