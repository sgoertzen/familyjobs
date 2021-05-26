import React from 'react';
import { storiesOf } from '@storybook/react';
import { DayDisplay }  from './DayDisplay';

storiesOf('Day Display', module)
    .add('May 1, 2000', () => {
        return <DayDisplay day={new Date('2000-05-01')}/>
    })
    .add('December 31, 2050', () => {
        return <DayDisplay day={new Date('2050-12-31')}/>
    })
    .add('Leap Day', () => {
        return <DayDisplay day={new Date('2020-02-29')}/>
    })