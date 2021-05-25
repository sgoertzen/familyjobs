import React from 'react'
import { storiesOf } from '@storybook/react'
import { TimedButton } from './TimedButton'

storiesOf('TimedButton', module)
    .add('Default', () => {
        return <TimedButton onClick={() => {console.log('Timed button triggered')}} timeoutMilliseconds={1000} />
    })