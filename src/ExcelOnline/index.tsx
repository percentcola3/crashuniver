import React, { useEffect, useRef, useState } from 'react';


import { FUniver, Univer, UniverInstanceType } from '@univerjs/core';

import { getSheetData } from './uitil';
import { setUp } from './SetUp';

export default () => {
   
    const ref = useRef<HTMLDivElement>();


    useEffect(() => {
        const { univer, univerAPI } = setUp(ref.current);
        univer?.createUnit(
            UniverInstanceType.UNIVER_SHEET,
            getSheetData(
                {
                    0: {
                       0:{v:'age'} 
                    },
                    1: {
                        0:{v:10} 
                     },
                     2: {
                        0:{v:20} 
                     },
                     3: {
                        0:{v:50} 
                     },
                     4: {
                        0:{v:6} 
                     },
                },
                200,
                20,
            ),
        );
    }, []);

    return (
        <div ref={ref} style={{ width: '100%', height: 'calc(100vh - 50px)' }}></div>
    );
};
