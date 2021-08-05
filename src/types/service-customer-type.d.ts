declare namespace serviceType {
    /**
     * AppLoginVo
     */
    export interface AppLoginVo {
        appUid?: number; // int64
        code?: string;
        resourceCodes?: string[];
        roleCodes?: string[];
    }
    namespace CancelUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace EndUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * Enum
     */
    export interface Enum {
    }
    namespace GetUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfkehuxinxibiaocustomer;
        }
    }
    namespace GetUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfhetongxinxibiaocontractMessage;
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
    namespace QueryCustomerDeliveryAddressUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfkehupeisongdizhibiaocustomerDeliveryAddress;
        }
    }
    namespace QueryCustomerUserListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfkehuzhanghaoxinxibiaocustomerUser;
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
    namespace QueryUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfhetongxinxibiaocontractMessage;
        }
    }
    namespace QueryUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfkehuxinxibiaocustomer;
        }
    }
    namespace QueryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfxiansuokehubiaoclueCustomer;
        }
    }
    namespace RemoveUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SubmitUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UnwindUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateStatusUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateStatusUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UploadUsingPOST7 {
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
     * 合同附件表contractFile
     */
    export interface hetongfujianbiaocontractFile {
        /**
         * 文件地址
         */
        address?: string;
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
     * 合同计费信息contractChargin
     */
    export interface hetongjifeixinxicontractChargin {
        /**
         * 计费方式
         */
        billingType?: string;
        /**
         * 合同ID
         */
        contractId?: number; // int64
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 费用类型
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
         * 备注
         */
        remark?: string;
        /**
         * 计费单位
         */
        unitName?: string;
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
     * 合同信息表contractMessage
     */
    export interface hetongxinxibiaocontractMessage {
        /**
         * 预付款
         */
        advanceCharge?: string;
        /**
         * 保证金
         */
        bond?: string;
        /**
         * 计费信息list
         */
        chargins?: serviceType.hetongjifeixinxicontractChargin[];
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 合同名称
         */
        contractNamme?: string;
        /**
         * 合同编号
         */
        contractNumber?: string;
        /**
         * 合同期限
         */
        contractPeriod?: string;
        /**
         * 合同期限类型：年：year；月：month；日：day；
         */
        contractPeriodType?: {
            name?: "year" | "month" | "day";
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
         * 客户ID
         */
        customerId?: number; // int64
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 生效日期
         */
        effectiveDate?: string; // date-time
        /**
         * 失效日期
         */
        expirationDay?: string; // date-time
        /**
         * 到期提醒（提前多少天）
         */
        expirationReminder?: string;
        /**
         * 合同附件信息list
         */
        files?: serviceType.hetongfujianbiaocontractFile[];
        /**
         * 招商专员
         */
        hctd?: number; // int64
        /**
         * 招商专员名称
         */
        hctdName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 原合同编号
         */
        originalContractNo?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 合同续签时间
         */
        renewalTime?: string; // date-time
        /**
         * 免租天数
         */
        rentFreeDay?: string;
        /**
         * 减免租金
         */
        rentReduction?: string;
        /**
         * 结算初期
         */
        settlementInitialStage?: string;
        /**
         * 结算末期
         */
        settlementLate?: string;
        /**
         * 合同签订日期
         */
        signDate?: string; // date-time
        /**
         * 合同状态：已生效：effective；已到期：expired；未生效：ineffective；已作废：invalid；待提交：wait_submit；已终止：end；
         */
        status?: {
            name?: "effective" | "expired" | "ineffective" | "invalid" | "wait_submit" | "end";
            disName?: string;
        };
        /**
         * 合同类型：包仓：whole；零仓：scattered；
         */
        type?: {
            name?: "whole" | "scattered";
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
         * 仓库类型：急冻仓：frozen；冷冻仓：freezer；
         */
        warehouseType?: {
            name?: "frozen" | "freezer";
            disName?: string;
        };
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
     * 接口统一返回实体OfListOf合同信息表contractMessage
     */
    export interface jiekoutongyifanhuishitiOfListOfhetongxinxibiaocontractMessage {
        /**
         * 具体数据对象
         */
        data?: serviceType.hetongxinxibiaocontractMessage[];
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
     * 接口统一返回实体OfListOf客户配送地址表customerDeliveryAddress
     */
    export interface jiekoutongyifanhuishitiOfListOfkehupeisongdizhibiaocustomerDeliveryAddress {
        /**
         * 具体数据对象
         */
        data?: serviceType.kehupeisongdizhibiaocustomerDeliveryAddress[];
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
     * 接口统一返回实体OfListOf客户信息表customer
     */
    export interface jiekoutongyifanhuishitiOfListOfkehuxinxibiaocustomer {
        /**
         * 具体数据对象
         */
        data?: serviceType.kehuxinxibiaocustomer[];
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
     * 接口统一返回实体OfListOf客户账号信息表customerUser
     */
    export interface jiekoutongyifanhuishitiOfListOfkehuzhanghaoxinxibiaocustomerUser {
        /**
         * 具体数据对象
         */
        data?: serviceType.kehuzhanghaoxinxibiaocustomerUser[];
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
     * 接口统一返回实体OfListOf线索客户表clueCustomer
     */
    export interface jiekoutongyifanhuishitiOfListOfxiansuokehubiaoclueCustomer {
        /**
         * 具体数据对象
         */
        data?: serviceType.xiansuokehubiaoclueCustomer[];
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
     * 接口统一返回实体Of合同信息表contractMessage
     */
    export interface jiekoutongyifanhuishitiOfhetongxinxibiaocontractMessage {
        /**
         * 具体数据对象
         */
        data?: serviceType.hetongxinxibiaocontractMessage;
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
     * 接口统一返回实体Of客户信息表customer
     */
    export interface jiekoutongyifanhuishitiOfkehuxinxibiaocustomer {
        /**
         * 具体数据对象
         */
        data?: serviceType.kehuxinxibiaocustomer;
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
     * 客户附件表customerFile
     */
    export interface kehufujianbiaocustomerFile {
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
         * 客户ID
         */
        customerId?: number; // int64
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
         * 类型：营业执照：license；身份证正面：id_card_positive；身份证反面：id_card_other_side
         */
        type?: {
            name?: "LICENSE" | "ID_CARD_POSITIVE" | "ID_CARD_OTHER_SIDE" | "MERCHANT_IMG" | "COMMODITY_IMG";
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
     * 客户配送地址表customerDeliveryAddress
     */
    export interface kehupeisongdizhibiaocustomerDeliveryAddress {
        /**
         * 地址详情
         */
        addressDetail?: string;
        /**
         * 区
         */
        area?: string;
        /**
         * 市
         */
        city?: string;
        /**
         * 联系人
         */
        contacts?: string;
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
         * 是否默认：是：y；否：n；
         */
        defaultType?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 身份证号码
         */
        idCard?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 省
         */
        province?: string;
        /**
         * 电话号码
         */
        telephone?: string;
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
     * 客户信息表customer
     */
    export interface kehuxinxibiaocustomer {
        /**
         * 经营地址
         */
        address?: string;
        /**
         * 银行账号
         */
        bankAccount?: string;
        /**
         * 经营范围
         */
        businessScope?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 统一信用代码
         */
        creditCode?: string;
        /**
         * 帐号信息
         */
        customerUser?: serviceType.kehuzhanghaoxinxibiaocustomerUser;
        /**
         * 开户银行
         */
        depositBank?: string;
        /**
         * 附件信息
         */
        files?: serviceType.kehufujianbiaocustomerFile[];
        /**
         * 客户分组
         */
        groupName?: {
            name?: "bao_cang" | "ling_cang";
            disName?: string;
        };
        /**
         * 招商专员
         */
        hctd?: number; // int64
        /**
         * 招商专员名称
         */
        hctdName?: string;
        /**
         * 状态变更记录
         */
        histories?: serviceType.kehuzhuangtaibiangengbiaocustomerStatusHistory[];
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 身份证
         */
        idCard?: string;
        /**
         * 法人/负责人
         */
        legalPerson?: string;
        /**
         * 客户名称
         */
        name?: string;
        /**
         * 逾期天数
         */
        overdueDay?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 注册时间
         */
        registerTime?: string; // date-time
        /**
         * 备注
         */
        remark?: string;
        /**
         * 客户状态：正常：normal；停用：stop；未签单：not_signed；合同过期：contract_expired；锁仓：lock_up
         */
        status?: {
            name?: "normal" | "stop" | "not_signed" | "contract_expired" | "lock_up";
            disName?: string;
        };
        /**
         * 电话号码
         */
        telephone?: string;
        /**
         * 客户身份
         */
        type?: {
            name?: "enterprise" | "personal";
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
     * 客户账号信息表customerUser
     */
    export interface kehuzhanghaoxinxibiaocustomerUser {
        /**
         * 子帐号数量
         */
        childAccountsNum?: number; // int32
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
         * ID
         */
        id?: number; // int64
        /**
         * 账号
         */
        loginName?: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 账号状态：启用：y；停用：n；
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 账号类型：主账号：master；子账号：child
         */
        type?: {
            name?: "mainAccount" | "subAccount";
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
     * 客户状态变更表customerStatusHistory
     */
    export interface kehuzhuangtaibiangengbiaocustomerStatusHistory {
        /**
         * 变更时间
         */
        changeTime?: string; // date-time
        /**
         * 客户ID
         */
        customerId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 客户名称
         */
        name?: string;
        /**
         * 操作人
         */
        operator?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 客户状态：正常：normal；停用：stop；未签单：not_signed；合同过期：contract_expired；锁仓：lock_up
         */
        status?: {
            name?: "normal" | "stop" | "not_signed" | "contract_expired" | "lock_up";
            disName?: string;
        };
    }
    /**
     * 线索客户表clueCustomer
     */
    export interface xiansuokehubiaoclueCustomer {
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 状态
         */
        status?: {
            name?: "not_contacted" | "contacted";
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
         * 访问时间
         */
        visitTime?: string; // date-time
        /**
         * 微信号
         */
        weChat?: string;
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
}
