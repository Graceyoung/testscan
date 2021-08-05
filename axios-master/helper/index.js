var _ = require('lodash')
var pinyin4js = require('pinyin4js')

var convertUrl = exports.convertUrl = function (url) {
  // /restful/:id/:list/{id} -> restful_id_list_id
  // /restful/:id/:list/{id}.json -> restful_id_list_id
  var _url = url
    .replace(/:|{|}/g, '')
    .replace(/-/g, '_')
    .split('/')
    .filter(value => !!value).join('_');
  return _url.split('.')[0];
};

exports.convertMethod = function (mock) {
  // 防止重名
  // restful_id_list_id => restful_id_list_id_g
  // or
  // restful_id_list_id => restful_id_list_id_p
  // console.log(mock.url)
  return convertUrl(mock.url) + '_' + mock.method.toLowerCase();
};

exports.convertType = function(mock){
  //没有声明定义时跳过类型指定步骤
  if(!JSON.parse(mock.response_model)['200'].schema){
    return false;
  }
  let type = JSON.parse(mock.response_model)['200'].schema.title;
  type = pinyin4js.convertToPinyinString(type, '', PinyinFormat.WITHOUT_TONE)
  type = type.replace(/，/g,'')
  let content = mock.url.split('/')[1]
  if (content==='sso'){
    return 'any'
  }
  return 'serviceType.'+type;
}

exports.joinUrl = function () {
  // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
  var url = [].slice.call(arguments, 0).join('/');
  url = url.replace(/:\//g, '://');
  url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/');
  return url;
}

exports.isREST = function (url) {
  return /(:|{|})/.test(url);
}
