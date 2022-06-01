/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { differenceInBusinessDays } from 'date-fns';
import { useState } from 'react';
import { border, largeText } from '../styles/style'

type RemainingDaysProps = {
    target: Date
}

export const getRemainingMessage = (days:number) => {
    if (days > 0) {
        return `Only ${days} days until we have a house`
    } else {
        return 'We are in our new house!'
    }
}

export const RemainingDays = (props: RemainingDaysProps) => {
    const [day] = useState<Date>(props.target);

    const days = differenceInBusinessDays(day, new Date());

    return (<div css={[border, largeText, css({textAlign:'center'})]}>
        {getRemainingMessage(days)}
      </div>)
}