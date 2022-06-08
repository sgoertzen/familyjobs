
import React from 'react';
import { storiesOf } from '@storybook/react';
import { RemainingDays }  from './RemainingDays';

storiesOf('Remaining Days', module)
    .add('Default', () => {
        return <RemainingDays target={new Date("05/26/2050")} countdownMessage="%DAYS% left" expiredMessage=""/>
    })
    .add('Done', () => {
        return <RemainingDays target={new Date("05/26/2021")} countdownMessage="" expiredMessage="Target date passed"/>
    })