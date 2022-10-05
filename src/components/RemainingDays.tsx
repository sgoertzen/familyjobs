/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { differenceInDays } from 'date-fns';
import { useState } from 'react';
import { border, largeText } from '../styles/style'

type RemainingDaysProps = {
    target: Date
    countdownMessage: string
    expiredMessage: string
}

export const getRemainingMessage = (days:number, countdownMessage:string, expiredMessage:string) => {
    if (days > 0) {
        return countdownMessage.replace("%DAYS%", days.toString());
    } else {
        return expiredMessage
    }
}

export const RemainingDays = (props: RemainingDaysProps) => {
    const [day] = useState<Date>(props.target);

    const days = differenceInDays(day, new Date());

    return (<div css={[border, largeText, css({textAlign:'center'})]}>
        {getRemainingMessage(days, props.countdownMessage, props.expiredMessage)}
      </div>)
}