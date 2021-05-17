import React from 'react';

import {weekOfYear} from './ChoreList'

describe('Week computation', () => {
    it ('First week of year', () => {
        let testTime = new Date("2021-01-01T13:10:02")
        expect(weekOfYear(testTime)).toEqual(53);
    })
    it ('Second week of year', () => {
        let testTime = new Date("2021-01-05T13:10:02")
        expect(weekOfYear(testTime)).toEqual(1);
    })
    it ('Last week of year', () => {
        let testTime = new Date("2021-12-31T13:10:02")
        expect(weekOfYear(testTime)).toEqual(52);
    })

})