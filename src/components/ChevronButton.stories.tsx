
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChevronButton, ChevronDirection }  from './ChevronButton';

storiesOf('Chevron Button', module)
    .add('Left', () => {
        return <ChevronButton direction={ChevronDirection.Left} onClick={() => {}}/>
    })
    .add('Right', () => {
        return <ChevronButton direction={ChevronDirection.Right} onClick={() => {}}/>
    })