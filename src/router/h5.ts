import {getComponentByRootPath} from './util'

const rootPath = '/h5';
let getComponent;

//开发环境下不使用按需加载打包模式,提升打包速度
getComponent = getComponentByRootPath(rootPath);

const getPath = function (path: string) {
    return `${rootPath}${path}`;
}

export default [
    {
        path: rootPath,
        name: '商品流通追溯',
        component: getComponent('Index'),
        children: [
            {
                path: getPath('/info'),
                name: '商品流通追溯 ',
                component: getComponent('Info'),
            },
            {
                path: getPath('/scanner'),
                name: '商品流通追溯 ',
                component: getComponent('Scanner'),
            }
        ]
    },

];