import React from 'react';
import { storiesOf } from '@storybook/react';
import { EasterEgg } from './EasterEgg';

storiesOf('Easter Egg', module)
    .add('Random Egg', () => {
        return <EasterEgg/>
    })