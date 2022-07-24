
import React from 'react';
import { storiesOf } from '@storybook/react';
import { HAChoreList }  from './HAChoreList';

storiesOf('HAChoreList', module)
    .add('Single Day', () => {
        return <HAChoreList displayDay={new Date()}/>
    })