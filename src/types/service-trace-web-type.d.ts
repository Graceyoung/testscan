declare namespace serviceType {
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
    namespace CountUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfTraceCodeOrderCountVo;
        }
    }
    namespace DeleteUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * Enum
     */
    export interface Enum {
    }
    namespace GetByTraceCodeNotLoginUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpinpicixinxibiaocommodityBatch;
        }
    }
    namespace GetByTraceCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpinpicixinxibiaocommodityBatch;
        }
    }
    namespace GetUrlUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    export interface List {
    }
    /**
     * MapOfstringAndListOfEnum
     */
    export interface MapOfstringAndListOfEnum {
        [name: string]: serviceType.List;
    }
    export interface OrgDicNameVo {
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
    namespace QuerySelectCountUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfTimeCountVo;
        }
    }
    namespace QueryTraceCodeCountUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfTimeCountVo;
        }
    }
    namespace QueryTraceCodeListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfTraceCodeOrderVo;
        }
    }
    namespace QueryUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinpicichurukudingdanbiaocommodityBatchOrder;
        }
    }
    namespace QueryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzhengcefaguipolicy;
        }
    }
    namespace SaveUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfTraceCodeOrderVo;
        }
    }
    /**
     * TimeCountVo
     */
    export interface TimeCountVo {
        /**
         * 数量
         */
        count?: number; // int32
        /**
         * 时间字符串
         */
        timeStr?: string;
    }
    /**
     * TraceCodeOrderCountVo
     */
    export interface TraceCodeOrderCountVo {
        /**
         * 所有码数量
         */
        allNumber?: number; // int64
        /**
         * 入库码数量
         */
        inNumber?: number; // int64
        /**
         * 出库码数量
         */
        outNumber?: number; // int64
    }
    /**
     * TraceCodeOrderVo
     */
    export interface TraceCodeOrderVo {
        /**
         * 商品批次编号
         */
        batchNumber?: string;
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 出入库单号
         */
        orderNumber?: string;
        /**
         * 追溯码编号
         */
        traceCode?: string;
        /**
         * 出入库类型类型：出库：out；入库：in；
         */
        type?: {
            name?: "in" | "out";
            disName?: string;
        };
    }
    namespace UpdateUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfTraceCodeOrderCountVo;
        }
    }
    namespace UploadFileUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    export interface User {
    }
    namespace UserUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyonghuxinxibiaouser;
        }
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
     * 接口统一返回实体OfListOfTimeCountVo
     */
    export interface jiekoutongyifanhuishitiOfListOfTimeCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.TimeCountVo[];
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
     * 接口统一返回实体OfListOfTraceCodeOrderVo
     */
    export interface jiekoutongyifanhuishitiOfListOfTraceCodeOrderVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.TraceCodeOrderVo[];
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
     * 接口统一返回实体OfListOf商品批次出入库订单表commodityBatchOrder
     */
    export interface jiekoutongyifanhuishitiOfListOfshangpinpicichurukudingdanbiaocommodityBatchOrder {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinpicichurukudingdanbiaocommodityBatchOrder[];
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
     * 接口统一返回实体OfListOf政策法规policy
     */
    export interface jiekoutongyifanhuishitiOfListOfzhengcefaguipolicy {
        /**
         * 具体数据对象
         */
        data?: serviceType.zhengcefaguipolicy[];
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
     * 接口统一返回实体OfTraceCodeOrderCountVo
     */
    export interface jiekoutongyifanhuishitiOfTraceCodeOrderCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.TraceCodeOrderCountVo;
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
     * 接口统一返回实体Of商品批次信息表commodityBatch
     */
    export interface jiekoutongyifanhuishitiOfshangpinpicixinxibiaocommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinpicixinxibiaocommodityBatch;
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
     * 商品批次出入库订单表commodityBatchOrder
     */
    export interface shangpinpicichurukudingdanbiaocommodityBatchOrder {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 出入库单号
         */
        orderNumber?: string;
        /**
         * 追溯码数量
         */
        traceCodeNumber?: number; // int32
        /**
         * 出入库类型类型：出库：out；入库：in；
         */
        type?: {
            name?: "in" | "out";
            disName?: string;
        };
    }
    /**
     * 商品批次附件commodityBatchFile
     */
    export interface shangpinpicifujiancommodityBatchFile {
        /**
         * 文件地址
         */
        address?: string;
        /**
         * 批次ID
         */
        batchId?: number; // int64
        /**
         * 流通ID
         */
        circulationId?: number; // int64
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
         * 文件后缀
         */
        suffix?: string;
        /**
         * 类型：检验检疫证明：certificate;消杀证明：kill；核酸检测证明：nucleic_acid；海关进口货物报关单：declaration_form；进口货物放行通知书凭证：release_notice；其它证明：other；
         */
        type?: {
            name?: "certificate" | "kill" | "nucleic_acid" | "declaration_form" | "release_notice" | "other";
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
     * 商品批次信息表commodityBatch
     */
    export interface shangpinpicixinxibiaocommodityBatch {
        /**
         * 每批次实际重量
         */
        actualWeight?: string;
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 检验检疫证明证书编号
         */
        certificateNo?: string;
        /**
         * 检验检疫生产批次号
         */
        checkProductionBatchNumber?: string;
        /**
         * 流通数据列表
         */
        codeCirculationVos?: serviceType.zhuisumaliutongxinxibiaotraceCodeCirculation[];
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 商品名称ID
         */
        commodityNameId?: number; // int64
        /**
         * 商品类型
         */
        commodityType?: string;
        /**
         * 商品类型ID
         */
        commodityTypeId?: number; // int64
        /**
         * 收货人
         */
        consignee?: string;
        /**
         * 合同ID
         */
        contractId?: number; // int64
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 合同号
         */
        contractNo?: string;
        /**
         * 输出国家或地区
         */
        countryArea?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 客户ID
         */
        customerId?: number; // int64
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 入境日期
         */
        entryDate?: string; // date-time
        /**
         * 入境口岸
         */
        entryPort?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 流入类型：省市：city；口岸：port；
         */
        inflowType?: {
            name?: "city" | "port";
            disName?: string;
        };
        /**
         * 是否港澳免检：是：y；否：n；
         */
        inspectionExemption?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 生产日期
         */
        manufactureDate?: string; // date-time
        /**
         * 报检数/重量
         */
        numberWight?: string;
        /**
         * 产地来源：进口：imports；国产：domestic
         */
        origin?: {
            name?: "imports" | "domestic";
            disName?: string;
        };
        /**
         * 包装规格
         */
        packageSpecifications?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 产品HS编码
         */
        productHsNumber?: string;
        /**
         * 产品名称
         */
        productName?: string;
        /**
         * 产品分类大类
         */
        productType?: string;
        /**
         * 生产批次号
         */
        productionBatchNumber?: string;
        /**
         * 其他信息
         */
        remark?: string;
        /**
         * 保质期（月）
         */
        shelfLife?: number; // int32
        /**
         * 来源
         */
        source?: string;
        /**
         * 储存类型：冷藏：cold_storage；冷冻：freezing；
         */
        storageType?: {
            name?: "cold_storage" | "freezing";
            disName?: string;
        };
        /**
         * 供应商
         */
        supplier?: string;
        /**
         * 流转总量 KG
         */
        totalTurnover?: string;
        /**
         * 包装种类及数量
         */
        typeQuantity?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 提/运单号
         */
        waybillNo?: string;
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
     * 政策法规policy
     */
    export interface zhengcefaguipolicy {
        /**
         * 文件地址
         */
        address?: string;
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
         * 文件后缀
         */
        suffix?: string;
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
     * 追溯码流通信息表traceCodeCirculation
     */
    export interface zhuisumaliutongxinxibiaotraceCodeCirculation {
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 出库操作人员
         */
        deliveryOperater?: string;
        /**
         * 出库时间
         */
        deliveryTime?: string; // date-time
        /**
         * 配送车牌号码
         */
        distributionCarNumber?: string;
        /**
         * 配送驾驶员
         */
        distributionDriver?: string;
        /**
         * 配送驾驶员手机号码
         */
        distributionPhone?: string;
        /**
         * 配送温度
         */
        distributionTemperature?: string;
        /**
         * 文件列表
         */
        files?: serviceType.shangpinpicifujiancommodityBatchFile[];
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 货主经营地址
         */
        ownerAddress?: string;
        /**
         * 货主负责人
         */
        ownerMaster?: string;
        /**
         * 货主名称
         */
        ownerName?: string;
        /**
         * 货主手机号
         */
        ownerPhone?: string;
        /**
         * 收货方地址
         */
        receiveAddress?: string;
        /**
         * 收货方负责人
         */
        receiveMaster?: string;
        /**
         * 收货方名称
         */
        receiveName?: string;
        /**
         * 收货方手机号
         */
        receivePhone?: string;
        /**
         * 库存温度
         */
        storageTemperature?: string;
        /**
         * 库存仓库名称
         */
        storageWarehouseName?: string;
        /**
         * 追溯码
         */
        traceCode?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 入库操作人员
         */
        warehouseOperater?: string;
        /**
         * 入库时间
         */
        warehouseTime?: string; // date-time
    }
}
