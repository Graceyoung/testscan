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
    namespace ArriveConfirmationUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace AssignmentByBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace AssignmentUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOftiaocangshangpinpicixinxibiaotransferCommodityBatch;
        }
    }
    namespace AssignmentWarehouseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace BatchDeleteUsingPOST7 {
        namespace Parameters {
            export type ids = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            ids: serviceType.BatchDeleteUsingPOST7.Parameters.ids;
        }
    }
    namespace BatchRelationNumberUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace BatchRelationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace ChangeLocationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ChangeNumOrOwnerUsingPOST7 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.ChangeNumOrOwnerUsingPOST7.Parameters.param;
        }
    }
    namespace ChangeNumUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ChangeOwnerUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ChangeTaskBacthInfoUsingPOST7 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.ChangeTaskBacthInfoUsingPOST7.Parameters.param;
        }
    }
    namespace ChangeTaskBacthUsingPOST7 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.ChangeTaskBacthUsingPOST7.Parameters.param;
        }
    }
    namespace CheckLocationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfboolean;
        }
    }
    namespace CheckRealTimeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfboolean;
        }
    }
    namespace ConfirmForAppUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ConfirmTransferUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace CountAreaUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfWarehouseCountVo;
        }
    }
    namespace CountBoardUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfWarehouseCountVo;
        }
    }
    namespace CountByCustomerUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfCustomerStockCountVo;
        }
    }
    namespace CountCostUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfWarehouseExpenseCountVo;
        }
    }
    namespace CountCostUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfOtherExpenseCountVo;
        }
    }
    namespace CountUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfTaskCountVo;
        }
    }
    namespace CountWaitDealUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOflong;
        }
    }
    namespace CurrentUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace CurrentUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace CurrentUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * CustomerStockCountVo
     */
    export interface CustomerStockCountVo {
        /**
         * 批次数量
         */
        batchCount?: number; // int32
        /**
         * 合同数量
         */
        contractCount?: number; // int32
        /**
         * 库存件数
         */
        numbers?: number; // int32
        /**
         * 库存总重(吨)
         */
        totalWeight?: number;
    }
    namespace DealUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DealUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteBatchUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteBatchUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteExpenseUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteExpenseUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteExpenseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteOperatorUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteOperatorUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteOperatorUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteOperatorUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST103 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST111 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST119 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST127 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST135 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST143 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST151 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST159 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST167 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST175 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST71 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST79 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace DeleteUsingPOST95 {
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
    namespace ExportExcelUsingPOST31 {
        namespace Parameters {
            export type param = string;
        }
        export interface bodyParameters {
            param?: serviceType.ExportExcelUsingPOST31.Parameters.param;
        }
    }
    namespace FinishTaskUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace GetBatchLocationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukudanshangpincunchubiaodeliveryOrderCommodityStorage;
        }
    }
    namespace GetBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch;
        }
    }
    namespace GetBatchUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch;
        }
    }
    namespace GetBatchUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch;
        }
    }
    namespace GetBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch;
        }
    }
    namespace GetCommodityTypeVoUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfHomeCommodityTypeVo;
        }
    }
    namespace GetHistoryStatisticsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfInventoryStatisticsVo;
        }
    }
    namespace GetHomeOrderUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfHomeOrderVo;
        }
    }
    namespace GetPrintingVoUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfPrintingTransferVo;
        }
    }
    namespace GetPrintingVoUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfPrintingInventoryVo;
        }
    }
    namespace GetPrintingWarehouseVoUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfPrintingWarehouseVo;
        }
    }
    namespace GetStatisticsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfInventoryStatisticsVo;
        }
    }
    namespace GetStorageStatisticsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfStorageStatisticsVo;
        }
    }
    namespace GetUsingPOST103 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchurukufeiyongjiesuanbiaowarehouseExpense;
        }
    }
    namespace GetUsingPOST111 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfcangkuguanlibiaowarehouseManagement;
        }
    }
    namespace GetUsingPOST119 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukudanbiaowarehouseOrder;
        }
    }
    namespace GetUsingPOST127 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukujihuadanbiaowarehousePlan;
        }
    }
    namespace GetUsingPOST135 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfzucangshenqingbiaowarehouseRentalApplication;
        }
    }
    namespace GetUsingPOST143 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfhuojiaguanlibiaowarehouseShelf;
        }
    }
    namespace GetUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukujihuadanbiaodeliveryPlan;
        }
    }
    namespace GetUsingPOST151 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfcangkuleixingbiaowarehouseType;
        }
    }
    namespace GetUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfpankurenwubiaoinventoryTask;
        }
    }
    namespace GetUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfqitafeiyongjiesuanbiaootherExpense;
        }
    }
    namespace GetUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfyuetaiguanlibiaorailwayPlatform;
        }
    }
    namespace GetUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpinpinleibiaospuCategory;
        }
    }
    namespace GetUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpinbiaoSpuVo;
        }
    }
    namespace GetUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfxitongpeizhisystemConfig;
        }
    }
    namespace GetUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukudanbiaodeliveryOrder;
        }
    }
    namespace GetUsingPOST71 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOftiaocangshangpinpicixinxibiaotransferCommodityBatch;
        }
    }
    namespace GetUsingPOST79 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOftiaocangkuweixinxitransferStorage;
        }
    }
    namespace GetUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOftiaocangdanbiaotransferWarehouse;
        }
    }
    namespace GetUsingPOST95 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfkuquguanlibiaowarehouseArea;
        }
    }
    namespace GetWarehouseVoUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfHomeWarehouseVo;
        }
    }
    namespace HandleConfirmationUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * HomeCommodityRankVo
     */
    export interface HomeCommodityRankVo {
        /**
         * 商品类别名称
         */
        commodityTypeName?: string;
        /**
         * 总量（吨）
         */
        weight?: number;
    }
    /**
     * HomeCommodityTypeVo
     */
    export interface HomeCommodityTypeVo {
        /**
         * 前十排名
         */
        ranks?: serviceType.HomeCommodityRankVo[];
        /**
         * 总库存
         */
        totalNum?: number;
    }
    /**
     * HomeCompletedJobVo
     */
    export interface HomeCompletedJobVo {
        /**
         * 出库单
         */
        deliveryOrderCount?: number; // int64
        /**
         * 出库计划单数量
         */
        deliveryPlanCount?: number; // int64
        /**
         * 盘库任务数量
         */
        inventoryTaskCount?: number; // int64
        /**
         * 库内移位任务数量
         */
        transferTaskCount?: number; // int64
        /**
         * 入库单数量
         */
        warehouseOrderCount?: number; // int64
        /**
         * 入库计划单数量
         */
        warehousePlanCount?: number; // int64
    }
    /**
     * HomeCostTypeRankVo
     */
    export interface HomeCostTypeRankVo {
        /**
         * 费用类型
         */
        costType?: string;
        /**
         * 费用
         */
        totalCost?: number;
    }
    /**
     * HomeCostTypeTrendVo
     */
    export interface HomeCostTypeTrendVo {
        /**
         * 费用类型
         */
        costType?: string;
        /**
         * 时间点
         */
        timeStr?: string;
        /**
         * 总量
         */
        totalCost?: number;
    }
    /**
     * HomeOrderCustomerVo
     */
    export interface HomeOrderCustomerVo {
        /**
         * 客户ID
         */
        customerId?: number; // int64
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 总重
         */
        total?: number;
    }
    /**
     * HomeOrderVo
     */
    export interface HomeOrderVo {
        /**
         * 排行数据
         */
        ranks?: serviceType.HomeOrderCustomerVo[];
        /**
         * 趋势图数据
         */
        trendVos?: serviceType.HomeTrendVo[];
    }
    /**
     * HomeTrendVo
     */
    export interface HomeTrendVo {
        /**
         * 时间点
         */
        timeStr?: string;
        /**
         * 总量
         */
        totalWeight?: number;
    }
    /**
     * HomeWaitJobVo
     */
    export interface HomeWaitJobVo {
        /**
         * 出库单
         */
        deliveryOrderCount?: number; // int64
        /**
         * 出库计划单数量
         */
        deliveryPlanCount?: number; // int64
        /**
         * 盘库任务数量
         */
        inventoryTaskCount?: number; // int64
        /**
         * 库内移位任务数量
         */
        transferTaskCount?: number; // int64
        /**
         * 入库单数量
         */
        warehouseOrderCount?: number; // int64
        /**
         * 入库计划单数量
         */
        warehousePlanCount?: number; // int64
    }
    /**
     * HomeWarehouseVo
     */
    export interface HomeWarehouseVo {
        /**
         * 仓库容量
         */
        capacoty?: number; // int32
        /**
         * 占比
         */
        proportion?: number; // int32
        /**
         * 仓库使用量
         */
        useCount?: number; // int32
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    namespace ImportDataUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ImportExcelUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace ImportExcelUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace InvalidUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace InvalidUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * InventoryHistoryVo
     */
    export interface InventoryHistoryVo {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 合同ID
         */
        contractId?: number; // int64
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 合同编号
         */
        contractNumber?: string;
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 入库件数
         */
        numbers?: number; // int32
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 入库总重（吨）
         */
        weight?: number;
    }
    /**
     * InventoryStatisticsVo
     */
    export interface InventoryStatisticsVo {
        /**
         * 批次数
         */
        batchNumber?: number; // int32
        /**
         * 板数
         */
        boardNumber?: number; // int32
        /**
         * 件数
         */
        number?: number; // int32
        /**
         * 总重（吨）
         */
        weight?: number;
    }
    /**
     * InventorySummaryVo
     */
    export interface InventorySummaryVo {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 库存板数
         */
        boardNumber?: number; // int32
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 库存天数
         */
        days?: number; // int32
        /**
         * 库存件数
         */
        numbers?: number; // int32
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 库存总重（吨）
         */
        totalWeight?: number;
        /**
         * 仓库ID
         */
        warehouseIds?: string;
        /**
         * 仓库
         */
        warehouseName?: string;
    }
    /**
     * InventoryTaskJobVo
     */
    export interface InventoryTaskJobVo {
        /**
         * 板数
         */
        borads?: number; // int32
        /**
         * 是否被自己选择
         */
        isChoose?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 货架/库区ID
         */
        shelfAreaId?: number; // int64
        /**
         * 货架/库区编号
         */
        shelfAreaNo?: string;
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    /**
     * InventoryTaskOperatorJovVo
     */
    export interface InventoryTaskOperatorJovVo {
        /**
         * 板数
         */
        boardNumber?: number; // int32
        /**
         * 库位编号
         */
        locationNumbers?: string;
        /**
         * 货架/库区
         */
        shelfNo?: string;
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    /**
     * InventoryTaskStatisticsVo
     */
    export interface InventoryTaskStatisticsVo {
        /**
         * 客户盘库数量
         */
        customerCount?: number; // int64
        /**
         * 正在盘库数量
         */
        doingCount?: number; // int64
        /**
         * 已完成盘库数量
         */
        finishCount?: number; // int64
        /**
         * 单仓库盘库数量
         */
        warehouseCount?: number; // int64
    }
    namespace IsHaveStorageUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfboolean;
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
    /**
     * OtherExpenseCountVo
     */
    export interface OtherExpenseCountVo {
        /**
         * 已结算金额
         */
        settleCost?: number;
        /**
         * 总金额
         */
        totalCost?: number;
        /**
         * 未结清金额
         */
        unclearCost?: number;
        /**
         * 未结算金额
         */
        unsettleCost?: number;
    }
    namespace PrintUnpackTraceCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukudanshangpincunchubiaodeliveryOrderCommodityStorage;
        }
    }
    namespace PrintUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace PrintUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace PrintWholeBoardTraceCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukudanshangpincunchubiaodeliveryOrderCommodityStorage;
        }
    }
    /**
     * PrintingChildrenVo
     */
    export interface PrintingChildrenVo {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 库位号
         */
        localtionNumber?: string;
        /**
         * 库存件数
         */
        number?: number; // int32
        /**
         * 追溯码编号
         */
        traceCode?: string;
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    /**
     * PrintingInventoryVo
     */
    export interface PrintingInventoryVo {
        /**
         * 列表数据list
         */
        childrenVos?: serviceType.PrintingChildrenVo[];
        /**
         * 商品批次总数
         */
        commdityTotal?: number; // int32
        /**
         * 合同名称字符串
         */
        contractNames?: string;
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 任务期限
         */
        taskTerm?: string; // date-time
        /**
         * 库存板数
         */
        totalBoard?: number; // int32
        /**
         * 库存总件数
         */
        totalCount?: number; // int32
        /**
         * 仓库名称字符串
         */
        warehouseNames?: string;
    }
    /**
     * PrintingTransferChildrenVo
     */
    export interface PrintingTransferChildrenVo {
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 源库位编号
         */
        sourceLocaltionNumber?: string;
        /**
         * 源仓库
         */
        sourceWarehouse?: string;
        /**
         * 目标库位编号
         */
        targetLocaltionNumber?: string;
        /**
         * 目标库位追溯码
         */
        targetTraceCode?: string;
        /**
         * 目标仓库
         */
        targetWarehouse?: string;
        /**
         * 源库位追溯码
         */
        traceCode?: string;
        /**
         * 调仓件数
         */
        transferNumbers?: number; // int32
    }
    /**
     * PrintingTransferVo
     */
    export interface PrintingTransferVo {
        /**
         * 任务单列表数据
         */
        childrenVos?: serviceType.PrintingTransferChildrenVo[];
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 调仓总件数
         */
        number?: number; // int32
        /**
         * 作业人员名称
         */
        workerName?: string;
    }
    /**
     * PrintingWarehouseVo
     */
    export interface PrintingWarehouseVo {
        /**
         * 列表数据list
         */
        childrenVos?: serviceType.PrintingChildrenVo[];
        /**
         * 打印时间
         */
        printingTime?: string; // date-time
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    namespace QueryBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch;
        }
    }
    namespace QueryBatchUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchurukudanshangpinpicixinxibiaowarehouseExpenseOrderCommodityBatch;
        }
    }
    namespace QueryBatchUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfWarehouseInOutBatchVo;
        }
    }
    namespace QueryBatchUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch;
        }
    }
    namespace QueryBatchUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch;
        }
    }
    namespace QueryBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch;
        }
    }
    namespace QueryBoardListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfWarehouseBoardVo;
        }
    }
    namespace QueryBoardNoUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfstring;
        }
    }
    namespace QueryCompletedUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfHomeCompletedJobVo;
        }
    }
    namespace QueryCostTypeRankUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfHomeCostTypeRankVo;
        }
    }
    namespace QueryCostTypeTrendUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfHomeCostTypeTrendVo;
        }
    }
    namespace QueryCustomerDeliveryAddressUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfkehupeisongdizhibiaocustomerDeliveryAddress;
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
    namespace QueryErrorDataUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankukuweicunchuxinxiinventoryTaskStorage;
        }
    }
    namespace QueryErrorListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankurenwushangpinpicixinxibiaoinventoryTaskCommodityBatch;
        }
    }
    namespace QueryErrorLocationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfstring;
        }
    }
    namespace QueryErrorTraceCodeListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankukuweicunchuxinxiinventoryTaskStorage;
        }
    }
    namespace QueryExpenseListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfhetongjifeixinxicontractChargin;
        }
    }
    namespace QueryExpenseUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchurukufeiyongxinxibiaowarehouseExpenseOrderExpense;
        }
    }
    namespace QueryExpenseUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukufeiyongxinxibiaowarehouseOrderExpense;
        }
    }
    namespace QueryExpenseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukufeiyongxinxibiaodeliveryOrderExpense;
        }
    }
    namespace QueryForDeliveryOrderUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinkucunxinxibiaocommodityStock;
        }
    }
    namespace QueryForDeliveryPlanUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinkucunxinxibiaocommodityStock;
        }
    }
    namespace QueryForInventoryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinkucunxinxibiaocommodityStock;
        }
    }
    namespace QueryForTransferUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinkucunxinxibiaocommodityStock;
        }
    }
    namespace QueryForUserUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfTransferTaskForUserVo;
        }
    }
    namespace QueryHistoryStorageUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpincunchuriliushuibiaocommodityStorageDayHistory;
        }
    }
    namespace QueryHistoryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfInventorySummaryVo;
        }
    }
    namespace QueryJobForWarehouseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfInventoryTaskJobVo;
        }
    }
    namespace QueryJobVoUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfInventoryTaskOperatorJovVo;
        }
    }
    namespace QueryLocationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfstring;
        }
    }
    namespace QueryLocationUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace QueryNotInIdsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrenyuanguanlitaskPeople;
        }
    }
    namespace QueryNotLoginUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfcangkuleixingbiaowarehouseType;
        }
    }
    namespace QueryNotRelationTraceCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfstring;
        }
    }
    namespace QueryOperatorUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfqitafeiyongjiesuanzuoyerenyuanxinxibiaootherExpenseOperator;
        }
    }
    namespace QueryOperatorUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchurukufeiyongjiesuanzuoyerenyuanxinxibiaowarehouseExpenseOperator;
        }
    }
    namespace QueryOperatorUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukuzuoyerenyuanxinxibiaowarehouseOrderOperator;
        }
    }
    namespace QueryOperatorUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukuzuoyerenyuanxinxibiaodeliveryOrderOperator;
        }
    }
    namespace QueryOrderNumberListUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukujihuadanbiaowarehousePlan;
        }
    }
    namespace QueryOrderNumberListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanbiaowarehouseOrder;
        }
    }
    namespace QueryOrderUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfWarehouseInOutOrderVo;
        }
    }
    namespace QueryPrintBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch;
        }
    }
    namespace QueryRecordListUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukujihuadanchulijilubiaodeliveryPlanDealRecord;
        }
    }
    namespace QueryRecordListUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchurukufeiyongjiesuancaozuojilubiaowarehouseExpenseRecord;
        }
    }
    namespace QueryRecordListUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanchulijilubiaowarehouseOrderDealRecord;
        }
    }
    namespace QueryRecordListUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukujihuadanchulijilubiaowarehousePlanDealRecord;
        }
    }
    namespace QueryRecordListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukudanchulijilubiaodeliveryOrderDealRecord;
        }
    }
    namespace QueryRecordUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankuchulijiluinventoryTaskDealRecord;
        }
    }
    namespace QueryRelationLocationNumberListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanshangpincunchubiaowarehouseOrderCommodityStorage;
        }
    }
    namespace QueryRelationNumberListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanshangpincunchubiaowarehouseOrderCommodityStorage;
        }
    }
    namespace QueryShelfUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace QuerySmallBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch;
        }
    }
    namespace QuerySmallBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch;
        }
    }
    namespace QueryStatusListUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankukuweicunchuxinxiinventoryTaskStorage;
        }
    }
    namespace QueryStorageUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace QueryTaskGroupUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace QueryTaskGroupUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace QueryTaskGroupUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace QueryTaskGroupUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace QueryTraceCodeDetailUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanshangpincunchubiaowarehouseOrderCommodityStorage;
        }
    }
    namespace QueryTraceCodeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfstring;
        }
    }
    namespace QueryTreeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinpinleibiaospuCategory;
        }
    }
    namespace QueryUsingPOST103 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankurenwuzuoyerenyuanxinxibiaoinventoryTaskOperator;
        }
    }
    namespace QueryUsingPOST111 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfInventorySummaryVo;
        }
    }
    namespace QueryUsingPOST119 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankurenwubiaoinventoryTask;
        }
    }
    namespace QueryUsingPOST127 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfqitafeiyongjiesuanbiaootherExpense;
        }
    }
    namespace QueryUsingPOST135 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfyuetaiguanlibiaorailwayPlatform;
        }
    }
    namespace QueryUsingPOST143 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinpinleibiaospuCategory;
        }
    }
    namespace QueryUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshoukuanpeizhicollectionConfig;
        }
    }
    namespace QueryUsingPOST151 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinbiaoSpuVo;
        }
    }
    namespace QueryUsingPOST159 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrenwubiaotask;
        }
    }
    namespace QueryUsingPOST167 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzuoyefenzuguanlitaskGroup;
        }
    }
    namespace QueryUsingPOST175 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrenyuanguanlitaskPeople;
        }
    }
    namespace QueryUsingPOST183 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOftiaocangshangpinpicixinxibiaotransferCommodityBatch;
        }
    }
    namespace QueryUsingPOST191 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOftiaocangkuweixinxitransferStorage;
        }
    }
    namespace QueryUsingPOST199 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOftiaocangkuweixinxitransferStorage;
        }
    }
    namespace QueryUsingPOST207 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOftiaocangdanbiaotransferWarehouse;
        }
    }
    namespace QueryUsingPOST215 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfkuquguanlibiaowarehouseArea;
        }
    }
    namespace QueryUsingPOST223 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchurukufeiyongjiesuanbiaowarehouseExpense;
        }
    }
    namespace QueryUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpinkucunxinxibiaocommodityStock;
        }
    }
    namespace QueryUsingPOST231 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfcangkuguanlibiaowarehouseManagement;
        }
    }
    namespace QueryUsingPOST239 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukudanbiaowarehouseOrder;
        }
    }
    namespace QueryUsingPOST247 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfrukujihuadanbiaowarehousePlan;
        }
    }
    namespace QueryUsingPOST255 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfzucangshenqingbiaowarehouseRentalApplication;
        }
    }
    namespace QueryUsingPOST263 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfhuojiaguanlibiaowarehouseShelf;
        }
    }
    namespace QueryUsingPOST271 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfcangkuleixingbiaowarehouseType;
        }
    }
    namespace QueryUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace QueryUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfhetongxinxibiaocontractMessage;
        }
    }
    namespace QueryUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfkehuxinxibiaocustomer;
        }
    }
    namespace QueryUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukudanbiaodeliveryOrder;
        }
    }
    namespace QueryUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfchukujihuadanbiaodeliveryPlan;
        }
    }
    namespace QueryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfjifeidanweibillingUnit;
        }
    }
    namespace QueryUsingPOST71 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOffeiyongpeizhiexpenseConfig;
        }
    }
    namespace QueryUsingPOST79 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOffeiyongleixingexpenseType;
        }
    }
    namespace QueryUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfpankurenwushangpinpicixinxibiaoinventoryTaskCommodityBatch;
        }
    }
    namespace QueryUsingPOST95 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfListOfInventoryHistoryVo;
        }
    }
    namespace QueryWaitUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfHomeWaitJobVo;
        }
    }
    namespace RejectUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RelationLocationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukudanshangpincunchubiaowarehouseOrderCommodityStorage;
        }
    }
    namespace RelationNumberUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfshangpincunchubiaocommodityStorage;
        }
    }
    namespace RelationNumberUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RemoveErrorDataUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace RevokeUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveAllUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveBatchUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukudanbiaowarehouseOrder;
        }
    }
    namespace SaveBatchUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukudanbiaodeliveryOrder;
        }
    }
    namespace SaveCustomerInventoryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfpankurenwubiaoinventoryTask;
        }
    }
    namespace SaveExpenseUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveExpenseUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveExpenseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveOperatorUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveOperatorUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveOperatorUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveOperatorUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveSmallBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveSmallBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST103 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST111 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchurukufeiyongjiesuanbiaowarehouseExpense;
        }
    }
    namespace SaveUsingPOST119 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST127 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukudanbiaowarehouseOrder;
        }
    }
    namespace SaveUsingPOST135 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukujihuadanbiaowarehousePlan;
        }
    }
    namespace SaveUsingPOST143 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukujihuadanbiaodeliveryPlan;
        }
    }
    namespace SaveUsingPOST151 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST159 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST23 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.SaveUsingPOST23.Parameters.param;
        }
    }
    namespace SaveUsingPOST31 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.SaveUsingPOST31.Parameters.param;
        }
    }
    namespace SaveUsingPOST39 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfqitafeiyongjiesuanbiaootherExpense;
        }
    }
    namespace SaveUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukudanbiaodeliveryOrder;
        }
    }
    namespace SaveUsingPOST71 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.SaveUsingPOST71.Parameters.param;
        }
    }
    namespace SaveUsingPOST79 {
        namespace Parameters {
            export type param = string;
        }
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
        export interface bodyParameters {
            param: serviceType.SaveUsingPOST79.Parameters.param;
        }
    }
    namespace SaveUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveUsingPOST95 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SaveWarehouseInventoryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfpankurenwubiaoinventoryTask;
        }
    }
    namespace SignErrorUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SignLoseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SignNormalUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SignNullUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace StatisticsUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfInventoryTaskStatisticsVo;
        }
    }
    /**
     * StorageStatisticsVo
     */
    export interface StorageStatisticsVo {
        /**
         * 合同数
         */
        contractCount?: number; // int32
        /**
         * 客户数
         */
        customerCount?: number; // int32
        /**
         * 总件数
         */
        number?: number; // int32
        /**
         * 总重量（吨）
         */
        weight?: number;
    }
    namespace StoreUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SubmitUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SubmitUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SubmitUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace SubmitUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * TaskCountVo
     */
    export interface TaskCountVo {
        /**
         * 任务数
         */
        num?: number; // int64
        /**
         * 任务类型
         */
        type?: {
            name?: "inventory" | "transfer" | "in_tally" | "out_tally";
            disName?: string;
        };
    }
    /**
     * TransferTaskForUserVo
     */
    export interface TransferTaskForUserVo {
        /**
         * 子节点列表
         */
        detailVos?: serviceType.tiaocangzuoyerenyuangongzuoxiangqingbiaotransferOperatorDetail[];
        /**
         * 任务Id
         */
        taskId?: number; // int64
        /**
         * 调仓单号
         */
        transferNo?: string;
    }
    namespace UpdateBatchUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateBatchUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfrukudanbiaowarehouseOrder;
        }
    }
    namespace UpdateBatchUsingPOST31 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateBatchUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukudanbiaodeliveryOrder;
        }
    }
    namespace UpdateCustomerInventoryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateExpenseUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateExpenseUsingPOST23 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateExpenseUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateStockDataUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST103 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST111 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST119 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST127 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST135 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
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
    namespace UpdateUsingPOST47 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST55 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST63 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfchukudanbiaodeliveryOrder;
        }
    }
    namespace UpdateUsingPOST71 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST79 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST87 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateUsingPOST95 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace UpdateWarehouseInventoryUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
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
    namespace VUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace VUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * WarehouseBoardVo
     */
    export interface WarehouseBoardVo {
        /**
         * 板号
         */
        boardNo?: string;
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
         * 层ID
         */
        layerId?: number; // int64
        /**
         * 库位编号(从上到下组合起来)
         */
        locationNumber?: string;
        /**
         * 货架ID
         */
        shelfId?: number; // int64
        /**
         * 是否存在库存
         */
        status?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 库存详情
         */
        storageVo?: serviceType.shangpincunchubiaocommodityStorage;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
    }
    /**
     * WarehouseCountVo
     */
    export interface WarehouseCountVo {
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 库位编号
         */
        number?: string;
        /**
         * 剩余板数
         */
        surplusNumber?: number; // int64
        /**
         * 总板数
         */
        totalNumber?: number; // int64
        /**
         * 使用板数
         */
        useNumber?: number; // int64
    }
    /**
     * WarehouseExpenseCountVo
     */
    export interface WarehouseExpenseCountVo {
        /**
         * 已结算金额
         */
        settleCost?: number;
        /**
         * 总金额
         */
        totalCost?: number;
        /**
         * 未结清金额
         */
        unclearCost?: number;
        /**
         * 未结算金额
         */
        unsettleCost?: number;
    }
    /**
     * WarehouseInOutBatchVo
     */
    export interface WarehouseInOutBatchVo {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 合同ID
         */
        contractId?: number; // int64
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 合同编号
         */
        contractNumber?: string;
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 单号
         */
        orderNumber?: string;
        /**
         * 出入库时间
         */
        time?: string; // date-time
        /**
         * 总重（吨）
         */
        totalWeight?: number;
        /**
         * 类型
         */
        type?: {
            name?: "in" | "out";
            disName?: string;
        };
    }
    /**
     * WarehouseInOutOrderContractVo
     */
    export interface WarehouseInOutOrderContractVo {
        /**
         * 合同ID
         */
        contractId?: number; // int64
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 合同编号
         */
        contractNumber?: string;
    }
    /**
     * WarehouseInOutOrderVo
     */
    export interface WarehouseInOutOrderVo {
        /**
         * 合同IDs字符串
         */
        contractIds?: string;
        /**
         * 合同相关信息
         */
        contractVos?: serviceType.WarehouseInOutOrderContractVo[];
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 出入库单号
         */
        orderNumber?: string;
        /**
         * 出入库时间
         */
        time?: string; // date-time
        /**
         * 总重（吨）
         */
        totalWeight?: number;
        /**
         * 出入库类型
         */
        type?: {
            name?: "in" | "out";
            disName?: string;
        };
    }
    namespace WrittenOffUsingPOST15 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    namespace WrittenOffUsingPOST7 {
        namespace Responses {
            export type $200 = serviceType.jiekoutongyifanhuishitiOfstring;
        }
    }
    /**
     * 仓库管理表warehouseManagement
     */
    export interface cangkuguanlibiaowarehouseManagement {
        /**
         * 是否存在库区
         */
        boolStatus?: {
            name?: "y" | "n";
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
         * 名称
         */
        name?: string;
        /**
         * 描述
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
        /**
         * 仓库种类：货架仓：shelf；平面仓：plane；
         */
        warehouseCategory?: {
            name?: "shelf" | "plane";
            disName?: string;
        };
        /**
         * 仓库号
         */
        warehouseNo?: string;
        /**
         * 仓库类型ID
         */
        warehouseTypeId?: number; // int64
        /**
         * 仓库类型名称
         */
        warehouseTypeName?: string;
    }
    /**
     * 仓库类型表warehouseType
     */
    export interface cangkuleixingbiaowarehouseType {
        /**
         * 编号
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
         * 状态：启用：y；停用：n；逻辑删除：del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
        /**
         * 仓库温度
         */
        temperature?: string;
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
     * 出库单表deliveryOrder
     */
    export interface chukudanbiaodeliveryOrder {
        /**
         * 实际出库板数
         */
        boardNumbers?: number; // int32
        /**
         * 货主经营地址
         */
        consignorBusinessAddress?: string;
        /**
         * 货主负责人
         */
        consignorChargePerson?: string;
        /**
         * 货主名称
         */
        consignorName?: string;
        /**
         * 货主手机号码
         */
        consignorPhone?: string;
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人ID
         */
        contactsId?: number; // int64
        /**
         * 联系人身份证
         */
        contactsIdCard?: string;
        /**
         * 联系人手机号
         */
        contactsPhone?: string;
        /**
         * 计划单合同信息
         */
        contractRelationList?: serviceType.chukudanhetongguanlianbiaodeliveryOrderContractRelation[];
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
         * 处理时间
         */
        dealTime?: string; // date-time
        /**
         * 出库时间
         */
        deliveryTime?: string; // date-time
        /**
         * 驾驶员
         */
        driver?: string;
        /**
         * 驾驶员身份证号码
         */
        driverIdCard?: string;
        /**
         * 驾驶员车牌号码
         */
        driverLicensePlate?: string;
        /**
         * 驾驶员手机号码
         */
        driverPhone?: string;
        /**
         * 预入库件数
         */
        expectNumbers?: number; // int32
        /**
         * 预入库总重(吨)
         */
        expectTotalWeight?: number;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 实际出库件数
         */
        numbers?: number; // int32
        /**
         * 操作状态：未提交：wait_submit；已提交：submit；打印：print；确认出库：current；作废：invalid；
         */
        operateStatus?: {
            name?: "wait_submit" | "submit" | "current" | "invalid";
            disName?: string;
        };
        /**
         * 出库单号
         */
        orderNumber?: string;
        /**
         * 出库计划单号
         */
        planNumber?: string;
        /**
         * 计划时间
         */
        planTime?: string; // date-time
        /**
         * 月台信息
         */
        railwayPlatformId?: number; // int64
        /**
         * 操作记录详情
         */
        recordList?: serviceType.chukudanchulijilubiaodeliveryOrderDealRecord[];
        /**
         * 备注
         */
        remark?: string;
        /**
         * 配送地址
         */
        shippingAddress?: string;
        /**
         * 数据状态：未提交：wait_submit；未出库：not_delivery；已出库：delivery；
         */
        status?: {
            name?: "wait_submit" | "not_delivery" | "delivery" | "invalid";
            disName?: string;
        };
        /**
         * 实际出库总重(吨)
         */
        totalWeight?: number;
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
     * 出库单处理记录表deliveryOrderDealRecord
     */
    export interface chukudanchulijilubiaodeliveryOrderDealRecord {
        /**
         * 处理时间
         */
        dealTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人名称
         */
        operatorName?: string;
        /**
         * 出库单ID
         */
        orderId?: number; // int64
        /**
         * 月台信息
         */
        railwayPlatformId?: number; // int64
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：未提交：wait_submit；已提交：submit；打印：print；确认出库：current；作废：invalid；
         */
        status?: {
            name?: "wait_submit" | "submit" | "print" | "current" | "invalid";
            disName?: string;
        };
    }
    /**
     * 出库单合同关联表deliveryOrderContractRelation
     */
    export interface chukudanhetongguanlianbiaodeliveryOrderContractRelation {
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * ID
         */
        id?: number; // int64
        /**
         * 出库单ID
         */
        orderId?: number; // int64
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
     * 出库单商品存储表deliveryOrderCommodityStorage
     */
    export interface chukudanshangpincunchubiaodeliveryOrderCommodityStorage {
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
         * 库位编号
         */
        locationNumber?: string;
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 出库单ID
         */
        orderId?: number; // int64
        /**
         * 追溯码
         */
        traceCode?: string;
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
        /**
         * 入库追溯码
         */
        warehouseTraceCode?: string;
    }
    /**
     * 出库单商品批次信息表deliveryOrderCommodityBatch
     */
    export interface chukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch {
        /**
         * 实际出库板数
         */
        actualBoardNumber?: number; // int32
        /**
         * 实际出库数
         */
        actualNumber?: number; // int32
        /**
         * 实际出库总量(吨)
         */
        actualTotalWeight?: number;
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 库存板数
         */
        boardNumber?: number; // int32
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
         * 合同ID
         */
        contractId?: number; // int64
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
         * 库存天数
         */
        dayStock?: number; // int32
        /**
         * 预出库板数
         */
        expectBoardNumber?: number; // int32
        /**
         * 预出库件数
         */
        expectNumbers?: number; // int32
        /**
         * 预出库总重(吨)
         */
        expectTotalWeight?: number;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 生产日期
         */
        manufactureDate?: string; // date-time
        /**
         * 库存件数
         */
        numbers?: number; // int32
        /**
         * 出库单ID
         */
        orderId?: number; // int64
        /**
         * 包装规格
         */
        packageSpecifications?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 库存总重(吨)
         */
        totalWeight?: number;
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
     * 出库费用信息表deliveryOrderExpense
     */
    export interface chukufeiyongxinxibiaodeliveryOrderExpense {
        /**
         * 计费方式
         */
        billingType?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 库存天数
         */
        dayStock?: number; // int32
        /**
         * 延误时长
         */
        delayLength?: string;
        /**
         * 费用配置ID
         */
        expenseConfigId?: number; // int64
        /**
         * 费用类型
         */
        expenseType?: string;
        /**
         * 费用类型ID
         */
        expenseTypeId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 费用名称
         */
        name?: string;
        /**
         * 出库单ID
         */
        orderId?: number; // int64
        /**
         * 人数
         */
        peopleNumber?: string;
        /**
         * 速查码
         */
        quickReferenceCode?: string;
        /**
         * 是否免租：是：y；否：n；
         */
        rentFree?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 总费用
         */
        totalCost?: number;
        /**
         * 出库总重
         */
        totalWeight?: number;
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
        /**
         * 出库板数
         */
        warehouseBoardNumber?: number; // int32
        /**
         * 出库件数
         */
        warehouseNumber?: number; // int32
    }
    /**
     * 出库计划单表deliveryPlan
     */
    export interface chukujihuadanbiaodeliveryPlan {
        /**
         * 货主经营地址
         */
        consignorBusinessAddress?: string;
        /**
         * 货主负责人
         */
        consignorChargePerson?: string;
        /**
         * 货主收货地址
         */
        consignorCityAddress?: string;
        /**
         * 货主名称
         */
        consignorName?: string;
        /**
         * 货主手机号码
         */
        consignorPhone?: string;
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人ID
         */
        contactsId?: number; // int64
        /**
         * 联系人身份证
         */
        contactsIdCard?: string;
        /**
         * 联系人手机号
         */
        contactsPhone?: string;
        /**
         * 计划单合同信息
         */
        contractRelationList?: serviceType.chukujihuadanhetongguanlianbiaodeliveryPlanContractRelation[];
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
         * 处理时间
         */
        dealTime?: string; // date-time
        /**
         * 驾驶员
         */
        driver?: string;
        /**
         * 驾驶员身份证号码
         */
        driverIdCard?: string;
        /**
         * 驾驶员车牌号码
         */
        driverLicensePlate?: string;
        /**
         * 驾驶员手机号码
         */
        driverPhone?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 预出库件数
         */
        numbers?: number; // int32
        /**
         * 出库计划单号
         */
        planNumber?: string;
        /**
         * 计划时间
         */
        planTime?: string; // date-time
        /**
         * 月台信息
         */
        railwayPlatformId?: number; // int64
        /**
         * 操作记录详情
         */
        recordList?: serviceType.chukujihuadanchulijilubiaodeliveryPlanDealRecord[];
        /**
         * 备注
         */
        remark?: string;
        /**
         * 配送地址
         */
        shippingAddress?: string;
        /**
         * 状态：未提交：wait_submit；未处理：wait_deal；已处理：deal；驳回：reject；
         */
        status?: {
            name?: "wait_submit" | "wait_deal" | "deal" | "reject";
            disName?: string;
        };
        /**
         * 预出库总重(吨)
         */
        totalWeight?: number;
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
     * 出库计划单处理记录表deliveryPlanDealRecord
     */
    export interface chukujihuadanchulijilubiaodeliveryPlanDealRecord {
        /**
         * 处理时间
         */
        dealTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人名称
         */
        operatorName?: string;
        /**
         * 出库计划单ID
         */
        planId?: number; // int64
        /**
         * 月台信息
         */
        railwayPlatformId?: number; // int64
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：创建：create；修改：update；处理：deal；驳回：reject
         */
        status?: {
            name?: "create" | "update" | "deal" | "reject";
            disName?: string;
        };
    }
    /**
     * 出库计划单合同关联表deliveryPlanContractRelation
     */
    export interface chukujihuadanhetongguanlianbiaodeliveryPlanContractRelation {
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * ID
         */
        id?: number; // int64
        /**
         * 出库计划单ID
         */
        planId?: number; // int64
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
     * 出库计划单商品批次信息表deliveryPlanCommodityBatch
     */
    export interface chukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch {
        /**
         * 批次编号
         */
        batchNumber?: string;
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
         * 合同ID
         */
        contractId?: number; // int64
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
         * 库存天数
         */
        dayStock?: number; // int32
        /**
         * 预出库件数
         */
        expectNumbers?: number; // int32
        /**
         * 预出库总重(吨)
         */
        expectTotalWeight?: number;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 生产日期
         */
        manufactureDate?: string; // date-time
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 包装规格
         */
        packageSpecifications?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 出库计划单ID
         */
        planId?: number; // int64
        /**
         * 描述
         */
        remark?: string;
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 库存总重(吨)
         */
        totalWeight?: number;
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
     * 出库作业人员信息表deliveryOrderOperator
     */
    export interface chukuzuoyerenyuanxinxibiaodeliveryOrderOperator {
        /**
         * 所属区域ID
         */
        areaId?: number; // int64
        /**
         * 所属区域名称
         */
        areaName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 所属分组ID
         */
        groupId?: number; // int64
        /**
         * 所属分组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 人员姓名
         */
        name?: string;
        /**
         * 作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 出库单ID
         */
        orderId?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
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
     * 出入库单合同关联表warehouseExpenseOrderContractRelation
     */
    export interface churukudanhetongguanlianbiaowarehouseExpenseOrderContractRelation {
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
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
     * 出入库单商品批次信息表warehouseExpenseOrderCommodityBatch
     */
    export interface churukudanshangpinpicixinxibiaowarehouseExpenseOrderCommodityBatch {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 板数
         */
        boardNumber?: number; // int32
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
         * 合同ID
         */
        contractId?: number; // int64
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
         * 库存天数
         */
        dayStock?: number; // int32
        /**
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 包装规格
         */
        packageSpecifications?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 总重(吨)
         */
        totalWeight?: number;
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
     * 出入库费用结算表warehouseExpense
     */
    export interface churukufeiyongjiesuanbiaowarehouseExpense {
        /**
         * 实际件数
         */
        actualNumber?: number; // int32
        /**
         * 实际重量(吨)
         */
        actualWeight?: number;
        /**
         * 已缴金额
         */
        amountPaid?: number;
        /**
         * 账单编号
         */
        billNumber?: string;
        /**
         * 板数
         */
        boardNumber?: number; // int32
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人ID
         */
        contactsId?: number; // int64
        /**
         * 费用单合同信息
         */
        contractRelationList?: serviceType.churukudanhetongguanlianbiaowarehouseExpenseOrderContractRelation[];
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
         * 驾驶员
         */
        driver?: string;
        /**
         * 驾驶员手机号码
         */
        driverPhone?: string;
        /**
         * 费用来源：in：入库；出库：out
         */
        expenseSource?: {
            name?: "in" | "out";
            disName?: string;
        };
        /**
         * 主键
         */
        id?: number; // int64
        /**
         * 驾驶员车牌号码
         */
        licensePlate?: string;
        /**
         * 出入库单号
         */
        orderNumber?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 操作记录详情
         */
        recordList?: serviceType.churukufeiyongjiesuancaozuojilubiaowarehouseExpenseRecord[];
        /**
         * 是否免租：是：y；否：n；
         */
        rentFree?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 减免租金
         */
        rentReduction?: number;
        /**
         * 状态：未结算：unsettled；未结清：unclear；已冲销：written_off；已结算：settled；
         */
        status?: {
            name?: "unsettled" | "unclear" | "written_off" | "settled";
            disName?: string;
        };
        /**
         * 费用总额
         */
        totalCost?: number;
        /**
         * 未缴金额
         */
        unpaidAmount?: number;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 冲销金额
         */
        writeOffAmount?: number;
    }
    /**
     * 出入库费用结算操作记录表warehouseExpenseRecord
     */
    export interface churukufeiyongjiesuancaozuojilubiaowarehouseExpenseRecord {
        /**
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 账号
         */
        loginName?: string;
        /**
         * 操作金额
         */
        money?: number;
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人名称
         */
        operatorName?: string;
        /**
         * 支付方式：现金：cash；转账：transfer；支付宝：alipay；微信：wechat
         */
        paymentMethod?: {
            name?: "cash" | "transfer" | "alipay" | "wechat";
            disName?: string;
        };
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：冲销：write_off；现结：current；
         */
        status?: {
            name?: "write_off" | "current";
            disName?: string;
        };
    }
    /**
     * 出入库费用结算作业人员信息表warehouseExpenseOperator
     */
    export interface churukufeiyongjiesuanzuoyerenyuanxinxibiaowarehouseExpenseOperator {
        /**
         * 所属区域ID
         */
        areaId?: number; // int64
        /**
         * 所属区域名称
         */
        areaName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * 所属分组ID
         */
        groupId?: number; // int64
        /**
         * 所属分组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 人员姓名
         */
        name?: string;
        /**
         * 作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
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
     * 出入库费用信息表warehouseExpenseOrderExpense
     */
    export interface churukufeiyongxinxibiaowarehouseExpenseOrderExpense {
        /**
         * 计费方式
         */
        billingType?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 库存天数
         */
        dayStock?: number; // int32
        /**
         * 延误时长
         */
        delayLength?: string;
        /**
         * 费用配置ID
         */
        expenseConfigId?: number; // int64
        /**
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * 费用类型
         */
        expenseType?: string;
        /**
         * 费用类型ID
         */
        expenseTypeId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 费用名称
         */
        name?: string;
        /**
         * 人数
         */
        peopleNumber?: string;
        /**
         * 速查码
         */
        quickReferenceCode?: string;
        /**
         * 是否免租：是：y；否：n；
         */
        rentFree?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 减免租金
         */
        rentReduction?: number;
        /**
         * 总费用
         */
        totalCost?: number;
        /**
         * 入库总重
         */
        totalWeight?: number;
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
        /**
         * 入库板数
         */
        warehouseBoardNumber?: number; // int32
        /**
         * 入库件数
         */
        warehouseNumber?: number; // int32
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
     * 合同计费信息contractChargin
     */
    export interface hetongjifeixinxicontractChargin {
        /**
         * 计费方式
         */
        billingType?: string;
        /**
         * 计费方式中文
         */
        billingTypeDisName?: string;
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
         * 费用配置ID(只做标识使用，给前端编辑回显时使用)
         */
        expenseConfigId?: number; // int64
        /**
         * 费用类型ID
         */
        expenseTypeId?: number; // int64
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
         * 速查码
         */
        quickReferenceCode?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 是否免租：是：y；否：n；
         */
        rentFree?: {
            name?: "y" | "n";
            disName?: string;
        };
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
         * 计费周期：年：year；月：month；日：day；
         */
        bullingCycle?: {
            name?: "year" | "month" | "day";
            disName?: string;
        };
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 合同名称
         */
        contractName?: string;
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
     * 货架层管理表warehouseLayer
     */
    export interface huojiacengguanlibiaowarehouseLayer {
        /**
         * 板列表
         */
        boardList?: serviceType.WarehouseBoardVo[];
        /**
         * 板数
         */
        boardNumber?: number; // int32
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
         * 层号
         */
        layerNo?: string;
        /**
         * 货架ID
         */
        shelfId?: number; // int64
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
    }
    /**
     * 货架管理表warehouseShelf
     */
    export interface huojiaguanlibiaowarehouseShelf {
        /**
         * 每层板数
         */
        boardNumber?: number; // int32
        /**
         * 是否存在库存
         */
        boolStatus?: {
            name?: "y" | "n";
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
         * 层列表
         */
        layerList?: serviceType.huojiacengguanlibiaowarehouseLayer[];
        /**
         * 层数
         */
        layerNumber?: number; // int32
        /**
         * 货架号
         */
        shelfNo?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 仓库类型名称
         */
        warehouseCategory?: string;
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
        /**
         * 仓库号
         */
        warehouseNo?: string;
        /**
         * 仓库类型名称
         */
        warehouseTypeName?: string;
    }
    /**
     * 接口统一返回实体OfCustomerStockCountVo
     */
    export interface jiekoutongyifanhuishitiOfCustomerStockCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.CustomerStockCountVo;
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
     * 接口统一返回实体OfHomeCommodityTypeVo
     */
    export interface jiekoutongyifanhuishitiOfHomeCommodityTypeVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeCommodityTypeVo;
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
     * 接口统一返回实体OfHomeCompletedJobVo
     */
    export interface jiekoutongyifanhuishitiOfHomeCompletedJobVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeCompletedJobVo;
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
     * 接口统一返回实体OfHomeOrderVo
     */
    export interface jiekoutongyifanhuishitiOfHomeOrderVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeOrderVo;
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
     * 接口统一返回实体OfHomeWaitJobVo
     */
    export interface jiekoutongyifanhuishitiOfHomeWaitJobVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeWaitJobVo;
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
     * 接口统一返回实体OfInventoryStatisticsVo
     */
    export interface jiekoutongyifanhuishitiOfInventoryStatisticsVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.InventoryStatisticsVo;
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
     * 接口统一返回实体OfInventoryTaskStatisticsVo
     */
    export interface jiekoutongyifanhuishitiOfInventoryTaskStatisticsVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.InventoryTaskStatisticsVo;
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
     * 接口统一返回实体OfListOfHomeCostTypeRankVo
     */
    export interface jiekoutongyifanhuishitiOfListOfHomeCostTypeRankVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeCostTypeRankVo[];
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
     * 接口统一返回实体OfListOfHomeCostTypeTrendVo
     */
    export interface jiekoutongyifanhuishitiOfListOfHomeCostTypeTrendVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeCostTypeTrendVo[];
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
     * 接口统一返回实体OfListOfHomeWarehouseVo
     */
    export interface jiekoutongyifanhuishitiOfListOfHomeWarehouseVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.HomeWarehouseVo[];
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
     * 接口统一返回实体OfListOfInventoryHistoryVo
     */
    export interface jiekoutongyifanhuishitiOfListOfInventoryHistoryVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.InventoryHistoryVo[];
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
     * 接口统一返回实体OfListOfInventorySummaryVo
     */
    export interface jiekoutongyifanhuishitiOfListOfInventorySummaryVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.InventorySummaryVo[];
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
     * 接口统一返回实体OfListOfInventoryTaskJobVo
     */
    export interface jiekoutongyifanhuishitiOfListOfInventoryTaskJobVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.InventoryTaskJobVo[];
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
     * 接口统一返回实体OfListOfInventoryTaskOperatorJovVo
     */
    export interface jiekoutongyifanhuishitiOfListOfInventoryTaskOperatorJovVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.InventoryTaskOperatorJovVo[];
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
     * 接口统一返回实体OfListOfPrintingTransferVo
     */
    export interface jiekoutongyifanhuishitiOfListOfPrintingTransferVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.PrintingTransferVo[];
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
     * 接口统一返回实体OfListOfTaskCountVo
     */
    export interface jiekoutongyifanhuishitiOfListOfTaskCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.TaskCountVo[];
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
     * 接口统一返回实体OfListOfWarehouseBoardVo
     */
    export interface jiekoutongyifanhuishitiOfListOfWarehouseBoardVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.WarehouseBoardVo[];
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
     * 接口统一返回实体OfListOfWarehouseCountVo
     */
    export interface jiekoutongyifanhuishitiOfListOfWarehouseCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.WarehouseCountVo[];
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
     * 接口统一返回实体OfListOfWarehouseInOutBatchVo
     */
    export interface jiekoutongyifanhuishitiOfListOfWarehouseInOutBatchVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.WarehouseInOutBatchVo[];
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
     * 接口统一返回实体OfListOfWarehouseInOutOrderVo
     */
    export interface jiekoutongyifanhuishitiOfListOfWarehouseInOutOrderVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.WarehouseInOutOrderVo[];
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
     * 接口统一返回实体OfListOf仓库管理表warehouseManagement
     */
    export interface jiekoutongyifanhuishitiOfListOfcangkuguanlibiaowarehouseManagement {
        /**
         * 具体数据对象
         */
        data?: serviceType.cangkuguanlibiaowarehouseManagement[];
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
     * 接口统一返回实体OfListOf仓库类型表warehouseType
     */
    export interface jiekoutongyifanhuishitiOfListOfcangkuleixingbiaowarehouseType {
        /**
         * 具体数据对象
         */
        data?: serviceType.cangkuleixingbiaowarehouseType[];
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
     * 接口统一返回实体OfListOf出库单表deliveryOrder
     */
    export interface jiekoutongyifanhuishitiOfListOfchukudanbiaodeliveryOrder {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukudanbiaodeliveryOrder[];
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
     * 接口统一返回实体OfListOf出库单处理记录表deliveryOrderDealRecord
     */
    export interface jiekoutongyifanhuishitiOfListOfchukudanchulijilubiaodeliveryOrderDealRecord {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukudanchulijilubiaodeliveryOrderDealRecord[];
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
     * 接口统一返回实体OfListOf出库单商品存储表deliveryOrderCommodityStorage
     */
    export interface jiekoutongyifanhuishitiOfListOfchukudanshangpincunchubiaodeliveryOrderCommodityStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukudanshangpincunchubiaodeliveryOrderCommodityStorage[];
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
     * 接口统一返回实体OfListOf出库单商品批次信息表deliveryOrderCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOfchukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch[];
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
     * 接口统一返回实体OfListOf出库费用信息表deliveryOrderExpense
     */
    export interface jiekoutongyifanhuishitiOfListOfchukufeiyongxinxibiaodeliveryOrderExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukufeiyongxinxibiaodeliveryOrderExpense[];
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
     * 接口统一返回实体OfListOf出库计划单表deliveryPlan
     */
    export interface jiekoutongyifanhuishitiOfListOfchukujihuadanbiaodeliveryPlan {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukujihuadanbiaodeliveryPlan[];
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
     * 接口统一返回实体OfListOf出库计划单处理记录表deliveryPlanDealRecord
     */
    export interface jiekoutongyifanhuishitiOfListOfchukujihuadanchulijilubiaodeliveryPlanDealRecord {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukujihuadanchulijilubiaodeliveryPlanDealRecord[];
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
     * 接口统一返回实体OfListOf出库计划单商品批次信息表deliveryPlanCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOfchukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch[];
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
     * 接口统一返回实体OfListOf出库作业人员信息表deliveryOrderOperator
     */
    export interface jiekoutongyifanhuishitiOfListOfchukuzuoyerenyuanxinxibiaodeliveryOrderOperator {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukuzuoyerenyuanxinxibiaodeliveryOrderOperator[];
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
     * 接口统一返回实体OfListOf出入库单商品批次信息表warehouseExpenseOrderCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOfchurukudanshangpinpicixinxibiaowarehouseExpenseOrderCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.churukudanshangpinpicixinxibiaowarehouseExpenseOrderCommodityBatch[];
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
     * 接口统一返回实体OfListOf出入库费用结算表warehouseExpense
     */
    export interface jiekoutongyifanhuishitiOfListOfchurukufeiyongjiesuanbiaowarehouseExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.churukufeiyongjiesuanbiaowarehouseExpense[];
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
     * 接口统一返回实体OfListOf出入库费用结算操作记录表warehouseExpenseRecord
     */
    export interface jiekoutongyifanhuishitiOfListOfchurukufeiyongjiesuancaozuojilubiaowarehouseExpenseRecord {
        /**
         * 具体数据对象
         */
        data?: serviceType.churukufeiyongjiesuancaozuojilubiaowarehouseExpenseRecord[];
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
     * 接口统一返回实体OfListOf出入库费用结算作业人员信息表warehouseExpenseOperator
     */
    export interface jiekoutongyifanhuishitiOfListOfchurukufeiyongjiesuanzuoyerenyuanxinxibiaowarehouseExpenseOperator {
        /**
         * 具体数据对象
         */
        data?: serviceType.churukufeiyongjiesuanzuoyerenyuanxinxibiaowarehouseExpenseOperator[];
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
     * 接口统一返回实体OfListOf出入库费用信息表warehouseExpenseOrderExpense
     */
    export interface jiekoutongyifanhuishitiOfListOfchurukufeiyongxinxibiaowarehouseExpenseOrderExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.churukufeiyongxinxibiaowarehouseExpenseOrderExpense[];
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
     * 接口统一返回实体OfListOf合同计费信息contractChargin
     */
    export interface jiekoutongyifanhuishitiOfListOfhetongjifeixinxicontractChargin {
        /**
         * 具体数据对象
         */
        data?: serviceType.hetongjifeixinxicontractChargin[];
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
     * 接口统一返回实体OfListOf货架管理表warehouseShelf
     */
    export interface jiekoutongyifanhuishitiOfListOfhuojiaguanlibiaowarehouseShelf {
        /**
         * 具体数据对象
         */
        data?: serviceType.huojiaguanlibiaowarehouseShelf[];
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
     * 接口统一返回实体OfListOf库区管理表warehouseArea
     */
    export interface jiekoutongyifanhuishitiOfListOfkuquguanlibiaowarehouseArea {
        /**
         * 具体数据对象
         */
        data?: serviceType.kuquguanlibiaowarehouseArea[];
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
     * 接口统一返回实体OfListOf盘库处理记录inventoryTaskDealRecord
     */
    export interface jiekoutongyifanhuishitiOfListOfpankuchulijiluinventoryTaskDealRecord {
        /**
         * 具体数据对象
         */
        data?: serviceType.pankuchulijiluinventoryTaskDealRecord[];
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
     * 接口统一返回实体OfListOf盘库库位存储信息inventoryTaskStorage
     */
    export interface jiekoutongyifanhuishitiOfListOfpankukuweicunchuxinxiinventoryTaskStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.pankukuweicunchuxinxiinventoryTaskStorage[];
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
     * 接口统一返回实体OfListOf盘库任务表inventoryTask
     */
    export interface jiekoutongyifanhuishitiOfListOfpankurenwubiaoinventoryTask {
        /**
         * 具体数据对象
         */
        data?: serviceType.pankurenwubiaoinventoryTask[];
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
     * 接口统一返回实体OfListOf盘库任务商品批次信息表inventoryTaskCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOfpankurenwushangpinpicixinxibiaoinventoryTaskCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.pankurenwushangpinpicixinxibiaoinventoryTaskCommodityBatch[];
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
     * 接口统一返回实体OfListOf盘库任务作业人员信息表inventoryTaskOperator
     */
    export interface jiekoutongyifanhuishitiOfListOfpankurenwuzuoyerenyuanxinxibiaoinventoryTaskOperator {
        /**
         * 具体数据对象
         */
        data?: serviceType.pankurenwuzuoyerenyuanxinxibiaoinventoryTaskOperator[];
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
     * 接口统一返回实体OfListOf其他费用结算表otherExpense
     */
    export interface jiekoutongyifanhuishitiOfListOfqitafeiyongjiesuanbiaootherExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.qitafeiyongjiesuanbiaootherExpense[];
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
     * 接口统一返回实体OfListOf其他费用结算作业人员信息表otherExpenseOperator
     */
    export interface jiekoutongyifanhuishitiOfListOfqitafeiyongjiesuanzuoyerenyuanxinxibiaootherExpenseOperator {
        /**
         * 具体数据对象
         */
        data?: serviceType.qitafeiyongjiesuanzuoyerenyuanxinxibiaootherExpenseOperator[];
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
     * 接口统一返回实体OfListOf任务表task
     */
    export interface jiekoutongyifanhuishitiOfListOfrenwubiaotask {
        /**
         * 具体数据对象
         */
        data?: serviceType.renwubiaotask[];
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
     * 接口统一返回实体OfListOf入库单表warehouseOrder
     */
    export interface jiekoutongyifanhuishitiOfListOfrukudanbiaowarehouseOrder {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanbiaowarehouseOrder[];
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
     * 接口统一返回实体OfListOf入库单处理记录表warehouseOrderDealRecord
     */
    export interface jiekoutongyifanhuishitiOfListOfrukudanchulijilubiaowarehouseOrderDealRecord {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanchulijilubiaowarehouseOrderDealRecord[];
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
     * 接口统一返回实体OfListOf入库单商品存储表warehouseOrderCommodityStorage
     */
    export interface jiekoutongyifanhuishitiOfListOfrukudanshangpincunchubiaowarehouseOrderCommodityStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanshangpincunchubiaowarehouseOrderCommodityStorage[];
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
     * 接口统一返回实体OfListOf入库单商品批次信息表warehouseOrderCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOfrukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch[];
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
     * 接口统一返回实体OfListOf入库费用信息表warehouseOrderExpense
     */
    export interface jiekoutongyifanhuishitiOfListOfrukufeiyongxinxibiaowarehouseOrderExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukufeiyongxinxibiaowarehouseOrderExpense[];
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
     * 接口统一返回实体OfListOf入库计划单表warehousePlan
     */
    export interface jiekoutongyifanhuishitiOfListOfrukujihuadanbiaowarehousePlan {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukujihuadanbiaowarehousePlan[];
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
     * 接口统一返回实体OfListOf入库计划单处理记录表warehousePlanDealRecord
     */
    export interface jiekoutongyifanhuishitiOfListOfrukujihuadanchulijilubiaowarehousePlanDealRecord {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukujihuadanchulijilubiaowarehousePlanDealRecord[];
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
     * 接口统一返回实体OfListOf入库计划单商品批次信息表warehousePlanCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOfrukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch[];
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
     * 接口统一返回实体OfListOf入库作业人员信息表warehouseOrderOperator
     */
    export interface jiekoutongyifanhuishitiOfListOfrukuzuoyerenyuanxinxibiaowarehouseOrderOperator {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukuzuoyerenyuanxinxibiaowarehouseOrderOperator[];
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
     * 接口统一返回实体OfListOf商品表SpuVo
     */
    export interface jiekoutongyifanhuishitiOfListOfshangpinbiaoSpuVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinbiaoSpuVo[];
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
     * 接口统一返回实体OfListOf商品存储表commodityStorage
     */
    export interface jiekoutongyifanhuishitiOfListOfshangpincunchubiaocommodityStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpincunchubiaocommodityStorage[];
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
     * 接口统一返回实体OfListOf商品存储日流水表commodityStorageDayHistory
     */
    export interface jiekoutongyifanhuishitiOfListOfshangpincunchuriliushuibiaocommodityStorageDayHistory {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpincunchuriliushuibiaocommodityStorageDayHistory[];
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
     * 接口统一返回实体OfListOf商品库存信息表commodityStock
     */
    export interface jiekoutongyifanhuishitiOfListOfshangpinkucunxinxibiaocommodityStock {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinkucunxinxibiaocommodityStock[];
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
     * 接口统一返回实体OfListOf商品品类表spuCategory
     */
    export interface jiekoutongyifanhuishitiOfListOfshangpinpinleibiaospuCategory {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinpinleibiaospuCategory[];
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
     * 接口统一返回实体OfListOfstring
     */
    export interface jiekoutongyifanhuishitiOfListOfstring {
        /**
         * 具体数据对象
         */
        data?: string[];
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
     * 接口统一返回实体OfListOf调仓单表transferWarehouse
     */
    export interface jiekoutongyifanhuishitiOfListOftiaocangdanbiaotransferWarehouse {
        /**
         * 具体数据对象
         */
        data?: serviceType.tiaocangdanbiaotransferWarehouse[];
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
     * 接口统一返回实体OfListOf调仓库位信息transferStorage
     */
    export interface jiekoutongyifanhuishitiOfListOftiaocangkuweixinxitransferStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.tiaocangkuweixinxitransferStorage[];
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
     * 接口统一返回实体OfListOf调仓商品批次信息表transferCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfListOftiaocangshangpinpicixinxibiaotransferCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.tiaocangshangpinpicixinxibiaotransferCommodityBatch[];
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
     * 接口统一返回实体OfListOf月台管理表railwayPlatform
     */
    export interface jiekoutongyifanhuishitiOfListOfyuetaiguanlibiaorailwayPlatform {
        /**
         * 具体数据对象
         */
        data?: serviceType.yuetaiguanlibiaorailwayPlatform[];
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
     * 接口统一返回实体OfListOf租仓申请表warehouseRentalApplication
     */
    export interface jiekoutongyifanhuishitiOfListOfzucangshenqingbiaowarehouseRentalApplication {
        /**
         * 具体数据对象
         */
        data?: serviceType.zucangshenqingbiaowarehouseRentalApplication[];
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
     * 接口统一返回实体OfOtherExpenseCountVo
     */
    export interface jiekoutongyifanhuishitiOfOtherExpenseCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.OtherExpenseCountVo;
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
     * 接口统一返回实体OfPrintingInventoryVo
     */
    export interface jiekoutongyifanhuishitiOfPrintingInventoryVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.PrintingInventoryVo;
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
     * 接口统一返回实体OfPrintingWarehouseVo
     */
    export interface jiekoutongyifanhuishitiOfPrintingWarehouseVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.PrintingWarehouseVo;
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
     * 接口统一返回实体OfStorageStatisticsVo
     */
    export interface jiekoutongyifanhuishitiOfStorageStatisticsVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.StorageStatisticsVo;
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
     * 接口统一返回实体OfTransferTaskForUserVo
     */
    export interface jiekoutongyifanhuishitiOfTransferTaskForUserVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.TransferTaskForUserVo;
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
     * 接口统一返回实体OfWarehouseCountVo
     */
    export interface jiekoutongyifanhuishitiOfWarehouseCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.WarehouseCountVo;
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
     * 接口统一返回实体OfWarehouseExpenseCountVo
     */
    export interface jiekoutongyifanhuishitiOfWarehouseExpenseCountVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.WarehouseExpenseCountVo;
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
     * 接口统一返回实体Ofboolean
     */
    export interface jiekoutongyifanhuishitiOfboolean {
        /**
         * 具体数据对象
         */
        data?: boolean;
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
     * 接口统一返回实体Of仓库管理表warehouseManagement
     */
    export interface jiekoutongyifanhuishitiOfcangkuguanlibiaowarehouseManagement {
        /**
         * 具体数据对象
         */
        data?: serviceType.cangkuguanlibiaowarehouseManagement;
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
     * 接口统一返回实体Of仓库类型表warehouseType
     */
    export interface jiekoutongyifanhuishitiOfcangkuleixingbiaowarehouseType {
        /**
         * 具体数据对象
         */
        data?: serviceType.cangkuleixingbiaowarehouseType;
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
     * 接口统一返回实体Of出库单表deliveryOrder
     */
    export interface jiekoutongyifanhuishitiOfchukudanbiaodeliveryOrder {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukudanbiaodeliveryOrder;
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
     * 接口统一返回实体Of出库单商品批次信息表deliveryOrderCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfchukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukudanshangpinpicixinxibiaodeliveryOrderCommodityBatch;
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
     * 接口统一返回实体Of出库计划单表deliveryPlan
     */
    export interface jiekoutongyifanhuishitiOfchukujihuadanbiaodeliveryPlan {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukujihuadanbiaodeliveryPlan;
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
     * 接口统一返回实体Of出库计划单商品批次信息表deliveryPlanCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfchukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.chukujihuadanshangpinpicixinxibiaodeliveryPlanCommodityBatch;
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
     * 接口统一返回实体Of出入库费用结算表warehouseExpense
     */
    export interface jiekoutongyifanhuishitiOfchurukufeiyongjiesuanbiaowarehouseExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.churukufeiyongjiesuanbiaowarehouseExpense;
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
     * 接口统一返回实体Of货架管理表warehouseShelf
     */
    export interface jiekoutongyifanhuishitiOfhuojiaguanlibiaowarehouseShelf {
        /**
         * 具体数据对象
         */
        data?: serviceType.huojiaguanlibiaowarehouseShelf;
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
     * 接口统一返回实体Of库区管理表warehouseArea
     */
    export interface jiekoutongyifanhuishitiOfkuquguanlibiaowarehouseArea {
        /**
         * 具体数据对象
         */
        data?: serviceType.kuquguanlibiaowarehouseArea;
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
     * 接口统一返回实体Of盘库任务表inventoryTask
     */
    export interface jiekoutongyifanhuishitiOfpankurenwubiaoinventoryTask {
        /**
         * 具体数据对象
         */
        data?: serviceType.pankurenwubiaoinventoryTask;
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
     * 接口统一返回实体Of其他费用结算表otherExpense
     */
    export interface jiekoutongyifanhuishitiOfqitafeiyongjiesuanbiaootherExpense {
        /**
         * 具体数据对象
         */
        data?: serviceType.qitafeiyongjiesuanbiaootherExpense;
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
     * 接口统一返回实体Of入库单表warehouseOrder
     */
    export interface jiekoutongyifanhuishitiOfrukudanbiaowarehouseOrder {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanbiaowarehouseOrder;
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
     * 接口统一返回实体Of入库单商品存储表warehouseOrderCommodityStorage
     */
    export interface jiekoutongyifanhuishitiOfrukudanshangpincunchubiaowarehouseOrderCommodityStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanshangpincunchubiaowarehouseOrderCommodityStorage;
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
     * 接口统一返回实体Of入库单商品批次信息表warehouseOrderCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfrukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch;
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
     * 接口统一返回实体Of入库计划单表warehousePlan
     */
    export interface jiekoutongyifanhuishitiOfrukujihuadanbiaowarehousePlan {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukujihuadanbiaowarehousePlan;
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
     * 接口统一返回实体Of入库计划单商品批次信息表warehousePlanCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOfrukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.rukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch;
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
     * 接口统一返回实体Of商品表SpuVo
     */
    export interface jiekoutongyifanhuishitiOfshangpinbiaoSpuVo {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinbiaoSpuVo;
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
     * 接口统一返回实体Of商品存储表commodityStorage
     */
    export interface jiekoutongyifanhuishitiOfshangpincunchubiaocommodityStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpincunchubiaocommodityStorage;
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
     * 接口统一返回实体Of商品品类表spuCategory
     */
    export interface jiekoutongyifanhuishitiOfshangpinpinleibiaospuCategory {
        /**
         * 具体数据对象
         */
        data?: serviceType.shangpinpinleibiaospuCategory;
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
     * 接口统一返回实体Of调仓单表transferWarehouse
     */
    export interface jiekoutongyifanhuishitiOftiaocangdanbiaotransferWarehouse {
        /**
         * 具体数据对象
         */
        data?: serviceType.tiaocangdanbiaotransferWarehouse;
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
     * 接口统一返回实体Of调仓库位信息transferStorage
     */
    export interface jiekoutongyifanhuishitiOftiaocangkuweixinxitransferStorage {
        /**
         * 具体数据对象
         */
        data?: serviceType.tiaocangkuweixinxitransferStorage;
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
     * 接口统一返回实体Of调仓商品批次信息表transferCommodityBatch
     */
    export interface jiekoutongyifanhuishitiOftiaocangshangpinpicixinxibiaotransferCommodityBatch {
        /**
         * 具体数据对象
         */
        data?: serviceType.tiaocangshangpinpicixinxibiaotransferCommodityBatch;
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
     * 接口统一返回实体Of月台管理表railwayPlatform
     */
    export interface jiekoutongyifanhuishitiOfyuetaiguanlibiaorailwayPlatform {
        /**
         * 具体数据对象
         */
        data?: serviceType.yuetaiguanlibiaorailwayPlatform;
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
     * 接口统一返回实体Of租仓申请表warehouseRentalApplication
     */
    export interface jiekoutongyifanhuishitiOfzucangshenqingbiaowarehouseRentalApplication {
        /**
         * 具体数据对象
         */
        data?: serviceType.zucangshenqingbiaowarehouseRentalApplication;
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
         * 客户编号
         */
        customerNumber?: string;
        /**
         * 开户银行
         */
        depositBank?: string;
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
     * 库区管理表warehouseArea
     */
    export interface kuquguanlibiaowarehouseArea {
        /**
         * 库区号
         */
        areaNo?: string;
        /**
         * 是否存在库存
         */
        boolStatus?: {
            name?: "y" | "n";
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
         * 库位编号(从上到下组合起来)
         */
        locationNumber?: string;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
        /**
         * 仓库类型名称
         */
        warehouseTypeName?: string;
    }
    /**
     * 盘库处理记录inventoryTaskDealRecord
     */
    export interface pankuchulijiluinventoryTaskDealRecord {
        /**
         * 操作内容
         */
        content?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人姓名
         */
        operatorName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 盘库任务id
         */
        taskId?: number; // int64
    }
    /**
     * 盘库单合同关联表inventoryTaskContractRelation
     */
    export interface pankudanhetongguanlianbiaoinventoryTaskContractRelation {
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * ID
         */
        id?: number; // int64
        /**
         * 盘库任务ID
         */
        taskId?: number; // int64
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
     * 盘库库位存储信息inventoryTaskStorage
     */
    export interface pankukuweicunchuxinxiinventoryTaskStorage {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 商品ID
         */
        commodityId?: number; // int64
        /**
         * 商品名称
         */
        commodityName?: string;
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * 客户ID
         */
        customerId?: number; // int64
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 异常原因
         */
        errorReason?: string;
        /**
         * 确认时间
         */
        fonfirmationTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 库位编号
         */
        localtionNumber?: string;
        /**
         * 丢失时间
         */
        loseTime?: string; // date-time
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 作业人员姓名
         */
        operaterName?: string;
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 状态：正常：normal；异常库位：error_location；异常追溯码：error_trace_code；变更：change
         */
        status?: {
            name?: "normal" | "error_location" | "error_trace_code" | "change";
            disName?: string;
        };
        /**
         * 盘库任务批次ID
         */
        taskBatchId?: number; // int64
        /**
         * 任务ID
         */
        taskId?: number; // int64
        /**
         * 任务状态：处理中：handle；已完成：finish；
         */
        taskStatus?: {
            name?: "handle" | "finish";
            disName?: string;
        };
        /**
         * 追溯码
         */
        traceCode?: string;
        /**
         * 操作类型：changeNum：更改件数；changeOwner：更改货主；signNull：标记为空；lose：标记丢失；
         */
        type?: {
            name?: "changeNum" | "changeOwner" | "signNull" | "lose";
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
         * 仓库类型
         */
        warehouseCategoryType?: {
            name?: "shelf" | "plane";
            disName?: string;
        };
    }
    /**
     * 盘库任务表inventoryTask
     */
    export interface pankurenwubiaoinventoryTask {
        /**
         * 商品批次总数
         */
        commdityTotal?: number; // int32
        /**
         * 商品批次List
         */
        commodityBatches?: serviceType.pankurenwushangpinpicixinxibiaoinventoryTaskCommodityBatch[];
        /**
         * 合同List
         */
        contracts?: serviceType.pankudanhetongguanlianbiaoinventoryTaskContractRelation[];
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
         * 盘库完成时间
         */
        finishTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 盘库类型：客户盘库：customer；按仓盘库：warehouse；
         */
        libraryType?: {
            name?: "customer" | "warehouse";
            disName?: string;
        };
        /**
         * 作业人员List
         */
        operators?: serviceType.pankurenwuzuoyerenyuanxinxibiaoinventoryTaskOperator[];
        /**
         * 备注
         */
        remark?: string;
        /**
         * 盘库开始时间
         */
        startTime?: string; // date-time
        /**
         * 状态：未盘库：not；盘库中：doing；已盘库：already
         */
        status?: {
            name?: "not" | "doing" | "already";
            disName?: string;
        };
        /**
         * 任务编号
         */
        taskNo?: string;
        /**
         * 任务期限
         */
        taskTerm?: string; // date-time
        /**
         * 商品总件数
         */
        total?: number; // int32
        /**
         * 总板数
         */
        totalBoard?: number; // int32
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    /**
     * 盘库任务商品批次信息表inventoryTaskCommodityBatch
     */
    export interface pankurenwushangpinpicixinxibiaoinventoryTaskCommodityBatch {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 库存板数
         */
        board?: number; // int32
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
         * 合同ID
         */
        contractId?: number; // int64
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
         * 忽略异常原因
         */
        ignoreErrorReason?: string;
        /**
         * 盘库板数
         */
        inventoryBoard?: number; // int32
        /**
         * 盘库件数
         */
        inventoryNumber?: number; // int32
        /**
         * 盘库库存总量(吨)
         */
        inventoryTotlaWeight?: number;
        /**
         * 生产日期
         */
        manufactureDate?: string; // date-time
        /**
         * 库存件数
         */
        numbers?: number; // int32
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 实时库存板数
         */
        realTimeBoard?: number; // int32
        /**
         * 实时库存件数
         */
        realTimeNumber?: number; // int32
        /**
         * 状态：正常：normal；异常：error；保留实时数据：realTime；
         */
        status?: {
            name?: "normal" | "error" | "realTime";
            disName?: string;
        };
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 任务ID
         */
        taskId?: number; // int64
        /**
         * 任务状态：处理中：handle；已完成：finish；
         */
        taskStatus?: {
            name?: "handle" | "finish";
            disName?: string;
        };
        /**
         * 库存总重(吨)
         */
        totalWeight?: number;
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
     * 盘库任务作业人员信息表inventoryTaskOperator
     */
    export interface pankurenwuzuoyerenyuanxinxibiaoinventoryTaskOperator {
        /**
         * 所属区域ID
         */
        areaId?: number; // int64
        /**
         * 所属区域名称
         */
        areaName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 所属分组ID
         */
        groupId?: number; // int64
        /**
         * 所属分组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 人员姓名
         */
        name?: string;
        /**
         * 作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 任务ID
         */
        taskId?: number; // int64
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
     * 其他费用结算表otherExpense
     */
    export interface qitafeiyongjiesuanbiaootherExpense {
        /**
         * 已缴金额
         */
        amountPaid?: number;
        /**
         * 账单编号
         */
        billNumber?: string;
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 操作员名称
         */
        createName?: string;
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
         * 费用名称
         */
        expenseName?: string;
        /**
         * 主键
         */
        id?: number; // int64
        /**
         * 计费数量
         */
        number?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 计费单价
         */
        price?: number;
        /**
         * 操作记录详情
         */
        recordList?: serviceType.qitafeiyongjiesuancaozuojilubiaootherExpenseRecord[];
        /**
         * 其他信息
         */
        remark?: string;
        /**
         * 状态：未结算：unsettled；未结清：unclear；已冲销：written_off；已结算：settled；
         */
        status?: {
            name?: "unsettled" | "unclear" | "written_off" | "settled";
            disName?: string;
        };
        /**
         * 费用总额
         */
        totalCost?: number;
        /**
         * 计费单位
         */
        unit?: string;
        /**
         * 计费单位ID
         */
        unitId?: number; // int64
        /**
         * 未缴金额
         */
        unpaidAmount?: number;
        /**
         * 修改人
         */
        updateBy?: number; // int64
        /**
         * 修改时间
         */
        updateTime?: string; // date-time
        /**
         * 冲销金额
         */
        writeOffAmount?: number;
    }
    /**
     * 其他费用结算操作记录表otherExpenseRecord
     */
    export interface qitafeiyongjiesuancaozuojilubiaootherExpenseRecord {
        /**
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 账号
         */
        loginName?: string;
        /**
         * 操作金额
         */
        money?: number;
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人名称
         */
        operatorName?: string;
        /**
         * 支付方式
         */
        paymentMethod?: {
            name?: "cash" | "transfer" | "alipay" | "wechat";
            disName?: string;
        };
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：冲销：write_off；现结：current；
         */
        status?: {
            name?: "write_off" | "current";
            disName?: string;
        };
    }
    /**
     * 其他费用结算作业人员信息表otherExpenseOperator
     */
    export interface qitafeiyongjiesuanzuoyerenyuanxinxibiaootherExpenseOperator {
        /**
         * 所属区域ID
         */
        areaId?: number; // int64
        /**
         * 所属区域名称
         */
        areaName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 费用ID
         */
        expenseId?: number; // int64
        /**
         * 所属分组ID
         */
        groupId?: number; // int64
        /**
         * 所属分组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 人员姓名
         */
        name?: string;
        /**
         * 作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
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
     * 任务表task
     */
    export interface renwubiaotask {
        /**
         * 业务ID
         */
        businessId?: number; // int64
        /**
         * 任务内容
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
         * 完成时间
         */
        finishTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作人账号ID
         */
        operaterUserId?: number; // int64
        /**
         * 备注
         */
        remark?: string;
        /**
         * 状态：进行中：processing；已完成：finish；
         */
        status?: {
            name?: "processing" | "finish";
            disName?: string;
        };
        /**
         * 任务类型：盘库任务：inventory；移库任务：transfer；入库理货：in_tally；出库理货：out_tally；
         */
        type?: {
            name?: "inventory" | "transfer" | "in_tally" | "out_tally";
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
     * 入库单表warehouseOrder
     */
    export interface rukudanbiaowarehouseOrder {
        /**
         * 入库板数
         */
        boardNumbers?: number; // int32
        /**
         * 确认时间
         */
        confirmationTime?: string; // date-time
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人ID
         */
        contactsId?: number; // int64
        /**
         * 计划单合同信息
         */
        contractRelationList?: serviceType.rukudanhetongguanlianbiaowarehouseOrderContractRelation[];
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
         * 驾驶员
         */
        driver?: string;
        /**
         * 驾驶员手机号码
         */
        driverPhone?: string;
        /**
         * 预入库板数
         */
        expectBoardNumbers?: number; // int32
        /**
         * 预入库件数
         */
        expectNumbers?: number; // int32
        /**
         * 预入库总重(吨)
         */
        expectTotalWeight?: number;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 驾驶员车牌号码
         */
        licensePlate?: string;
        /**
         * 入库库件数
         */
        numbers?: number; // int32
        /**
         * 操作状态：未提交：wait_submit；已提交：submit；到货确认：arrive_confirmation；理货确认：handle_confirmation；已入库：stored；已作废：invalid；
         */
        operateStatus?: {
            name?: "wait_submit" | "submit" | "arrive_confirmation" | "print" | "handle_confirmation" | "stored" | "invalid";
            disName?: string;
        };
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 入库计划单号
         */
        planNumber?: string;
        /**
         * 计划时间
         */
        planTime?: string; // date-time
        /**
         * 操作记录详情
         */
        recordList?: serviceType.rukudanchulijilubiaowarehouseOrderDealRecord[];
        /**
         * 备注
         */
        remark?: string;
        /**
         * 零包入仓数量
         */
        smallNumber?: number; // int64
        /**
         * 数据状态：未提交：wait_submit；未入库：not_storage；已入库：stored；已作废：invalid；
         */
        status?: {
            name?: "wait_submit" | "not_storage" | "stored" | "invalid";
            disName?: string;
        };
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 理货时间
         */
        tallyTime?: string; // date-time
        /**
         * 入库总重(吨)
         */
        totalWeight?: number;
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
     * 入库单处理记录表warehouseOrderDealRecord
     */
    export interface rukudanchulijilubiaowarehouseOrderDealRecord {
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人名称
         */
        operatorName?: string;
        /**
         * 入库单ID
         */
        orderId?: number; // int64
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：创建：create；作废：invalid；到货确认：arrive_confirmation；理货确认：handle_confirmation；
         */
        status?: {
            name?: "create" | "update" | "submit" | "invalid" | "arrive_confirmation" | "handle_confirmation" | "store" | "print";
            disName?: string;
        };
    }
    /**
     * 入库单合同关联表warehouseOrderContractRelation
     */
    export interface rukudanhetongguanlianbiaowarehouseOrderContractRelation {
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * ID
         */
        id?: number; // int64
        /**
         * 入库单ID
         */
        orderId?: number; // int64
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
     * 入库单商品存储表warehouseOrderCommodityStorage
     */
    export interface rukudanshangpincunchubiaowarehouseOrderCommodityStorage {
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
         * 库位编号
         */
        locationNumber?: string;
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 入库单ID
         */
        orderId?: number; // int64
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 理货时间
         */
        tallyTime?: string; // date-time
        /**
         * 理货人
         */
        tallyUserId?: number; // int64
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
         * 仓库ID
         */
        warehouseId?: number; // int64
    }
    /**
     * 入库单商品批次附件warehouseOrderCommodityBatchFile
     */
    export interface rukudanshangpinpicifujianwarehouseOrderCommodityBatchFile {
        /**
         * 文件地址
         */
        address?: string;
        /**
         * 批次ID
         */
        batchId?: number; // int64
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
     * 入库单商品批次信息表warehouseOrderCommodityBatch
     */
    export interface rukudanshangpinpicixinxibiaowarehouseOrderCommodityBatch {
        /**
         * 每批次实际重量
         */
        actualWeight?: string;
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 板数
         */
        boardNumber?: number; // int32
        /**
         * 检验检疫证明证书编号
         */
        certificateNo?: string;
        /**
         * 检验检疫生产批次号
         */
        checkProductionBatchNumber?: string;
        /**
         * 商品编号
         */
        code?: string;
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
         * 入境日期
         */
        entryDate?: string; // date-time
        /**
         * 入境口岸
         */
        entryPort?: string;
        /**
         * 文件列表
         */
        fileList?: serviceType.rukudanshangpinpicifujianwarehouseOrderCommodityBatchFile[];
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
         * 库位
         */
        locationNumber?: string;
        /**
         * 生产日期
         */
        manufactureDate?: string; // date-time
        /**
         * 报检数/重量
         */
        numberWight?: string;
        /**
         * 预入库件数
         */
        numbers?: number; // int32
        /**
         * 入库单ID
         */
        orderId?: number; // int64
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
         * 商品批次类型：正常：normal；零包入仓：small
         */
        planType?: {
            name?: "normal" | "small";
            disName?: string;
        };
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
         * 零包入仓计划单ID
         */
        samllPlanId?: number; // int64
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
         * 剩余件数
         */
        surplusNumber?: number; // int32
        /**
         * 理货板数
         */
        tallyBoardNumber?: number; // int32
        /**
         * 理货件数
         */
        tallyNumber?: number; // int32
        /**
         * 理货总重(吨)
         */
        tallyTotalWeight?: number;
        /**
         * 流转总量 KG
         */
        totalTurnover?: string;
        /**
         * 预入库总重(吨)
         */
        totalWeight?: number;
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
     * 入库费用信息表warehouseOrderExpense
     */
    export interface rukufeiyongxinxibiaowarehouseOrderExpense {
        /**
         * 计费方式
         */
        billingType?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 延误时长
         */
        delayLength?: string;
        /**
         * 费用配置ID
         */
        expenseConfigId?: number; // int64
        /**
         * 费用类型
         */
        expenseType?: string;
        /**
         * 费用类型ID
         */
        expenseTypeId?: number; // int64
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 费用名称
         */
        name?: string;
        /**
         * 入库单ID
         */
        orderId?: number; // int64
        /**
         * 人数
         */
        peopleNumber?: string;
        /**
         * 速查码
         */
        quickReferenceCode?: string;
        /**
         * 是否免租：是：y；否：n；
         */
        rentFree?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 总费用
         */
        totalCost?: number;
        /**
         * 入库总重
         */
        totalWeight?: number;
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
        /**
         * 入库板数
         */
        warehouseBoardNumber?: number; // int32
        /**
         * 入库件数
         */
        warehouseNumber?: number; // int32
    }
    /**
     * 入库计划单表warehousePlan
     */
    export interface rukujihuadanbiaowarehousePlan {
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人ID
         */
        contactsId?: number; // int64
        /**
         * 计划单合同信息
         */
        contractRelationList?: serviceType.rukujihuadanhetongguanlianbiaowarehousePlanContractRelation[];
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
         * 处理时间
         */
        dealTime?: string; // date-time
        /**
         * 驾驶员
         */
        driver?: string;
        /**
         * 驾驶员手机号码
         */
        driverPhone?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 驾驶员车牌号码
         */
        licensePlate?: string;
        /**
         * 预入库件数
         */
        numbers?: number; // int32
        /**
         * 手机号码
         */
        phone?: string;
        /**
         * 入库计划单号
         */
        planNumber?: string;
        /**
         * 计划时间
         */
        planTime?: string; // date-time
        /**
         * 月台信息
         */
        railwayPlatformId?: number; // int64
        /**
         * 操作记录详情
         */
        recordList?: serviceType.rukujihuadanchulijilubiaowarehousePlanDealRecord[];
        /**
         * 备注
         */
        remark?: string;
        /**
         * 零包入仓数量
         */
        smallNumber?: number; // int64
        /**
         * 状态：未提交：wait_submit；未处理：wait_deal；已处理：deal；驳回：reject；
         */
        status?: {
            name?: "wait_submit" | "wait_deal" | "deal" | "reject";
            disName?: string;
        };
        /**
         * 预入库总重(吨)
         */
        totalWeight?: number;
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
     * 入库计划单处理记录表warehousePlanDealRecord
     */
    export interface rukujihuadanchulijilubiaowarehousePlanDealRecord {
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 操作人名称
         */
        operatorName?: string;
        /**
         * 入库计划单ID
         */
        planId?: number; // int64
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：创建：create；修改：update；处理：deal；驳回：reject
         */
        status?: {
            name?: "create" | "update" | "deal" | "reject";
            disName?: string;
        };
    }
    /**
     * 入库计划单合同关联表warehousePlanContractRelation
     */
    export interface rukujihuadanhetongguanlianbiaowarehousePlanContractRelation {
        /**
         * 合同ID
         */
        contractId?: number; // int64
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
         * ID
         */
        id?: number; // int64
        /**
         * 入库计划单ID
         */
        planId?: number; // int64
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
     * 入库计划单商品批次附件warehousePlanCommodityBatchFile
     */
    export interface rukujihuadanshangpinpicifujianwarehousePlanCommodityBatchFile {
        /**
         * 文件地址
         */
        address?: string;
        /**
         * 批次ID
         */
        batchId?: number; // int64
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
     * 入库计划单商品批次信息表warehousePlanCommodityBatch
     */
    export interface rukujihuadanshangpinpicixinxibiaowarehousePlanCommodityBatch {
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
         * 入境日期
         */
        entryDate?: string; // date-time
        /**
         * 入境口岸
         */
        entryPort?: string;
        /**
         * 文件列表
         */
        fileList?: serviceType.rukujihuadanshangpinpicifujianwarehousePlanCommodityBatchFile[];
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
         * 预入库件数
         */
        numbers?: number; // int32
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
         * 入库计划单ID
         */
        planId?: number; // int64
        /**
         * 商品批次类型：正常：normal；零包入仓：small
         */
        planType?: {
            name?: "normal" | "small";
            disName?: string;
        };
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
         * 零包入仓入库计划单ID
         */
        samllPlanId?: number; // int64
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
         * 预入库总重(吨)
         */
        totalWeight?: number;
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
     * 入库作业人员信息表warehouseOrderOperator
     */
    export interface rukuzuoyerenyuanxinxibiaowarehouseOrderOperator {
        /**
         * 所属区域ID
         */
        areaId?: number; // int64
        /**
         * 所属区域名称
         */
        areaName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 所属分组ID
         */
        groupId?: number; // int64
        /**
         * 所属分组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 人员姓名
         */
        name?: string;
        /**
         * 作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 入库单ID
         */
        orderId?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
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
     * 商品表SpuVo
     */
    export interface shangpinbiaoSpuVo {
        /**
         * 商品分类名称
         */
        cateGoryName?: string;
        /**
         * 商品品类ID
         */
        categoryId?: number; // int64
        /**
         * 商品编号
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人ID
         */
        createdBy?: number; // int64
        /**
         * 主键
         */
        id?: number; // int64
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人ID
         */
        modifiedBy?: number; // int64
        /**
         * 名称
         */
        name?: string;
        /**
         * 保质期
         */
        qualityGuaranteePeriod?: string;
        /**
         * 速查码
         */
        quickReferenceCode?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 最上级节点
         */
        rootCateGoryId?: number; // int64
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
         */
        status?: {
            name?: "y" | "n" | "del";
            disName?: string;
        };
    }
    /**
     * 商品存储表commodityStorage
     */
    export interface shangpincunchubiaocommodityStorage {
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
         * 库位编号
         */
        locationNumber?: string;
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 状态：正常：normal；丢失：lose；
         */
        status?: {
            name?: "normal" | "lose";
            disName?: string;
        };
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
         * 仓库种类：货架仓：shelf；平面仓：plane；
         */
        warehouseCategory?: {
            name?: "shelf" | "plane";
            disName?: string;
        };
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
    }
    /**
     * 商品存储日流水表commodityStorageDayHistory
     */
    export interface shangpincunchuriliushuibiaocommodityStorageDayHistory {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 流水日期
         */
        dayTime?: string; // date-time
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 库位编号
         */
        locationNumber?: string;
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 状态：正常：normal；丢失：lose；
         */
        status?: {
            name?: "normal" | "lose";
            disName?: string;
        };
        /**
         * 追溯码
         */
        traceCode?: string;
        /**
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库名称
         */
        warehouseName?: string;
    }
    /**
     * 商品库存信息表commodityStock
     */
    export interface shangpinkucunxinxibiaocommodityStock {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 板数
         */
        boradNumber?: number; // int32
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
         * 合同ID
         */
        contractId?: number; // int64
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
         * 客户ID
         */
        customerId?: number; // int64
        /**
         * 客户名称
         */
        customerName?: string;
        /**
         * 库存天数
         */
        days?: number; // int32
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 生产日期
         */
        manufactureDate?: string; // date-time
        /**
         * 件数
         */
        numbers?: number; // int32
        /**
         * 入库单号
         */
        orderNumber?: string;
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 入库时间
         */
        storageTime?: string; // date-time
        /**
         * 总重
         */
        totalWeight?: number;
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
     * 商品品类表spuCategory
     */
    export interface shangpinpinleibiaospuCategory {
        /**
         * 是否存在子级
         */
        boolStatus?: {
            name?: "y" | "n";
            disName?: string;
        };
        /**
         * 子节点
         */
        childList?: serviceType.shangpinpinleibiaospuCategory[];
        /**
         * 分类编码
         */
        code?: string;
        /**
         * 创建时间
         */
        created?: string; // date-time
        /**
         * 创建人ID
         */
        createdBy?: number; // int64
        /**
         * 主键
         */
        id?: number; // int64
        /**
         * 图片路径
         */
        imgUrl?: string;
        /**
         * 层级
         */
        level?: number; // int32
        /**
         * 最后修改时间
         */
        modified?: string; // date-time
        /**
         * 最后修改人ID
         */
        modifiedBy?: number; // int64
        /**
         * 分类名称
         */
        name?: string;
        /**
         * 父ID
         */
        parentId?: number; // int64
        /**
         * 产品描述
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
     * 调仓单表transferWarehouse
     */
    export interface tiaocangdanbiaotransferWarehouse {
        /**
         * 批次相关信息数据
         */
        batches?: serviceType.tiaocangshangpinpicixinxibiaotransferCommodityBatch[];
        /**
         * 合同ID
         */
        contractId?: number; // int64
        /**
         * 合同名称
         */
        contractName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建人名称
         */
        createByName?: string;
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
         * 作业人员相关信息
         */
        operators?: serviceType.tiaocangzuoyerenyuanxinxibiaotransferOperator[];
        /**
         * 备注
         */
        remark?: string;
        /**
         * 状态：未调仓：not_transfer；已调仓：transferred
         */
        status?: {
            name?: "not_submit" | "not_transfer" | "transferred";
            disName?: string;
        };
        /**
         * 调仓板数
         */
        transferBoard?: number; // int32
        /**
         * 调仓单号
         */
        transferNo?: string;
        /**
         * 调仓件数
         */
        transferNumber?: number; // int32
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
     * 调仓库位信息transferStorage
     */
    export interface tiaocangkuweixinxitransferStorage {
        /**
         * 批次编号
         */
        batchNumber?: string;
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
         * 源库位编号
         */
        sourceLocaltionNumber?: string;
        /**
         * 源仓库
         */
        sourceWarehouse?: string;
        /**
         * 目标库位编号
         */
        targetLocaltionNumber?: string;
        /**
         * 目标库位追溯码
         */
        targetTraceCode?: string;
        /**
         * 目标仓库
         */
        targetWarehouse?: string;
        /**
         * 源库位追溯码
         */
        traceCode?: string;
        /**
         * 调仓单批次ID
         */
        transferBatchId?: number; // int64
        /**
         * 调仓单ID
         */
        transferId?: number; // int64
        /**
         * 调仓件数
         */
        transferNumbers?: number; // int32
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
     * 调仓商品批次信息表transferCommodityBatch
     */
    export interface tiaocangshangpinpicixinxibiaotransferCommodityBatch {
        /**
         * 批次编号
         */
        batchNumber?: string;
        /**
         * 库存板数
         */
        board?: number; // int32
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
         * 合同ID
         */
        contractId?: number; // int64
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
         * 库存件数
         */
        numbers?: number; // int32
        /**
         * 件重(KG)
         */
        pieceWeight?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 库存总重(吨)
         */
        totalWeight?: number;
        /**
         * 调仓板数
         */
        transferBoard?: number; // int32
        /**
         * 调仓单ID
         */
        transferId?: number; // int64
        /**
         * 调仓件数
         */
        transferNumber?: number; // int32
        /**
         * 调仓库存总量(吨)
         */
        transferTotlaWeight?: number;
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
     * 调仓作业人员工作详情表transferOperatorDetail
     */
    export interface tiaocangzuoyerenyuangongzuoxiangqingbiaotransferOperatorDetail {
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
         * 调仓作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 源库位编号
         */
        sourceLocaltionNumber?: string;
        /**
         * 状态：未调仓：not_transfer；已调仓：transferred
         */
        status?: {
            name?: "not_submit" | "not_transfer" | "transferred";
            disName?: string;
        };
        /**
         * 调仓库位ID
         */
        transferId?: number; // int64
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
     * 调仓作业人员信息表transferOperator
     */
    export interface tiaocangzuoyerenyuanxinxibiaotransferOperator {
        /**
         * 所属区域ID
         */
        areaId?: number; // int64
        /**
         * 所属区域名称
         */
        areaName?: string;
        /**
         * 创建人
         */
        createBy?: number; // int64
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 所属分组ID
         */
        groupId?: number; // int64
        /**
         * 所属分组名称
         */
        groupName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 人员姓名
         */
        name?: string;
        /**
         * 作业人员ID
         */
        operaterId?: number; // int64
        /**
         * 作业人员用户ID
         */
        operaterUserId?: number; // int64
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 调仓单ID
         */
        transferId?: number; // int64
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
     * 月台管理表railwayPlatform
     */
    export interface yuetaiguanlibiaorailwayPlatform {
        /**
         * 月台号
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
         * 描述
         */
        remark?: string;
        /**
         * 状态,启用:y;停用:n;逻辑删除:del
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
     * 租仓申请表warehouseRentalApplication
     */
    export interface zucangshenqingbiaowarehouseRentalApplication {
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
         * 客户名称
         */
        customerName?: string;
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 租仓期限(以月为单位)
         */
        leasePeriod?: number; // int32
        /**
         * 租仓数量
         */
        number?: number; // int32
        /**
         * 租仓单号
         */
        orderNo?: string;
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 计划用仓时间
         */
        planStartTime?: string; // date-time
        /**
         * 处理记录列表
         */
        recordList?: serviceType.zucangshenqingchulijilubiaowarehouseRentalApplicationRecord[];
        /**
         * 其他信息
         */
        remark?: string;
        /**
         * 状态：未处理：wait_deal；已处理：deal；已驳回：reject；
         */
        status?: {
            name?: "wait_deal" | "deal" | "reject";
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
         * 仓库ID
         */
        warehouseId?: number; // int64
        /**
         * 仓库类型ID
         */
        warehouseTypeId?: number; // int64
        /**
         * 仓库类型名称
         */
        warehouseTypeName?: string;
    }
    /**
     * 租仓申请处理记录表warehouseRentalApplicationRecord
     */
    export interface zucangshenqingchulijilubiaowarehouseRentalApplicationRecord {
        /**
         * ID
         */
        id?: number; // int64
        /**
         * 操作时间
         */
        operateTime?: string; // date-time
        /**
         * 操作人
         */
        operator?: number; // int64
        /**
         * 租仓单ID
         */
        orderId?: number; // int64
        /**
         * 备注
         */
        remark?: string;
        /**
         * 操作状态：未处理：wait_deal；已处理：deal；驳回：reject；
         */
        status?: {
            name?: "wait_deal" | "deal" | "reject";
            disName?: string;
        };
    }
    /**
     * 作业分组管理taskGroup
     */
    export interface zuoyefenzuguanlitaskGroup {
        /**
         * 数量
         */
        count?: number; // int32
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
}
