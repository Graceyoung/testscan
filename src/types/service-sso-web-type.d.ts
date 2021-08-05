declare namespace serviceType {
    /**
     * AccessControlVo
     */
    export interface AccessControlVo {
        /**
         * 应用名
         */
        appName?: string;
        /**
         * 应用UID
         */
        appUid?: number; // int64
        /**
         * 授权途径
         */
        authChannelList?: ("USER" | "GROUP" | "SYS")[];
        /**
         * 绑定uid(用户/用户组与应用的绑定，只会有一种情况)
         */
        linkUid?: number; // int64
    }
    namespace AddUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace AppLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace AppLinkUsingPOST8 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace AppListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfAccessControlVo;
        }
    }
    /**
     * AppLoginVo
     */
    export interface AppLoginVo {
        appUid?: number; // int64
        code?: string;
        /**
         * 域名（内网）
         */
        domain?: string;
        /**
         * 域名（公网）
         */
        domainPub?: string;
        resourceCodes?: string[];
        roleCodes?: string[];
    }
    namespace BatchBindAppsWithUsersUsingPOST7 {
        namespace Parameters {
            export type appBatchBindDTO = serviceType.piliangyingyongbangdingcanshu;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            appBatchBindDTO: serviceType.BatchBindAppsWithUsersUsingPOST7.Parameters.appBatchBindDTO;
        }
    }
    namespace BatchBindRolesWithUsersUsingPOST7 {
        namespace Parameters {
            export type roleBatchBindDTO = serviceType.piliangjiaosebangdingcanshu;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            roleBatchBindDTO: serviceType.BatchBindRolesWithUsersUsingPOST7.Parameters.roleBatchBindDTO;
        }
    }
    namespace BatchUnbindAppsWithUsersUsingPOST7 {
        namespace Parameters {
            export type appBatchBindDTO = serviceType.piliangyingyongbangdingcanshu;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            appBatchBindDTO: serviceType.BatchUnbindAppsWithUsersUsingPOST7.Parameters.appBatchBindDTO;
        }
    }
    namespace BatchUnbindRolesWithUsersUsingPOST7 {
        namespace Parameters {
            export type roleBatchBindDTO = serviceType.piliangjiaosebangdingcanshu;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            roleBatchBindDTO: serviceType.BatchUnbindRolesWithUsersUsingPOST7.Parameters.roleBatchBindDTO;
        }
    }
    namespace BindingDingUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace BindingDingXcxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace BindingQywxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace BindingWxXcxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace BindingXcxPhoneWithRoleCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace BindingXcxWithRoleCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace CheckStatusUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace CountUnReadUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOflong;
        }
    }
    namespace DelRoleLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DelUserAppLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DelUserLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteImgUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace EnableUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace EnableUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace EnableUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * Enum
     */
    export interface Enum {
    }
    namespace GetAllAppsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyingyongbiaoapp;
        }
    }
    namespace GetAppAllTreeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfResourceTreeVo;
        }
    }
    namespace GetAppUidListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuyingyongguanlianbiaouserApp;
        }
    }
    namespace GetBuildInIDSPUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfIDSPCategoryBuildInVo;
        }
    }
    namespace GetByBeLinkUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyingyongappVo;
        }
    }
    namespace GetConfigUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfSsoConfigVo;
        }
    }
    namespace GetImgsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfSystemImgVo;
        }
    }
    namespace GetLicenseInfoUsingGET7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfLicenseInfo;
        }
    }
    namespace GetLoginTmpCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace GetPemessionByUserUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole;
        }
    }
    namespace GetPermissionByUserUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole;
        }
    }
    namespace GetRoleListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghujiaoseguanlianbiaouserRole;
        }
    }
    namespace GetSmsCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace GetUidsByUserUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOflong;
        }
    }
    namespace GetUserBindXcxListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfweixinxiaochengxuyonghuguanlianbiaoxcxUser;
        }
    }
    namespace GetUserResourceUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghulinshishouquanbiaouserResource;
        }
    }
    namespace GetUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfweixinxiaochengxupeizhibiaoxcxConfig;
        }
    }
    namespace GetUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfzuzhijigoubiaoorg;
        }
    }
    namespace GetUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace GetUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfxingzhengquyubiaoregion;
        }
    }
    namespace GetUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfquanxianbiaoresource;
        }
    }
    namespace GetUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace GetUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfxitongpeizhisystemConfig;
        }
    }
    namespace GetUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyingyongappVo;
        }
    }
    namespace GetUsingPOST71 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfzuoyequyuguanlitaskArea;
        }
    }
    namespace GetUsingPOST79 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace GetUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrenyuanguanlitaskPeople;
        }
    }
    namespace GetUsingPOST95 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace GetVCodeImageBase64UsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace GetVCodeTicketUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace GroupLinkListUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuzuyonghuguanlianbiaogroupUser;
        }
    }
    namespace HasResourceUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole;
        }
    }
    /**
     * IDSPBuildInVo
     */
    export interface IDSPBuildInVo {
        code?: string;
        description?: string;
        name?: string;
        uid?: string;
    }
    /**
     * IDSPCategoryBuildInVo
     */
    export interface IDSPCategoryBuildInVo {
        description?: string;
        idspbuildInVos?: serviceType.IDSPBuildInVo[];
        name?: string;
        uid?: string;
    }
    namespace ImportExcelUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * LicenseInfo
     */
    export interface LicenseInfo {
        info?: string;
        issued?: string; // date-time
        notAfter?: string; // date-time
        notBefore?: string; // date-time
        subject?: string;
    }
    export interface List {
    }
    /**
     * LoginLog
     */
    export interface LoginLog {
        actionType?: {
            name?: "login" | "logout" | "forceLogout";
            disName?: string;
        };
        clientIp?: string;
        created?: string; // date-time
        deviceType?: {
            name?: "pc" | "app" | "microMessenger" | "android" | "ios";
            disName?: string;
        };
        errorCode?: string;
        loginName?: string;
        name?: string;
        remarks?: string;
        status?: {
            name?: "success" | "fail";
            disName?: string;
        };
        uid?: string;
        userUid?: string;
    }
    namespace LoginUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace LoginWithDingUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace LoginWithDingXcxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace LoginWithQywxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace LoginWithSmsCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace LoginWithTempCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace LoginWithXcxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace LogoutUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    /**
     * MapOfstringAndListOfEnum
     */
    export interface MapOfstringAndListOfEnum {
        [name: string]: serviceType.List;
    }
    namespace ModifyPasswordUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace ModifyPasswordWithInitUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace NotLinkAppListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyingyongbiaoapp;
        }
    }
    namespace NotLinkAppListUsingPOST8 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyingyongbiaoapp;
        }
    }
    namespace NotLinkUserListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxibiaouser;
        }
    }
    /**
     * OptLog
     */
    export interface OptLog {
        appCode?: string;
        appName?: string;
        category?: string;
        categoryName?: string;
        clientIp?: string;
        endTime?: string; // date-time
        loginName?: string;
        message?: string;
        name?: string;
        originAppCode?: string;
        params?: string;
        startTime?: string; // date-time
        status?: {
            name?: "success" | "fail";
            disName?: string;
        };
        timeConsuming?: number; // int64
        type?: string;
        typeName?: string;
        uid?: string;
        userUid?: string;
    }
    export interface OrgDicNameVo {
    }
    namespace OrgLinkMultiUsersUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace OrgLinkUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace QueryAllUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfjiaosexinxibiaorole;
        }
    }
    namespace QueryAllWithDataPermissionUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg;
        }
    }
    namespace QueryEnumsUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfMapOfstringAndListOfEnum;
        }
    }
    namespace QueryEnumsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfEnum;
        }
    }
    namespace QueryForAllUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxi;
        }
    }
    namespace QueryResourceRoleUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole;
        }
    }
    namespace QueryTreeByDataPermissionOrgUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg;
        }
    }
    namespace QueryTreeByUserOrgUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg;
        }
    }
    namespace QueryTreeUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg;
        }
    }
    namespace QueryTreeUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfRegionVo;
        }
    }
    namespace QueryTreeUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianbiaoresource;
        }
    }
    namespace QueryTreeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuzubiaogroup;
        }
    }
    namespace QueryUsingPOST103 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfOptLog;
        }
    }
    namespace QueryUsingPOST111 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg;
        }
    }
    namespace QueryUsingPOST119 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuzhileixingzidianbiaoorgDic;
        }
    }
    namespace QueryUsingPOST127 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfgangweibianmabiaopost;
        }
    }
    namespace QueryUsingPOST135 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianbiaoresource;
        }
    }
    namespace QueryUsingPOST143 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfjiaosexinxibiaorole;
        }
    }
    namespace QueryUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfjifeidanweibillingUnit;
        }
    }
    namespace QueryUsingPOST151 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyequyuguanlitaskArea;
        }
    }
    namespace QueryUsingPOST159 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace QueryUsingPOST167 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrenyuanguanlitaskPeople;
        }
    }
    namespace QueryUsingPOST175 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxi;
        }
    }
    namespace QueryUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshoukuanpeizhicollectionConfig;
        }
    }
    namespace QueryUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOffeiyongpeizhiexpenseConfig;
        }
    }
    namespace QueryUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOffeiyongleixingexpenseType;
        }
    }
    namespace QueryUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuzubiaogroup;
        }
    }
    namespace QueryUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfcaozuorizhileibielogCategorybaohanlogTypeliebiao;
        }
    }
    namespace QueryUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfcaozuorizhileixingbiaologType;
        }
    }
    namespace QueryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyingyongappVo;
        }
    }
    namespace QueryUsingPOST71 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfLoginLog;
        }
    }
    namespace QueryUsingPOST79 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfxiaoxitongzhibiaomessageNotify;
        }
    }
    namespace QueryUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfweixinxiaochengxupeizhibiaoxcxConfig;
        }
    }
    namespace QueryUsingPOST95 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfbianhaoleixingguanlinumberManagement;
        }
    }
    namespace ReadUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * RegionVo
     */
    export interface RegionVo {
        /**
         * 子节点
         */
        childs?: serviceType.RegionVo[];
        /**
         * 主键
         */
        code?: string;
        /**
         * 机构名称
         */
        name?: string;
        /**
         * 父级区域编码CODE
         */
        parentCode?: string;
        /**
         * 类型（province省,city市,district区）
         */
        type?: {
            name?: "all" | "province" | "city" | "district";
            disName?: string;
        };
    }
    namespace RemoveUsingPOST104 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST112 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST120 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST128 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST136 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST40 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST48 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST56 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST64 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST72 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST80 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace RemoveUsingPOST88 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST96 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ResetPasswordUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ResourceListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianbiaoresource;
        }
    }
    /**
     * ResourceTreeVo
     */
    export interface ResourceTreeVo {
        /**
         * 应用UID
         */
        appUid?: string;
        /**
         * 子节点权限
         */
        childList?: serviceType.ResourceTreeVo[];
        /**
         * 权限CODE
         */
        code?: string;
        /**
         * 图标
         */
        icon?: string;
        /**
         * 层级
         */
        level?: number; // int32
        /**
         * 权限名称
         */
        name?: string;
        /**
         * 父节点UID
         */
        parentUid?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 类型，menu:菜单;api:接口;
         */
        type?: {
            name?: "menu" | "api";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: string;
        /**
         * url地址
         */
        url?: string;
    }
    namespace RoleLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RoleLinkUsingPOST8 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * RoleLinkVo
     */
    export interface RoleLinkVo {
        /**
         * 授权途径
         */
        authChannelList?: ("USER" | "GROUP" | "SYS")[];
        /**
         * 用户组授权关联uid
         */
        groupLinkUid?: number; // int64
        /**
         * 角色名称
         */
        roleName?: string;
        /**
         * 角色uid
         */
        roleUid?: number; // int64
        /**
         * 用户授权关联uid
         */
        userLinkUid?: number; // int64
    }
    namespace RoleListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfRoleLinkVo;
        }
    }
    namespace RoleListUsingPOST8 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuzujiaoseguanlianbiaogroupRole;
        }
    }
    namespace RolePemessionUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole;
        }
    }
    namespace SaveCommonUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace SaveSsoAdminUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace SaveUsingPOST104 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfjiaosexinxibiaorole;
        }
    }
    namespace SaveUsingPOST112 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST120 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST128 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST136 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST144 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace SaveUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST40 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST48 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace SaveUsingPOST56 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace SaveUsingPOST64 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyingyongbiaoapp;
        }
    }
    namespace SaveUsingPOST72 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST80 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST88 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST96 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfquanxianbiaoresource;
        }
    }
    namespace SetUserDataPermissionUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * SmsCodeInfoVo
     */
    export interface SmsCodeInfoVo {
        code?: string;
        expire?: number; // int64
        loginName?: string;
        telephone?: string;
    }
    namespace SmsCodeListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfSmsCodeInfoVo;
        }
    }
    /**
     * SsoConfigVo
     */
    export interface SsoConfigVo {
        dingAppId?: string;
        dingLogin?: boolean;
        homePageUrl?: string;
        loginPageUrl?: string;
        pictureCode?: boolean;
        qywxAgentId?: string;
        qywxAppId?: string;
        qywxLogin?: boolean;
    }
    /**
     * SystemImgVo
     */
    export interface SystemImgVo {
        /**
         * 网站ICON
         */
        icon?: string;
        /**
         * 企业LOGO
         */
        logo?: string;
        /**
         * 企业名称
         */
        name?: string;
    }
    namespace UnAppLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UnbindingDingBySelfUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace UnbindingDingUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace UnbindingQywxBySelfUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace UnbindingQywxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace UnbindingXcxBySelfUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace UnbindingXcxUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace UpdateRolePemessionUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateSelfUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateSortUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUserPasswordUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace UpdateUserRoleUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST104 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST112 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST120 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST128 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST136 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST144 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace UpdateUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST40 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST48 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace UpdateUsingPOST56 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfobject;
        }
    }
    namespace UpdateUsingPOST64 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfweixinxiaochengxupeizhibiaoxcxConfig;
        }
    }
    namespace UpdateUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyingyongbiaoapp;
        }
    }
    namespace UpdateUsingPOST72 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST80 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST88 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST96 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfquanxianbiaoresource;
        }
    }
    namespace UpdateWhiteListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UploadLicenseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    export interface User {
    }
    namespace UserAppLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UserLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UserListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyonghuxinxibiaouser;
        }
    }
    /**
     * UserQueryDTO
     */
    export interface UserQueryDTO {
        endTime?: string; // date-time
        idNumber?: string;
        loginName?: string;
        name?: string;
        orderField?: {
            name?: "CREATED" | "SORT";
            disName?: string;
        };
        orderType?: {
            name?: "ASC" | "DESC";
            disName?: string;
        };
        orgUid?: number; // int64
        pageNum?: number; // int32
        pageSize?: number; // int32
        startTime?: string; // date-time
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        telephone?: string;
        type?: {
            name?: "customer" | "common" | "ssoAdmin";
            disName?: string;
        };
    }
    namespace UserRoleLinkUsingPOST {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UserUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
    }
    namespace VerifyUsingGET7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfLicenseInfo;
        }
    }
    /**
     * 编号类型管理numberManagement
     */
    export interface bianhaoleixingguanlinumberManagement {
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 前缀
         */
        prefix?: string;
        /**
         * 规则
         */
        rule?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 操作日志类别logCategory，包含logType列表
     */
    export interface caozuorizhileibielogCategorybaohanlogTypeliebiao {
        /**
         * 应用UID
         */
        appUid?: number; // int64
        /**
         * 编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 操作列表
         */
        logTypeList?: serviceType.caozuorizhileixingbiaologType[];
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 操作日志类型表logType
     */
    export interface caozuorizhileixingbiaologType {
        /**
         * 应用UID
         */
        appUid?: number; // int64
        /**
         * 日志类别UID
         */
        categoryUid?: number; // int64
        /**
         * 编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 费用类型expenseType
     */
    export interface feiyongleixingexpenseType {
        /**
         * 编码
         */
        code?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 状态:启用：y；停用：n；
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 费用配置expenseConfig
     */
    export interface feiyongpeizhiexpenseConfig {
        /**
         * 计费方式
         */
        billingType?: string;
        /**
         * 计费方式中文
         */
        billingTypeDisName?: string;
        /**
         * 计费单位名称
         */
        billingUnitName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 费用类型ID
         */
        expenseTypeId?: number; // int64
        /**
         * 费用类型名称
         */
        expenseTypeName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 速查码
         */
        quickReferenceCode?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 状态:启用：y；停用：n；
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 计费单位ID
         */
        unitId?: number; // int64
        /**
         * 计费单价
         */
        unitPrice?: number;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 岗位编码表post
     */
    export interface gangweibianmabiaopost {
        /**
         * 岗位编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 岗位名称
         */
        name?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 角色信息表role
     */
    export interface jiaosexinxibiaorole {
        /**
         * 应用UID
         */
        appUid?: number; // int64
        /**
         * 角色CODE
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 角色名称
         */
        name?: string;
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 角色类型,normal(普通),sys(系统)
         */
        type?: {
            name?: "normal" | "sys";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 接口统一返回实体OfLicenseInfo
     */
    export interface jiekoutongyifanhuishitiOfLicenseInfo {
        /**
         * 具体数据对象
         */
        data?: serviceType.LicenseInfo;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfAccessControlVo
     */
    export interface jiekoutongyifanhuishitiOfListOfAccessControlVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.AccessControlVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfEnum
     */
    export interface jiekoutongyifanhuishitiOfListOfEnum {
        /**
         * 具体数据对象
         */
        data?: serviceType.Enum[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfIDSPCategoryBuildInVo
     */
    export interface jiekoutongyifanhuishitiOfListOfIDSPCategoryBuildInVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.IDSPCategoryBuildInVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfLoginLog
     */
    export interface jiekoutongyifanhuishitiOfListOfLoginLog {
        /**
         * 具体数据对象
         */
        data?: serviceType.LoginLog[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfOptLog
     */
    export interface jiekoutongyifanhuishitiOfListOfOptLog {
        /**
         * 具体数据对象
         */
        data?: serviceType.OptLog[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfRegionVo
     */
    export interface jiekoutongyifanhuishitiOfListOfRegionVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.RegionVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfResourceTreeVo
     */
    export interface jiekoutongyifanhuishitiOfListOfResourceTreeVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.ResourceTreeVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfRoleLinkVo
     */
    export interface jiekoutongyifanhuishitiOfListOfRoleLinkVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.RoleLinkVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOfSmsCodeInfoVo
     */
    export interface jiekoutongyifanhuishitiOfListOfSmsCodeInfoVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.SmsCodeInfoVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf编号类型管理numberManagement
     */
    export interface jiekoutongyifanhuishitiOfListOfbianhaoleixingguanlinumberManagement {
        /**
         * 具体数据对象
         */
        data?: serviceType.bianhaoleixingguanlinumberManagement[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf操作日志类别logCategory，包含logType列表
     */
    export interface jiekoutongyifanhuishitiOfListOfcaozuorizhileibielogCategorybaohanlogTypeliebiao {
        /**
         * 具体数据对象
         */
        data?: serviceType.caozuorizhileibielogCategorybaohanlogTypeliebiao[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf操作日志类型表logType
     */
    export interface jiekoutongyifanhuishitiOfListOfcaozuorizhileixingbiaologType {
        /**
         * 具体数据对象
         */
        data?: serviceType.caozuorizhileixingbiaologType[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf费用类型expenseType
     */
    export interface jiekoutongyifanhuishitiOfListOffeiyongleixingexpenseType {
        /**
         * 具体数据对象
         */
        data?: serviceType.feiyongleixingexpenseType[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf费用配置expenseConfig
     */
    export interface jiekoutongyifanhuishitiOfListOffeiyongpeizhiexpenseConfig {
        /**
         * 具体数据对象
         */
        data?: serviceType.feiyongpeizhiexpenseConfig[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf岗位编码表post
     */
    export interface jiekoutongyifanhuishitiOfListOfgangweibianmabiaopost {
        /**
         * 具体数据对象
         */
        data?: serviceType.gangweibianmabiaopost[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf角色信息表role
     */
    export interface jiekoutongyifanhuishitiOfListOfjiaosexinxibiaorole {
        /**
         * 具体数据对象
         */
        data?: serviceType.jiaosexinxibiaorole[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf计费单位billingUnit
     */
    export interface jiekoutongyifanhuishitiOfListOfjifeidanweibillingUnit {
        /**
         * 具体数据对象
         */
        data?: serviceType.jifeidanweibillingUnit[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOflong
     */
    export interface jiekoutongyifanhuishitiOfListOflong {
        /**
         * 具体数据对象
         */
        data?: number /* int64 */ [];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf权限表resource
     */
    export interface jiekoutongyifanhuishitiOfListOfquanxianbiaoresource {
        /**
         * 具体数据对象
         */
        data?: serviceType.quanxianbiaoresource[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf权限角色关联表resourceRole
     */
    export interface jiekoutongyifanhuishitiOfListOfquanxianjiaoseguanlianbiaoresourceRole {
        /**
         * 具体数据对象
         */
        data?: serviceType.quanxianjiaoseguanlianbiaoresourceRole[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf人员管理taskPeople
     */
    export interface jiekoutongyifanhuishitiOfListOfrenyuanguanlitaskPeople {
        /**
         * 具体数据对象
         */
        data?: serviceType.renyuanguanlitaskPeople[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf收款配置collectionConfig
     */
    export interface jiekoutongyifanhuishitiOfListOfshoukuanpeizhicollectionConfig {
        /**
         * 具体数据对象
         */
        data?: serviceType.shoukuanpeizhicollectionConfig[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf微信小程序配置表xcxConfig
     */
    export interface jiekoutongyifanhuishitiOfListOfweixinxiaochengxupeizhibiaoxcxConfig {
        /**
         * 具体数据对象
         */
        data?: serviceType.weixinxiaochengxupeizhibiaoxcxConfig[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf微信小程序用户关联表xcxUser
     */
    export interface jiekoutongyifanhuishitiOfListOfweixinxiaochengxuyonghuguanlianbiaoxcxUser {
        /**
         * 具体数据对象
         */
        data?: serviceType.weixinxiaochengxuyonghuguanlianbiaoxcxUser[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf消息通知表messageNotify
     */
    export interface jiekoutongyifanhuishitiOfListOfxiaoxitongzhibiaomessageNotify {
        /**
         * 具体数据对象
         */
        data?: serviceType.xiaoxitongzhibiaomessageNotify[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf应用appVo
     */
    export interface jiekoutongyifanhuishitiOfListOfyingyongappVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.yingyongappVo[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf应用表app
     */
    export interface jiekoutongyifanhuishitiOfListOfyingyongbiaoapp {
        /**
         * 具体数据对象
         */
        data?: serviceType.yingyongbiaoapp[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户角色关联表userRole
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghujiaoseguanlianbiaouserRole {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghujiaoseguanlianbiaouserRole[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户临时授权表userResource
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghulinshishouquanbiaouserResource {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghulinshishouquanbiaouserResource[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户信息
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghuxinxi {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuxinxi[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户信息表user
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghuxinxibiaouser {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuxinxibiaouser[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户应用关联表userApp
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghuyingyongguanlianbiaouserApp {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuyingyongguanlianbiaouserApp[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户组表group
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghuzubiaogroup {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuzubiaogroup[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户组角色关联表groupRole
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghuzujiaoseguanlianbiaogroupRole {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuzujiaoseguanlianbiaogroupRole[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf用户组用户关联表groupUser
     */
    export interface jiekoutongyifanhuishitiOfListOfyonghuzuyonghuguanlianbiaogroupUser {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuzuyonghuguanlianbiaogroupUser[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf作业分组管理taskGroup
     */
    export interface jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuoyefenzuguanlitaskGroup[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf作业区域管理taskArea
     */
    export interface jiekoutongyifanhuishitiOfListOfzuoyequyuguanlitaskArea {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuoyequyuguanlitaskArea[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf组织机构表org
     */
    export interface jiekoutongyifanhuishitiOfListOfzuzhijigoubiaoorg {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuzhijigoubiaoorg[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfListOf组织类型字典表orgDic
     */
    export interface jiekoutongyifanhuishitiOfListOfzuzhileixingzidianbiaoorgDic {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuzhileixingzidianbiaoorgDic[];
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfMapOfstringAndListOfEnum
     */
    export interface jiekoutongyifanhuishitiOfMapOfstringAndListOfEnum {
        /**
         * 具体数据对象
         */
        data?: {
            [name: string]: serviceType.Enum[];
        };
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfSsoConfigVo
     */
    export interface jiekoutongyifanhuishitiOfSsoConfigVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.SsoConfigVo;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体OfSystemImgVo
     */
    export interface jiekoutongyifanhuishitiOfSystemImgVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.SystemImgVo;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of角色信息表role
     */
    export interface jiekoutongyifanhuishitiOfjiaosexinxibiaorole {
        /**
         * 具体数据对象
         */
        data?: serviceType.jiaosexinxibiaorole;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Oflong
     */
    export interface jiekoutongyifanhuishitiOflong {
        /**
         * 具体数据对象
         */
        data?: number; // int64
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Ofobject
     */
    export interface jiekoutongyifanhuishitiOfobject {
        /**
         * 具体数据对象
         */
        data?: {
        };
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of权限表resource
     */
    export interface jiekoutongyifanhuishitiOfquanxianbiaoresource {
        /**
         * 具体数据对象
         */
        data?: serviceType.quanxianbiaoresource;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of人员管理taskPeople
     */
    export interface jiekoutongyifanhuishitiOfrenyuanguanlitaskPeople {
        /**
         * 具体数据对象
         */
        data?: serviceType.renyuanguanlitaskPeople;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Ofstring
     */
    export interface jiekoutongyifanhuishitiOfstring {
        /**
         * 具体数据对象
         */
        data?: string;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of微信小程序配置表xcxConfig
     */
    export interface jiekoutongyifanhuishitiOfweixinxiaochengxupeizhibiaoxcxConfig {
        /**
         * 具体数据对象
         */
        data?: serviceType.weixinxiaochengxupeizhibiaoxcxConfig;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of行政区域表region
     */
    export interface jiekoutongyifanhuishitiOfxingzhengquyubiaoregion {
        /**
         * 具体数据对象
         */
        data?: serviceType.xingzhengquyubiaoregion;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of系统配置systemConfig
     */
    export interface jiekoutongyifanhuishitiOfxitongpeizhisystemConfig {
        /**
         * 具体数据对象
         */
        data?: serviceType.xitongpeizhisystemConfig;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of应用appVo
     */
    export interface jiekoutongyifanhuishitiOfyingyongappVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.yingyongappVo;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of应用表app
     */
    export interface jiekoutongyifanhuishitiOfyingyongbiaoapp {
        /**
         * 具体数据对象
         */
        data?: serviceType.yingyongbiaoapp;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of用户信息表user
     */
    export interface jiekoutongyifanhuishitiOfyonghuxinxibiaouser {
        /**
         * 具体数据对象
         */
        data?: serviceType.yonghuxinxibiaouser;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of作业分组管理taskGroup
     */
    export interface jiekoutongyifanhuishitiOfzuoyefenzuguanlitaskGroup {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuoyefenzuguanlitaskGroup;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of作业区域管理taskArea
     */
    export interface jiekoutongyifanhuishitiOfzuoyequyuguanlitaskArea {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuoyequyuguanlitaskArea;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 接口统一返回实体Of组织机构表org
     */
    export interface jiekoutongyifanhuishitiOfzuzhijigoubiaoorg {
        /**
         * 具体数据对象
         */
        data?: serviceType.zuzhijigoubiaoorg;
        /**
         * 返回消息
         */
        message?: string;
        /**
         * 扩展数据对象
         */
        options?: {
        };
        /**
         * 页码
         */
        pageNum?: number; // int32
        /**
         * 分页大小
         */
        pageSize?: number; // int32
        /**
         * 总分页数
         */
        pages?: number; // int32
        /**
         * 状态码
         */
        status?: number; // int32
        /**
         * 总记录数
         */
        total?: number; // int64
        uid?: string;
    }
    /**
     * 计费单位billingUnit
     */
    export interface jifeidanweibillingUnit {
        /**
         * 编码
         */
        code?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 状态:启用：y；停用：n；
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 批量角色绑定参数
     */
    export interface piliangjiaosebangdingcanshu {
        /**
         * 待绑定角色UID数组
         */
        roleUids?: number /* int64 */ [];
        /**
         * 用户过滤条件
         */
        userQuery?: serviceType.UserQueryDTO;
    }
    /**
     * 批量应用绑定参数
     */
    export interface piliangyingyongbangdingcanshu {
        /**
         * 待绑定应用UID数组
         */
        appUids?: number /* int64 */ [];
        /**
         * 用户过滤条件
         */
        userQuery?: serviceType.UserQueryDTO;
    }
    /**
     * 权限表resource
     */
    export interface quanxianbiaoresource {
        /**
         * 应用名称
         */
        appName?: string;
        /**
         * 应用UID
         */
        appUid?: number; // int64
        /**
         * 子权限列表
         */
        childList?: serviceType.quanxianbiaoresource[];
        /**
         * 权限CODE
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 图标
         */
        icon?: string;
        /**
         * 层级
         */
        level?: number; // int32
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 权限名称
         */
        name?: string;
        /**
         * 父节点UID
         */
        parentUid?: number; // int64
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 类型，menu:菜单;api:接口;
         */
        type?: {
            name?: "menu" | "api";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
        /**
         * url地址
         */
        url?: string;
        /**
         * 用户uid
         */
        userUid?: number; // int64
    }
    /**
     * 权限角色关联表resourceRole
     */
    export interface quanxianjiaoseguanlianbiaoresourceRole {
        /**
         * 权限UID
         */
        resourceUid?: number; // int64
        /**
         * 角色UID
         */
        roleUid?: number; // int64
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 人员管理taskPeople
     */
    export interface renyuanguanlitaskPeople {
        /**
         * 作业区域名称列表
         */
        areaNames?: string[];
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 所属组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 身份证号码
         */
        idCard?: string;
        /**
         * 姓名
         */
        name?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 作业分组ID
         */
        taskGroupId?: number; // int64
        /**
         * 作业人员类型：理货员：tally；叉车工：driver；搬运工：porter
         */
        type?: {
            name?: "tallyMan" | "driver" | "porter";
            disName?: string;
        };
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 用户ID
         */
        userUid?: number; // int64
    }
    /**
     * 收款配置collectionConfig
     */
    export interface shoukuanpeizhicollectionConfig {
        /**
         * 收款账号
         */
        collectionAccounts?: string;
        /**
         * 收款方式:现金：cash；转账：transfer_accounts；支付宝：Alipay；微信：WeChat
         */
        collectionType?: {
            name?: "cash" | "transfer" | "alipay" | "wechat";
            disName?: string;
        };
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 收款方式名称
         */
        name?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 状态（y‘启用’； n‘停用’； del‘删除’）
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 微信小程序配置表xcxConfig
     */
    export interface weixinxiaochengxupeizhibiaoxcxConfig {
        /**
         * appId
         */
        appId?: string;
        /**
         * appSecret
         */
        appSecret?: string;
        /**
         * clientId
         */
        clientId?: number; // int64
        /**
         * clientSecret
         */
        clientSecret?: string;
        /**
         * 小程序编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 创建人
         */
        createdName?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 小程序名称
         */
        name?: string;
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 小程序类型（dingding/wx）
         */
        type?: {
            name?: "WX_XCX" | "DING_EAPP";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 微信小程序用户关联表xcxUser
     */
    export interface weixinxiaochengxuyonghuguanlianbiaoxcxUser {
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        loginName?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * openId
         */
        openId?: string;
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
        userName?: string;
        /**
         * 用户UID
         */
        userUid?: number; // int64
        xcxConfigName?: string;
        /**
         * 小程序配置UID
         */
        xcxConfigUid?: number; // int64
    }
    /**
     * 消息通知表messageNotify
     */
    export interface xiaoxitongzhibiaomessageNotify {
        /**
         * 接收人
         */
        accepterLoginName?: string;
        /**
         * 业务ID
         */
        businessId?: number; // int64
        /**
         * 内容
         */
        content?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 消息来源：customer：客户系统；wms：仓储系统
         */
        sources?: {
            name?: "customer" | "wms";
            disName?: string;
        };
        /**
         * 状态：read：已读；unread：未读；
         */
        status?: {
            name?: "read" | "unread";
            disName?: string;
        };
        /**
         * 消息类型
         */
        type?: {
            name?: "warehouse_plan_deal" | "warehouse_plan_reject" | "warehouse_order_finish" | "delivery_plan_deal" | "delivery_plan_reject" | "delivery_order_finish" | "contract_maybe_message" | "contract_ineffective_message" | "contract_effective_message";
            disName?: string;
        };
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 行政区域表region
     */
    export interface xingzhengquyubiaoregion {
        /**
         * 主键
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 机构名称
         */
        name?: string;
        /**
         * 父级区域编码CODE
         */
        parentCode?: string;
        /**
         * 类型（province省,city市,district区）
         */
        type?: {
            name?: "all" | "province" | "city" | "district";
            disName?: string;
        };
    }
    /**
     * 系统配置systemConfig
     */
    export interface xitongpeizhisystemConfig {
        /**
         * 允许更改费用单价:yes：是；no：否
         */
        allowChangeUnitPrice?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 计费精度
         */
        billingAccuracy?: number; // int32
        /**
         * 费用尾数计算方式:尾数进1：mantissa_into_1；四舍五入：rounding
         */
        calculationMethod?: {
            name?: "mantissa_into_1" | "rounding";
            disName?: string;
        };
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 网站ICON
         */
        icon?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 默认纳入计件工资:yes：是；no：否
         */
        includedInPieceRate?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 企业LOGO
         */
        logo?: string;
        /**
         * 是否允许拼盘:yes：是；no：否
         */
        madeDish?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 企业名称
         */
        name?: string;
        /**
         * 滞纳金比例(千分之一)
         */
        overduePaymentProportion?: string;
        /**
         * 账单超时天数
         */
        overtimeDay?: string;
        /**
         * 打印字段_批次号:yes：是；no：否
         */
        printBatchNumber?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 出入库整单打印字段
         */
        printField?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_剩余件数:yes：是；no：否
         */
        printLeftNumber?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_库位编号:yes：是；no：否
         */
        printLocationNumber?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_件数:yes：是；no：否
         */
        printNumber?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_件/板:yes：是；no：否
         */
        printPieceBoard?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_件重:yes：是；no：否
         */
        printPieceWeight?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 出入库打印底部注释:yes：是；no：否
         */
        printRemark?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_备注:yes: 是；no：否
         */
        printRemarks?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_商品名称/规格:yes：是；no：否
         */
        printShopName?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_商品编号:yes：是；no：否
         */
        printShopNumber?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_合计:yes：是；no：否
         */
        printTotal?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 打印字段_总重:yes：是；no：否
         */
        printTotalWeight?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 收据模板
         */
        receiptTemplate?: string;
        /**
         * 收据抬头
         */
        receiptTitle?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 账单严重超时天数
         */
        seriousOvertimeDay?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 合同到期预警天数
         */
        warnDay?: string;
        /**
         * 预出库数量预警
         */
        warnNumber?: string;
    }
    /**
     * 应用appVo
     */
    export interface yingyongappVo {
        /**
         * 访问控制，是：y：n：否
         */
        accessControl?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 授权类型(sso单点登陆，oauth2统一认证)
         */
        authorizationType?: {
            name?: "sso" | "oauth2";
            disName?: string;
        };
        /**
         * 内部应用权限列表
         */
        buildInIdsPermissions?: string[];
        /**
         * clientId
         */
        clientId?: number; // int64
        /**
         * clientSecret
         */
        clientSecret?: string;
        /**
         * 应用编码
         */
        code?: string;
        /**
         * 创建人姓名
         */
        createName?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 自定义应用权限列表
         */
        custIdsPermissions?: string[];
        /**
         * 域名（内网）
         */
        domain?: string;
        /**
         * 域名（公网）
         */
        domainPub?: string;
        /**
         * 图标
         */
        icon?: string;
        /**
         * 注销地址
         */
        logoutUrl?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 修改人姓名
         */
        modifiedName?: string;
        /**
         * 应用名称
         */
        name?: string;
        /**
         * 刷新登录用户地址
         */
        refreshUserUrl?: string;
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 类型，normal(普通),sys(系统)
         */
        type?: {
            name?: "normal" | "sys";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 应用表app
     */
    export interface yingyongbiaoapp {
        /**
         * 访问控制，是：y：n：否
         */
        accessControl?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 授权类型(sso单点登陆，oauth2统一认证)
         */
        authorizationType?: {
            name?: "sso" | "oauth2";
            disName?: string;
        };
        /**
         * 应用编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 域名（内网）
         */
        domain?: string;
        /**
         * 域名（公网）
         */
        domainPub?: string;
        /**
         * 注销地址
         */
        logoutUrl?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 应用名称
         */
        name?: string;
        /**
         * 刷新登录用户地址
         */
        refreshUserUrl?: string;
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 类型，normal(普通),sys(系统)
         */
        type?: {
            name?: "normal" | "sys";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 用户角色关联表userRole
     */
    export interface yonghujiaoseguanlianbiaouserRole {
        /**
         * 角色UID
         */
        roleUid?: number; // int64
        /**
         * 主键
         */
        uid?: number; // int64
        /**
         * 用户UID
         */
        userUid?: number; // int64
    }
    /**
     * 用户临时授权表userResource
     */
    export interface yonghulinshishouquanbiaouserResource {
        /**
         * 应用UID
         */
        appUid?: number; // int64
        /**
         * 角色UID
         */
        resourceUid?: number; // int64
        /**
         * 赋予give,限制restrict
         */
        type?: {
            name?: "give" | "restrict";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
        /**
         * 用户UID
         */
        userUid?: number; // int64
    }
    /**
     * 用户信息
     */
    export interface yonghuxinxi {
        /**
         * 联系地址
         */
        addr?: string;
        /**
         * 修改密码，是y否n
         */
        changePwd?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 创建人姓名
         */
        createdName?: string;
        /**
         * 钉钉持久授权码
         */
        dingAuthCode?: string;
        /**
         * 钉钉unionid
         */
        dingUnionId?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 性别,男:mail;女:female
         */
        gender?: {
            name?: "male" | "female" | "unknown";
            disName?: string;
        };
        /**
         * 所属的用户组UID列表
         */
        groupUidList?: string[];
        /**
         * 证件号码
         */
        idNumber?: string;
        /**
         * 是否是作业人员 y：是；n：不是
         */
        isTaskPeople?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 用户名
         */
        loginName?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 姓名
         */
        name?: string;
        /**
         * 机构名称（多个）
         */
        orgNames?: string;
        /**
         * 岗位编码
         */
        postCode?: string;
        /**
         * 职务名称
         */
        postName?: string;
        /**
         * 企业微信userid
         */
        qywxUserId?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 角色名称:以、的形式隔开
         */
        roleName?: string;
        /**
         * 角色列表
         */
        roles?: serviceType.jiaosexinxibiaorole[];
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 同步标识
         */
        syncUid?: string;
        /**
         * 同步用户（是y,否n）
         */
        syncUser?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 联系电话
         */
        telephone?: string;
        /**
         * 用户类型,normal普通用户、appAdmin应用管理员、ssoAdmin平台管理员
         */
        type?: {
            name?: "customer" | "common" | "ssoAdmin";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
        /**
         * 白名单列表
         */
        whiteList?: string;
        /**
         * 是否启用白名单,是:y;否:n
         */
        whiteListStatus?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 微信unionId
         */
        wxUnionId?: string;
    }
    /**
     * 用户信息表user
     */
    export interface yonghuxinxibiaouser {
        /**
         * 联系地址
         */
        addr?: string;
        /**
         * 修改密码，是y否n
         */
        changePwd?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        deviceType?: {
            name?: "pc" | "app" | "microMessenger" | "android" | "ios";
            disName?: string;
        };
        /**
         * 钉钉持久授权码
         */
        dingAuthCode?: string;
        /**
         * 钉钉unionid
         */
        dingUnionId?: string;
        /**
         * 邮箱
         */
        email?: string;
        expire?: number; // int64
        /**
         * 性别,男:mail;女:female
         */
        gender?: {
            name?: "male" | "female" | "unknown";
            disName?: string;
        };
        /**
         * 证件号码
         */
        idNumber?: string;
        lastLoginTime?: string; // date-time
        /**
         * 用户名
         */
        loginName?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 姓名
         */
        name?: string;
        /**
         * 岗位编码
         */
        postCode?: string;
        pubRedirectUrl?: string;
        /**
         * 企业微信userid
         */
        qywxUserId?: string;
        redirectUrl?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        syncOrg?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 同步标识
         */
        syncUid?: string;
        syncUser?: {
            name?: "y" | "n";
            disName?: string;
        };
        syncUserOrg?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 联系电话
         */
        telephone?: string;
        ticket?: string;
        /**
         * 用户类型,normal普通用户、appAdmin应用管理员、ssoAdmin平台管理员
         */
        type?: {
            name?: "customer" | "common" | "ssoAdmin";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
        userAppList?: serviceType.AppLoginVo[];
        userOrgCodeList?: string[];
        /**
         * 白名单列表
         */
        whiteList?: string;
        /**
         * 是否启用白名单,是:y;否:n
         */
        whiteListStatus?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 微信unionId
         */
        wxUnionId?: string;
    }
    /**
     * 用户应用关联表userApp
     */
    export interface yonghuyingyongguanlianbiaouserApp {
        appName?: string;
        /**
         * 应用UID
         */
        appUid?: number; // int64
        roleList?: serviceType.jiaosexinxibiaorole[];
        /**
         * 状态enable启用,disable停用
         */
        status?: {
            name?: "enable" | "disable";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
        /**
         * 用户UID
         */
        userUid?: number; // int64
    }
    /**
     * 用户组表group
     */
    export interface yonghuzubiaogroup {
        /**
         * 组织机构是否可选
         */
        canSelect?: boolean;
        /**
         * 子节点列表
         */
        childList?: serviceType.yonghuzubiaogroup[];
        /**
         * 用户组编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * true:用户组数据；false:组织机构数据
         */
        groupFlag?: boolean;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 用户组名称
         */
        name?: string;
        /**
         * 组织机构UID
         */
        orgUid?: number; // int64
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 用户组角色关联表groupRole
     */
    export interface yonghuzujiaoseguanlianbiaogroupRole {
        /**
         * 用户组UID
         */
        groupUid?: number; // int64
        /**
         * 角色UID
         */
        roleUid?: number; // int64
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 用户组用户关联表groupUser
     */
    export interface yonghuzuyonghuguanlianbiaogroupUser {
        /**
         * 用户组UID
         */
        groupUid?: number; // int64
        /**
         * 主键
         */
        uid?: number; // int64
        /**
         * 用户UID
         */
        userUid?: number; // int64
    }
    /**
     * 作业分组管理taskGroup
     */
    export interface zuoyefenzuguanlitaskGroup {
        /**
         * 区域列表
         */
        areas?: serviceType.zuoyequyuguanlitaskArea[];
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 作业区域管理taskArea
     */
    export interface zuoyequyuguanlitaskArea {
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 区域名称
         */
        name?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
    }
    /**
     * 组织机构表org
     */
    export interface zuzhijigoubiaoorg {
        canSelect?: boolean;
        children?: serviceType.zuzhijigoubiaoorg[];
        /**
         * 编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        /**
         * 组织类型CODE
         */
        dicCode?: string;
        /**
         * 层级
         */
        level?: number; // int32
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 父级UID
         */
        parentUid?: number; // int64
        selected?: boolean;
        show?: boolean;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 同步组织（是y,否n）
         */
        syncOrg?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 同步标识
         */
        syncUid?: string;
        /**
         * 主键
         */
        uid?: number; // int64
    }
    /**
     * 组织类型字典表orgDic
     */
    export interface zuzhileixingzidianbiaoorgDic {
        /**
         * 类型编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人UID
         */
        createdBy?: number; // int64
        createdName?: string;
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人UID
         */
        modifiedBy?: number; // int64
        /**
         * 类型名称
         */
        name?: string;
        /**
         * 排序
         */
        sort?: number; // int32
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 主键
         */
        uid?: number; // int64
    }
}
