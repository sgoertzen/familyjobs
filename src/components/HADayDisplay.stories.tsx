import React from 'react';
import { storiesOf } from '@storybook/react';
import { HADayDisplay }  from './HADayDisplay';

storiesOf('HADay Display', module)
    .add('May 1, 2000', () => {
        return <HADayDisplay day={new Date('2000-05-01')}/>
    })
    .add('December 31, 2050', () => {
        return <HADayDisplay day={new Date('2050-12-31')}/>
    })
    .add('Leap Day', () => {
        return <HADayDisplay day={new Date('2020-02-29')}/>
    })