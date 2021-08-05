import {AxiosRequestConfig} from 'axios'
import instance from './instance';
import { convertRESTAPI } from '../util';

/** 查询列表 */
function sso_web_messageNotify_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/messageNotify/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfxiaoxitongzhibiaomessageNotify>)
}

/** 已读 */
function sso_web_messageNotify_read_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/messageNotify/read',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 绑定微信小程序账号(限制角色code，通过授权手机号信息） */
function sso_web_sso_bindingXcxPhoneWithRoleCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/bindingXcxPhoneWithRoleCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 统计未读消息数量 */
function sso_web_messageNotify_countUnRead_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/messageNotify/countUnRead',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOflong>)
}

/** 获取系统ico等配置 */
function sso_web_systemConfig_getImgs_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/systemConfig/getImgs',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfSystemImgVo>)
}

/** 导入作业人员 */
function sso_web_taskPeople_importExcel_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/importExcel',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 查询列表 */
function sso_web_taskPeople_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfrenyuanguanlitaskPeople>)
}

/** 删除分组 */
function sso_web_taskPeople_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 作业人员新增接口 */
function sso_web_taskPeople_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改分组 */
function sso_web_taskPeople_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取详情 */
function sso_web_taskGroup_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskGroup/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfzuoyefenzuguanlitaskGroup>)
}

/** 查询列表 */
function sso_web_taskGroup_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskGroup/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup>)
}

/** 删除分组 */
function sso_web_taskGroup_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskGroup/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 作业分组新增接口 */
function sso_web_taskGroup_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskGroup/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改分组 */
function sso_web_taskGroup_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskGroup/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 导出作业人员导入excel模板 */
function sso_web_taskPeople_exportTemplate_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/exportTemplate',
    opts: opts
  });
  return (i as Promise<unknown>)
}

/** 获取详情 */
function sso_web_taskPeople_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskPeople/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfrenyuanguanlitaskPeople>)
}

/** 查询列表 */
function sso_web_taskArea_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskArea/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuoyequyuguanlitaskArea>)
}

/** 删除区域 */
function sso_web_taskArea_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskArea/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 作业区域新增接口 */
function sso_web_taskArea_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskArea/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改区域 */
function sso_web_taskArea_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskArea/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取详情 */
function sso_web_taskArea_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/taskArea/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfzuoyequyuguanlitaskArea>)
}

/** 获取许可证信息 */
function sso_web_productKey_getLicenseInfo_get(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'get',
    url:  '/sso-web/productKey/getLicenseInfo',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfLicenseInfo>)
}

/** 上传许可文件 */
function sso_web_productKey_uploadLicense_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/productKey/uploadLicense',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 验证许可证信息 */
function sso_web_productKey_verify_get(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'get',
    url:  '/sso-web/productKey/verify',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfLicenseInfo>)
}

/** 用户组织关联（单组织多用户） */
function sso_web_systemConfig_deleteImg_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/systemConfig/deleteImg',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取详情 */
function sso_web_systemConfig_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/systemConfig/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfxitongpeizhisystemConfig>)
}

/** 新增 */
function sso_web_systemConfig_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/systemConfig/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改 */
function sso_web_systemConfig_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/systemConfig/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改费用类型接口 */
function sso_web_expenseConfig_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseConfig/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 停用启用费用类型 */
function sso_web_expenseType_enable_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseType/enable',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 列表查询 */
function sso_web_expenseType_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseType/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOffeiyongleixingexpenseType>)
}

/** 删除费用类型 */
function sso_web_expenseType_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseType/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增费用类型接口 */
function sso_web_expenseType_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseType/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改费用类型接口 */
function sso_web_expenseType_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseType/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 列表查询 */
function sso_web_numberManagement_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/numberManagement/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfbianhaoleixingguanlinumberManagement>)
}

/** 列表查询 */
function sso_web_collectionConfig_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/collectionConfig/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfshoukuanpeizhicollectionConfig>)
}

/** 删除费用类型 */
function sso_web_collectionConfig_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/collectionConfig/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增收款配置接口 */
function sso_web_collectionConfig_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/collectionConfig/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改费用类型接口 */
function sso_web_collectionConfig_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/collectionConfig/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 停用启用费用类型 */
function sso_web_expenseConfig_enable_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseConfig/enable',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 列表查询 */
function sso_web_expenseConfig_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseConfig/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOffeiyongpeizhiexpenseConfig>)
}

/** 删除费用类型 */
function sso_web_expenseConfig_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseConfig/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增费用类型接口 */
function sso_web_expenseConfig_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/expenseConfig/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 停用启用计费单位 */
function sso_web_billingUnit_enable_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/billingUnit/enable',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 列表查询 */
function sso_web_billingUnit_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/billingUnit/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfjifeidanweibillingUnit>)
}

/** 删除计费单位 */
function sso_web_billingUnit_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/billingUnit/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增计费单位接口 */
function sso_web_billingUnit_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/billingUnit/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改计费单位接口 */
function sso_web_billingUnit_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/billingUnit/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 查询用户特殊授权 */
function sso_web_userPms_getUserResource_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/userPms/getUserResource',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghulinshishouquanbiaouserResource>)
}

/** 根据userUid设置登录密码 */
function sso_web_user_updateUserPassword_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/updateUserPassword',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 修改用户白名单配置 */
function sso_web_user_updateWhiteList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/updateWhiteList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户授权 */
function sso_web_userPms_add_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/userPms/add',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增平台管理员接口 */
function sso_web_user_saveSsoAdmin_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/saveSsoAdmin',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 解绑钉钉账号 */
function sso_web_user_unbindingDing_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/unbindingDing',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 解绑企业微信账号 */
function sso_web_user_unbindingQywx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/unbindingQywx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 解绑小程序账号 */
function sso_web_user_unbindingXcx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/unbindingXcx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 用户修改 */
function sso_web_user_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 修改用户排序 */
function sso_web_user_updateSort_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/updateSort',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户删除 */
function sso_web_user_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 重置密码 */
function sso_web_user_resetPassword_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/resetPassword',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户角色关联 */
function sso_web_user_roleLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/roleLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增用户接口 */
function sso_web_user_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 新增普通用户接口 */
function sso_web_user_saveCommon_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/saveCommon',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 用户组织关联（多组织单用户） */
function sso_web_user_orgLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/orgLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组织关联（单组织多用户） */
function sso_web_user_orgLinkMultiUsers_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/orgLinkMultiUsers',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 列表查询 */
function sso_web_user_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxi>)
}

/** 列表查询(市场业务管理员查询，系统管理-用户管理的查询列表) */
function sso_web_user_queryForAll_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/queryForAll',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxi>)
}

/** 用户启用/停用接口 */
function sso_web_user_checkStatus_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/checkStatus',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取当前用户信息 */
function sso_web_user_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 获取用户已关联应用列表 */
function sso_web_user_getAppUidList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/getAppUidList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuyingyongguanlianbiaouserApp>)
}

/** 获取用户已关联角色列表 */
function sso_web_user_getRoleList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/getRoleList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghujiaoseguanlianbiaouserRole>)
}

/** 获取当前用户已绑定的所有小程序的列表 */
function sso_web_user_getUserBindXcxList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/getUserBindXcxList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfweixinxiaochengxuyonghuguanlianbiaoxcxUser>)
}

/** 获取用户已绑定的用户组列表 */
function sso_web_user_groupLinkList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/groupLinkList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuzuyonghuguanlianbiaogroupUser>)
}

/** 解绑小程序账号（用户自行解绑） */
function sso_web_sso_unbindingXcxBySelf_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/unbindingXcxBySelf',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 修改个人信息（当前登录用户） */
function sso_web_sso_updateSelf_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/updateSelf',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取用户信息 */
function sso_web_ssoClient_user_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/ssoClient/user',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 用户应用关联 */
function sso_web_user_appLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/user/appLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 解绑钉钉账号（用户自行解绑） */
function sso_web_sso_unbindingDingBySelf_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/unbindingDingBySelf',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 解绑企业微信账号（用户自行解绑） */
function sso_web_sso_unbindingQywxBySelf_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/unbindingQywxBySelf',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 通过临时码登录（单次使用） */
function sso_web_sso_loginWithTempCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/loginWithTempCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 微信小程序登录 */
function sso_web_sso_loginWithWxXcx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/loginWithWxXcx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 注销 */
function sso_web_sso_logout_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/logout',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 修改当前登录用户的登录密码 */
function sso_web_sso_modifyPassword_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/modifyPassword',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 修改当前登录用户的登录密码(用户通过短信验证码注册登录后，不知道初始密码的情况下) */
function sso_web_sso_modifyPasswordWithInit_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/modifyPasswordWithInit',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 获取用户短信验证码列表 */
function sso_web_sso_smsCodeList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/smsCodeList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfSmsCodeInfoVo>)
}

/** 钉钉登录 */
function sso_web_sso_loginWithDing_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/loginWithDing',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 钉钉小程序登录 */
function sso_web_sso_loginWithDingXcx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/loginWithDingXcx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 企业微信登录 */
function sso_web_sso_loginWithQywx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/loginWithQywx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 通过登录验证码登录 */
function sso_web_sso_loginWithSmsCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/loginWithSmsCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 获取单点登录环境信息 */
function sso_web_sso_getEnv_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/getEnv',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfSsoConfigVo>)
}

/** 获取登录临时码，只能被使用一次 */
function sso_web_sso_getLoginTmpCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/getLoginTmpCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取验证码 */
function sso_web_sso_getSmsCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/getSmsCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 获取图片验证码 */
function sso_web_sso_getVCodeImageBase64_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/getVCodeImageBase64',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取图片验证码随机令牌 */
function sso_web_sso_getVCodeTicket_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/getVCodeTicket',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 登录 */
function sso_web_sso_login_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/login',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 绑定钉钉账号 */
function sso_web_sso_bindingDing_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/bindingDing',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 绑定钉钉小程序账号 */
function sso_web_sso_bindingDingXcx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/bindingDingXcx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 绑定企业微信账号 */
function sso_web_sso_bindingQywx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/bindingQywx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 绑定微信小程序账号 */
function sso_web_sso_bindingWxXcx_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/bindingWxXcx',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 绑定微信小程序账号(限制角色code) */
function sso_web_sso_bindingWxXcxWithRoleCode_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/bindingWxXcxWithRoleCode',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 获取用户登录信息 */
function sso_web_sso_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser>)
}

/** 查询所有应用列表 */
function sso_web_sso_getAllApps_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/sso/getAllApps',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyingyongbiaoapp>)
}

/** 删除角色 */
function sso_web_role_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 查询角色对应的权限 */
function sso_web_role_rolePemession_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/rolePemession',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole>)
}

/** 新建角色 */
function sso_web_role_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfjiaosexinxibiaorole>)
}

/** 修改 */
function sso_web_role_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 操作角色权限关联 */
function sso_web_role_updateRolePemession_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/updateRolePemession',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 操作用户角色关联 */
function sso_web_role_updateUserRole_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/updateUserRole',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 添加权限 */
function sso_web_resource_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfquanxianbiaoresource>)
}

/** 修改权限 */
function sso_web_resource_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfquanxianbiaoresource>)
}

/** 查询当前登录人的所有权限 */
function sso_web_role_getPemessionByUser_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/getPemessionByUser',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole>)
}

/** 查询用户所有权限 */
function sso_web_role_getPermissionByUser_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/getPermissionByUser',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole>)
}

/** 查询角色列表 */
function sso_web_role_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfjiaosexinxibiaorole>)
}

/** 查询角色列表 */
function sso_web_role_queryAll_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/role/queryAll',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfjiaosexinxibiaorole>)
}

/** 获取权限详情 */
function sso_web_resource_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfquanxianbiaoresource>)
}

/** 拿应用下的权限树 */
function sso_web_resource_getAppAllTree_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/getAppAllTree',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfResourceTreeVo>)
}

/** 查询应用下的权限列表 */
function sso_web_resource_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianbiaoresource>)
}

/** 查询角色拥有的权限 */
function sso_web_resource_queryResourceRole_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/queryResourceRole',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole>)
}

/** 查询权限树 */
function sso_web_resource_queryTree_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/queryTree',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianbiaoresource>)
}

/** 删除权限 */
function sso_web_resource_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/resource/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 查询职务列表 */
function sso_web_post_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/post/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfgangweibianmabiaopost>)
}

/** 删除职务 */
function sso_web_post_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/post/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 新增职务 */
function sso_web_post_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/post/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改职务 */
function sso_web_post_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/post/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取详情 */
function sso_web_region_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/region/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfxingzhengquyubiaoregion>)
}

/** 查询行政区域树 */
function sso_web_region_queryTree_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/region/queryTree',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfRegionVo>)
}

/** 新建组织类型 */
function sso_web_orgDic_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/orgDic/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改组织类型 */
function sso_web_orgDic_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/orgDic/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 批量绑定用户与应用关联 */
function sso_web_permissionBind_batchBindAppsWithUsers_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/permissionBind/batchBindAppsWithUsers',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 批量绑定用户与角色关联 */
function sso_web_permissionBind_batchBindRolesWithUsers_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/permissionBind/batchBindRolesWithUsers',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 批量解绑用户与应用关联 */
function sso_web_permissionBind_batchUnbindAppsWithUsers_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/permissionBind/batchUnbindAppsWithUsers',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 批量解绑用户与角色关联 */
function sso_web_permissionBind_batchUnbindRolesWithUsers_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/permissionBind/batchUnbindRolesWithUsers',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 查询当前用户数据权限对应的组织树（应用管理员查询所有组织树，包含可选组织与已选组织） */
function sso_web_org_queryTreeWithDataPermission_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/queryTreeWithDataPermission',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg>)
}

/** 删除组织 */
function sso_web_org_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 新建组织 */
function sso_web_org_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改组织 */
function sso_web_org_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 组织类型详情 */
function sso_web_orgDic_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/orgDic/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 查询组织类型 */
function sso_web_orgDic_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/orgDic/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuzhileixingzidianbiaoorgDic>)
}

/** 删除组织类型 */
function sso_web_orgDic_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/orgDic/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 组织详情 */
function sso_web_org_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfzuzhijigoubiaoorg>)
}

/** 根据用户UID查询用户所属组织UID列表 */
function sso_web_org_getUidsByUser_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/getUidsByUser',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOflong>)
}

/** 查询组织 */
function sso_web_org_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg>)
}

/** 查询组织树 */
function sso_web_org_queryTree_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/queryTree',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg>)
}

/** 查询用户数据权限对应的组织树(应用管理员查询所有组织树，下拉查询使用) */
function sso_web_org_queryTreeByDataPermissionOrg_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/queryTreeByDataPermissionOrg',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg>)
}

/** 查询用户所属组织的组织树 */
function sso_web_org_queryTreeByUserOrg_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/org/queryTreeByUserOrg',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg>)
}

/** 详情 */
function sso_web_mp_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/mp/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfweixinxiaochengxupeizhibiaoxcxConfig>)
}

/** 查询列表 */
function sso_web_mp_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/mp/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfweixinxiaochengxupeizhibiaoxcxConfig>)
}

/** 删除 */
function sso_web_mp_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/mp/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 新增 */
function sso_web_mp_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/mp/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改 */
function sso_web_mp_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/mp/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfweixinxiaochengxupeizhibiaoxcxConfig>)
}

/** 查询操作日志列表（分页） */
function sso_web_optLog_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/optLog/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfOptLog>)
}

/** 新增 */
function sso_web_logCategory_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logCategory/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 修改 */
function sso_web_logCategory_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logCategory/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 查询操作列表 */
function sso_web_logType_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logType/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfcaozuorizhileixingbiaologType>)
}

/** 删除 */
function sso_web_logType_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logType/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 新增 */
function sso_web_logType_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logType/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 修改 */
function sso_web_logType_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logType/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 查询登录日志列表（分页） */
function sso_web_loginLog_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/loginLog/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfLoginLog>)
}

/** 新增用户组 */
function sso_web_group_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 修改用户组 */
function sso_web_group_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组添加用户 */
function sso_web_group_userLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/userLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 组内用户列表 */
function sso_web_group_userList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/userList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxibiaouser>)
}

/** 查询模块列表 */
function sso_web_logCategory_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logCategory/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfcaozuorizhileibielogCategorybaohanlogTypeliebiao>)
}

/** 删除 */
function sso_web_logCategory_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/logCategory/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 查询未关联应用群的应用 */
function sso_web_group_notLinkAppList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/notLinkAppList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyingyongbiaoapp>)
}

/** 未绑定用户组的用户列表 */
function sso_web_group_notLinkUserList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/notLinkUserList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxibiaouser>)
}

/** 查询列表 */
function sso_web_group_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuzubiaogroup>)
}

/** 查询树形结构的用户组数据 */
function sso_web_group_queryTree_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/queryTree',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuzubiaogroup>)
}

/** 删除用户组 */
function sso_web_group_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组配置角色 */
function sso_web_group_roleLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/roleLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组关联的角色列表 */
function sso_web_group_roleList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/roleList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyonghuzujiaoseguanlianbiaogroupRole>)
}

/** 获取系统某个枚举值 */
function sso_web_general_queryEnumsByKey_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/general/queryEnumsByKey',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfEnum>)
}

/** 用户组关联应用 */
function sso_web_group_appLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/appLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组解绑应用 */
function sso_web_group_delAppLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/delAppLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组删除角色 */
function sso_web_group_delRoleLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/delRoleLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户组删除用户 */
function sso_web_group_delUserLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/delUserLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取用户组某应用下的所有权限uid */
function sso_web_group_hasResource_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/group/hasResource',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole>)
}

/** 查询应用列表 */
function sso_web_app_query_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/query',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyingyongappVo>)
}

/** 删除应用 */
function sso_web_app_remove_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/remove',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfobject>)
}

/** 添加应用 */
function sso_web_app_save_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/save',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyingyongbiaoapp>)
}

/** 修改应用 */
function sso_web_app_update_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/update',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyingyongbiaoapp>)
}

/** 设置用户数据权限，（系统自动先删除当前用户的原有数据权限，再新增新的数据权限） */
function sso_web_dataPermission_setUserDataPermission_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/dataPermission/setUserDataPermission',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取系统的所有枚举值 */
function sso_web_general_queryEnums_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/general/queryEnums',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfMapOfstringAndListOfEnum>)
}

/** 用户角色列表 */
function sso_web_accessControl_roleList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/accessControl/roleList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfRoleLinkVo>)
}

/** 用户关联应用 */
function sso_web_accessControl_userAppLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/accessControl/userAppLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户单应用角色关联 */
function sso_web_accessControl_userRoleLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/accessControl/userRoleLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 获取应用详情 */
function sso_web_app_get_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/get',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfyingyongappVo>)
}

/** 获取平台统一身份认证权限列表 */
function sso_web_app_getBuildInIDSP_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/getBuildInIDSP',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfIDSPCategoryBuildInVo>)
}

/** 查询用户可关联应用列表 */
function sso_web_app_getByBeLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/getByBeLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyingyongappVo>)
}

/** 用户未关联的应用列表 */
function sso_web_app_notLinkAppList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/app/notLinkAppList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfyingyongbiaoapp>)
}

/** 访问应用列表 */
function sso_web_accessControl_appList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/accessControl/appList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfAccessControlVo>)
}

/** 用户应用解绑 */
function sso_web_accessControl_delUserAppLink_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/accessControl/delUserAppLink',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfstring>)
}

/** 用户权限列表 */
function sso_web_accessControl_resourceList_post(opts?:AxiosRequestConfig) {
  let i = instance({
    method: 'post',
    url:  '/sso-web/accessControl/resourceList',
    opts: opts
  });
  return (i as Promise<unknown> as Promise<serviceType.jiekoutongyifanhuishitiOfListOfquanxianbiaoresource>)
}

export {
  sso_web_messageNotify_query_post,
  sso_web_messageNotify_read_post,
  sso_web_sso_bindingXcxPhoneWithRoleCode_post,
  sso_web_messageNotify_countUnRead_post,
  sso_web_systemConfig_getImgs_post,
  sso_web_taskPeople_importExcel_post,
  sso_web_taskPeople_query_post,
  sso_web_taskPeople_remove_post,
  sso_web_taskPeople_save_post,
  sso_web_taskPeople_update_post,
  sso_web_taskGroup_get_post,
  sso_web_taskGroup_query_post,
  sso_web_taskGroup_remove_post,
  sso_web_taskGroup_save_post,
  sso_web_taskGroup_update_post,
  sso_web_taskPeople_exportTemplate_post,
  sso_web_taskPeople_get_post,
  sso_web_taskArea_query_post,
  sso_web_taskArea_remove_post,
  sso_web_taskArea_save_post,
  sso_web_taskArea_update_post,
  sso_web_taskArea_get_post,
  sso_web_productKey_getLicenseInfo_get,
  sso_web_productKey_uploadLicense_post,
  sso_web_productKey_verify_get,
  sso_web_systemConfig_deleteImg_post,
  sso_web_systemConfig_get_post,
  sso_web_systemConfig_save_post,
  sso_web_systemConfig_update_post,
  sso_web_expenseConfig_update_post,
  sso_web_expenseType_enable_post,
  sso_web_expenseType_query_post,
  sso_web_expenseType_remove_post,
  sso_web_expenseType_save_post,
  sso_web_expenseType_update_post,
  sso_web_numberManagement_query_post,
  sso_web_collectionConfig_query_post,
  sso_web_collectionConfig_remove_post,
  sso_web_collectionConfig_save_post,
  sso_web_collectionConfig_update_post,
  sso_web_expenseConfig_enable_post,
  sso_web_expenseConfig_query_post,
  sso_web_expenseConfig_remove_post,
  sso_web_expenseConfig_save_post,
  sso_web_billingUnit_enable_post,
  sso_web_billingUnit_query_post,
  sso_web_billingUnit_remove_post,
  sso_web_billingUnit_save_post,
  sso_web_billingUnit_update_post,
  sso_web_userPms_getUserResource_post,
  sso_web_user_updateUserPassword_post,
  sso_web_user_updateWhiteList_post,
  sso_web_userPms_add_post,
  sso_web_user_saveSsoAdmin_post,
  sso_web_user_unbindingDing_post,
  sso_web_user_unbindingQywx_post,
  sso_web_user_unbindingXcx_post,
  sso_web_user_update_post,
  sso_web_user_updateSort_post,
  sso_web_user_remove_post,
  sso_web_user_resetPassword_post,
  sso_web_user_roleLink_post,
  sso_web_user_save_post,
  sso_web_user_saveCommon_post,
  sso_web_user_orgLink_post,
  sso_web_user_orgLinkMultiUsers_post,
  sso_web_user_query_post,
  sso_web_user_queryForAll_post,
  sso_web_user_checkStatus_post,
  sso_web_user_get_post,
  sso_web_user_getAppUidList_post,
  sso_web_user_getRoleList_post,
  sso_web_user_getUserBindXcxList_post,
  sso_web_user_groupLinkList_post,
  sso_web_sso_unbindingXcxBySelf_post,
  sso_web_sso_updateSelf_post,
  sso_web_ssoClient_user_post,
  sso_web_user_appLink_post,
  sso_web_sso_unbindingDingBySelf_post,
  sso_web_sso_unbindingQywxBySelf_post,
  sso_web_sso_loginWithTempCode_post,
  sso_web_sso_loginWithWxXcx_post,
  sso_web_sso_logout_post,
  sso_web_sso_modifyPassword_post,
  sso_web_sso_modifyPasswordWithInit_post,
  sso_web_sso_smsCodeList_post,
  sso_web_sso_loginWithDing_post,
  sso_web_sso_loginWithDingXcx_post,
  sso_web_sso_loginWithQywx_post,
  sso_web_sso_loginWithSmsCode_post,
  sso_web_sso_getEnv_post,
  sso_web_sso_getLoginTmpCode_post,
  sso_web_sso_getSmsCode_post,
  sso_web_sso_getVCodeImageBase64_post,
  sso_web_sso_getVCodeTicket_post,
  sso_web_sso_login_post,
  sso_web_sso_bindingDing_post,
  sso_web_sso_bindingDingXcx_post,
  sso_web_sso_bindingQywx_post,
  sso_web_sso_bindingWxXcx_post,
  sso_web_sso_bindingWxXcxWithRoleCode_post,
  sso_web_sso_get_post,
  sso_web_sso_getAllApps_post,
  sso_web_role_remove_post,
  sso_web_role_rolePemession_post,
  sso_web_role_save_post,
  sso_web_role_update_post,
  sso_web_role_updateRolePemession_post,
  sso_web_role_updateUserRole_post,
  sso_web_resource_save_post,
  sso_web_resource_update_post,
  sso_web_role_getPemessionByUser_post,
  sso_web_role_getPermissionByUser_post,
  sso_web_role_query_post,
  sso_web_role_queryAll_post,
  sso_web_resource_get_post,
  sso_web_resource_getAppAllTree_post,
  sso_web_resource_query_post,
  sso_web_resource_queryResourceRole_post,
  sso_web_resource_queryTree_post,
  sso_web_resource_remove_post,
  sso_web_post_query_post,
  sso_web_post_remove_post,
  sso_web_post_save_post,
  sso_web_post_update_post,
  sso_web_region_get_post,
  sso_web_region_queryTree_post,
  sso_web_orgDic_save_post,
  sso_web_orgDic_update_post,
  sso_web_permissionBind_batchBindAppsWithUsers_post,
  sso_web_permissionBind_batchBindRolesWithUsers_post,
  sso_web_permissionBind_batchUnbindAppsWithUsers_post,
  sso_web_permissionBind_batchUnbindRolesWithUsers_post,
  sso_web_org_queryTreeWithDataPermission_post,
  sso_web_org_remove_post,
  sso_web_org_save_post,
  sso_web_org_update_post,
  sso_web_orgDic_get_post,
  sso_web_orgDic_query_post,
  sso_web_orgDic_remove_post,
  sso_web_org_get_post,
  sso_web_org_getUidsByUser_post,
  sso_web_org_query_post,
  sso_web_org_queryTree_post,
  sso_web_org_queryTreeByDataPermissionOrg_post,
  sso_web_org_queryTreeByUserOrg_post,
  sso_web_mp_get_post,
  sso_web_mp_query_post,
  sso_web_mp_remove_post,
  sso_web_mp_save_post,
  sso_web_mp_update_post,
  sso_web_optLog_query_post,
  sso_web_logCategory_save_post,
  sso_web_logCategory_update_post,
  sso_web_logType_query_post,
  sso_web_logType_remove_post,
  sso_web_logType_save_post,
  sso_web_logType_update_post,
  sso_web_loginLog_query_post,
  sso_web_group_save_post,
  sso_web_group_update_post,
  sso_web_group_userLink_post,
  sso_web_group_userList_post,
  sso_web_logCategory_query_post,
  sso_web_logCategory_remove_post,
  sso_web_group_notLinkAppList_post,
  sso_web_group_notLinkUserList_post,
  sso_web_group_query_post,
  sso_web_group_queryTree_post,
  sso_web_group_remove_post,
  sso_web_group_roleLink_post,
  sso_web_group_roleList_post,
  sso_web_general_queryEnumsByKey_post,
  sso_web_group_appLink_post,
  sso_web_group_delAppLink_post,
  sso_web_group_delRoleLink_post,
  sso_web_group_delUserLink_post,
  sso_web_group_hasResource_post,
  sso_web_app_query_post,
  sso_web_app_remove_post,
  sso_web_app_save_post,
  sso_web_app_update_post,
  sso_web_dataPermission_setUserDataPermission_post,
  sso_web_general_queryEnums_post,
  sso_web_accessControl_roleList_post,
  sso_web_accessControl_userAppLink_post,
  sso_web_accessControl_userRoleLink_post,
  sso_web_app_get_post,
  sso_web_app_getBuildInIDSP_post,
  sso_web_app_getByBeLink_post,
  sso_web_app_notLinkAppList_post,
  sso_web_accessControl_appList_post,
  sso_web_accessControl_delUserAppLink_post,
  sso_web_accessControl_resourceList_post
};
