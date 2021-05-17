import React from 'react';

import {formatTime} from './Clock'

describe('Clock formating', () => {
    // TODO: Add more tests here!
    it ('Single digit seconds', () => {
        let testTime = new Date("2011-10-10T13:10:02")
        expect(formatTime(testTime)).toEqual("1:10:02 pm")
    })

})