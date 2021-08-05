/**
 * Created by ArvinChen9539 on 2020/1/6.
 */
let fs = require('fs')
let http = require('http')
const iconv = require("iconv-lite");
const pinyin4js = require('pinyin4js');
let dtsGenerator = require('dtsgenerator');


let swaggerUrls = [
    {
        content: 'sso-web',
        url: 'http://10.0.2.117:9001/sso-web/v2/api-docs'
    },
    {
        content: 'trace-web',
        url: 'http://10.0.2.117:8700/trace-web/v2/api-docs'
    },
];

//类型名称定义保持和easymock生成的类型名一致
function typeNameConvertor(id) {
    const names = dtsGenerator.DefaultTypeNameConvertor(id);
    if (names.length > 0) {
        const lastIndex = names.length - 1;
        let t = id.inputId.split('/')
        //汉字转拼音
        names[lastIndex] = pinyin4js.convertToPinyinString(t[t.length - 1], '', PinyinFormat.WITHOUT_TONE)
        //移除逗号
        names[lastIndex] = names[lastIndex].replace(/，/g, '')
    }
    return names;
}

for (let sys of swaggerUrls) {
    http.get(sys.url, (res) => {
        const chunks = [];
        res.on("data", (res) => {
            chunks.push(res);
        });
        res.on("end", () => {
            // 合并数组生成 buff 对象
            let buff = Buffer.concat(chunks), headers = res.headers;
            // 从响应头中提取 charset
            let charset = 'utf8'

            // 转编码，保持跟响应一致
            let resStr = iconv.decode(buff, charset);
            let data = JSON.parse(resStr)

            //todo 移除报错的属性(可能是后端格式问题  #/definitions/List 类型不存在)
            data.definitions.List = {
                type: 'object'
            }
            data.definitions.OrgDicNameVo = {
                type: 'object'
            }
            data.definitions.User = {
                type: 'object'
            }

            //转化枚举类型,目前只转换第一层的枚举值复杂类型出现时再考虑
            let def = data.definitions
            for (let key of Object.keys(def)) {
                let item = def[key]
                if (item.type === 'object' && item.properties) {
                    for (let attrKey of Object.keys(item.properties)) {
                        let attrItem = item.properties[attrKey]
                        if (attrItem.enum && attrItem.enum.length) {
                            //转化枚举的格式
                            item.properties[attrKey] = {
                                type: 'object',
                                description: attrItem.description,
                                properties: {
                                    name: {
                                        type: 'string',
                                        enum: attrItem.enum
                                    },
                                    disName: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            }

            dtsGenerator.default({
                contents: [data],
                typeNameConvertor,
                namespaceName: 'serviceType'
            }).then((result) => {
                //写入文件
                fs.writeFileSync(`./src/types/service-${sys.content}-type.d.ts`, result)
            })
        });
    })
}





