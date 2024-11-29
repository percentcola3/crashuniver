import { BasePageResponse } from "../Main/types";

export interface IExceData {
    /** 卡片数据列表，Map<String, String>数组类型，无约束，非必填 */
    dataList: { [key: string]: string }[];
    /** 分页信息，BasePageResponse 类型，无约束，非必填 */
    pageInfo: BasePageResponse;
    /** 卡片标题数据，CardDataTitleDataVO 类型，无约束，非必填 */
    /** 卡片数据列表字段说明，DataColumnVO 数组类型，无约束，非必填 */
    dataColumnList: DataColumnVO[];
}


// 数据列
export interface DataColumnVO {
 
    /** 列说明，字符串类型，无约束，非必填 */
    columnType?: string;
    /** 列名称，字符串类型，无约束，非必填 */
    columnName: string;
    /** 列字段，字符串类型，无约束，非必填 */
    columnField: string;
}