
import React from 'react';
import { storiesOf } from '@storybook/react';
import { RemainingDays }  from './RemainingDays';

storiesOf('Remaining Days', module)
    .add('Default', () => {
        return <RemainingDays target={new Date("05/26/2022")} />
    })
    .add('Done', () => {
        return <RemainingDays target={new Date("05/26/2021")} />
    })