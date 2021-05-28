import { format } from 'date-fns';
import React from 'react';


describe('Clock formating', () => {
    it ('Single digit seconds', () => {
        let testTime = new Date("2011-10-10T13:10:02")
        expect(format(testTime, "h:mm:ss aaa")).toEqual("1:10:02 pm")
    })

})