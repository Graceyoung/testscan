// .easy-mock.js
module.exports = {
    host: "http://10.0.2.69:7300",
    output: "src/api", // 产出到项目下的 api 目录，不用手动创建
    template: "./axios-master", // 基于 easy-mock-templates 提供的 axios 模板
    projects: [
        {
            id: "60b59944e57cd70022c72482",
            name: "sso-web"
        },
        {
            id: "610393cde57cd70022c72d39",
            name: "trace-web"
        },
    ]
};
