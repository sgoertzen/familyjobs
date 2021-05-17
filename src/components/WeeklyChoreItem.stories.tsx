
import React from 'react';
import { storiesOf } from '@storybook/react';
import { WeeklyChoreItem }  from './WeeklyChoreItem';

storiesOf('WeeklyChoreItem', module)
    .add('Default', () => {
        return <WeeklyChoreItem name="Laundry" assignee="Cartman" />
    })