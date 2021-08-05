import {AxiosRequestConfig} from 'axios'
import instance from './instance';
import { convertRESTAPI } from '../util';

/** 删除 */
function trace_web_policy_delete_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/policy/delete',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 查询统计查询追溯码数量 */
function trace_web_navigation_querySelectCount_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/navigation/querySelectCount',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfTimeCountVo>)
}

/** 查询统计追溯码生成数量 */
function trace_web_navigation_queryTraceCodeCount_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/navigation/queryTraceCodeCount',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfTimeCountVo>)
}

/** 查询追溯码流通信息(免登陆) */
function trace_web_traceCodeQuery_getByTraceCodeNotLogin_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/traceCodeQuery/getByTraceCodeNotLogin',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfshangpinpicixinxibiaocommodityBatch>)
}

/** 查询 */
function trace_web_policy_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/policy/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzhengcefaguipolicy>)
}

/** 保存 */
function trace_web_policy_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/policy/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfTraceCodeOrderVo>)
}

/** 修改 */
function trace_web_policy_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/policy/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfTraceCodeOrderCountVo>)
}

/** 查询追溯码出入库列表 */
function trace_web_traceCodeManager_queryTraceCodeList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/traceCodeManager/queryTraceCodeList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfTraceCodeOrderVo>)
}

/** 查询追溯码流通信息 */
function trace_web_traceCodeQuery_getByTraceCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/traceCodeQuery/getByTraceCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfshangpinpicixinxibiaocommodityBatch>)
}

/** 获取系统的所有枚举值 */
function trace_web_general_queryEnums_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/general/queryEnums',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfMapOfstringAndListOfEnum>)
}

/** 获取系统某个枚举值 */
function trace_web_general_queryEnumsByKey_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/general/queryEnumsByKey',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfEnum>)
}

/** 获取用户信息 */
function trace_web_ssoClient_user_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/ssoClient/user',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 统计出入库追溯码数量 */
function trace_web_traceCodeManager_count_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/traceCodeManager/count',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfTraceCodeOrderCountVo>)
}

/** 查询商品批次出入库列表 */
function trace_web_traceCodeManager_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/traceCodeManager/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfshangpinpicichurukudingdanbiaocommodityBatchOrder>)
}

/** 删除文件 */
function trace_web_file_delete_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/file/delete',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 文件下载 */
function trace_web_file_download_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/file/download',
    opts: opts
  });
  return (i as Promise<unknown>)
}

/** 获取文件URL地址 */
function trace_web_file_getUrl_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/file/getUrl',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 上传文件 */
function trace_web_file_uploadFile_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/trace-web/file/uploadFile',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

export {
  trace_web_policy_delete_post,
  trace_web_navigation_querySelectCount_post,
  trace_web_navigation_queryTraceCodeCount_post,
  trace_web_traceCodeQuery_getByTraceCodeNotLogin_post,
  trace_web_policy_query_post,
  trace_web_policy_save_post,
  trace_web_policy_update_post,
  trace_web_traceCodeManager_queryTraceCodeList_post,
  trace_web_traceCodeQuery_getByTraceCode_post,
  trace_web_general_queryEnums_post,
  trace_web_general_queryEnumsByKey_post,
  trace_web_ssoClient_user_post,
  trace_web_traceCodeManager_count_post,
  trace_web_traceCodeManager_query_post,
  trace_web_file_delete_post,
  trace_web_file_download_post,
  trace_web_file_getUrl_post,
  trace_web_file_uploadFile_post
};
