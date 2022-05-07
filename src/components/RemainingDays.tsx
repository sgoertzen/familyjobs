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
        return `Only ${days} days of school left!`
    } else {
        return 'School is out for summer!'
    }
}

export const RemainingDays = (props: RemainingDaysProps) => {
    const [day] = useState<Date>(props.target);

    const days = differenceInBusinessDays(day, new Date());

    return (<div css={[border, largeText, css({textAlign:'center'})]}>
        {getRemainingMessage(days)}
      </div>)
}