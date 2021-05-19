
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChoreList }  from './ChoreList';

storiesOf('ChoreList', module)
    .add('Single Day', () => {
        return <ChoreList displayDay={new Date()}/>
    })