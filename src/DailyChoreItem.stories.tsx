
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DailyChoreItem }  from './DailyChoreItem';

storiesOf('DailyChoreItem', module)
    .add('Default', () => {
        return <DailyChoreItem name="Clean nest" assignee="Big Bird" />
    })