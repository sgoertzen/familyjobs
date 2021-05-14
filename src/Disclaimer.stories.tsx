
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Disclaimer }  from './Disclaimer';

storiesOf('Disclaimer', module)
    .add('Default', () => {
        return <Disclaimer />
    })