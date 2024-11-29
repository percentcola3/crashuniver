
import { Tools } from '@univerjs/core';
import { LocaleType, createUniver, defaultTheme } from '@univerjs/presets';
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core';
import UniverPresetSheetsCoreZhCN from '@univerjs/presets/preset-sheets-core/locales/zh-CN';
import { UniverSheetsFilterPreset } from '@univerjs/presets/preset-sheets-filter';
import UniverPresetSheetsFilterZhCN from '@univerjs/presets/preset-sheets-filter/locales/zh-CN';
import { UniverSheetsFindReplacePreset } from '@univerjs/presets/preset-sheets-find-replace';
import UniverPresetSheetsFindReplaceZhCN from '@univerjs/presets/preset-sheets-find-replace/locales/en-US';
import { UniverSheetsSortPreset } from '@univerjs/presets/preset-sheets-sort';
import SheetsSortZhCN from '@univerjs/presets/preset-sheets-sort/locales/zh-CN';
import { UniverSheetsDataValidationPreset } from '@univerjs/presets/preset-sheets-data-validation';
import UniverPresetSheetsDataValidationZhCN from '@univerjs/presets/preset-sheets-data-validation/locales/zh-CN';
 
import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css'
import '@univerjs/presets/lib/styles/preset-sheets-core.css';
import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css';
import '@univerjs/presets/lib/styles/preset-sheets-filter.css';
import '@univerjs/presets/lib/styles/preset-sheets-sort.css';

export const setUp =(container)=>{
    const { univerAPI, univer } = createUniver({
        locale: LocaleType.ZH_CN,
        locales: {
            zhCN: Tools.deepMerge(
                {},
                UniverPresetSheetsCoreZhCN,
                UniverPresetSheetsFilterZhCN,
                SheetsSortZhCN,
                UniverPresetSheetsFindReplaceZhCN,
                UniverPresetSheetsDataValidationZhCN
            ),
        },
        theme: defaultTheme,
        presets: [
            UniverSheetsFilterPreset(),
            UniverSheetsCorePreset({
                container: container,
            }),
            UniverSheetsDataValidationPreset(),
            UniverSheetsSortPreset(),
            UniverSheetsFindReplacePreset(),
        ],
    });
    return { univerAPI, univer }
}