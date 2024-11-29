import { LocaleType } from '@univerjs/core';
import { BooleanNumber, SheetTypes } from '@univerjs/core';
export const getSheetData = (
    cellData: Record<string, Record<string, {v:string|number}>>,
    totalCount: number,
    coloum: number,
) => {
    return {
        id: 'workbook-01',
        locale: LocaleType.ZH_CN,
        name: 'universheet',
        appVersion: '3.0.0-alpha',
        sheets: {
            'sheet-01': {
                type: SheetTypes.GRID,
                id: 'sheet-01',
                cellData: cellData,
                name: 'sheet1',
                hidden: BooleanNumber.FALSE,
                zoomRatio: 1,
                scrollTop: 200,
                scrollLeft: 100,
                defaultColumnWidth: 93,
                defaultRowHeight: 27,
                status: 1,
                showGridlines: 1,
                hideRow: [],
                hideColumn: [],
                rowCount: totalCount,
                columnCount: coloum,
                rowHeader: {
                    width: 46,
                    hidden: BooleanNumber.FALSE,
                },
                columnHeader: {
                    height: 20,
                    hidden: BooleanNumber.FALSE,
                },

                rightToLeft: BooleanNumber.FALSE,
                pluginMeta: {},
            },
        },
    };
};
