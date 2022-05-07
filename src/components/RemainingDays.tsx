/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { differenceInBusinessDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { border, largeText } from '../styles/style'

type RemainingDaysProps = {
    target: Date
}

export const RemainingDays = (props: RemainingDaysProps) => {
    const [day, setDay] = useState<Date>(props.target);
    const [timeout, setTimeout] = useState<NodeJS.Timeout>();
    
    useEffect(() => {
        setTimeout( setInterval(() => { setDay(new Date()) }, 60000) )
    }, [])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            if (timeout !== undefined) {
                clearInterval(timeout);
            }
        }
      }, [timeout]);

    const days = differenceInBusinessDays(day, new Date());
    let message = ""
    if (days > 0) {
        message = `Only ${days} days of school left!`
    } else {
        message = 'School is out for summer!'
    }

    return (<div css={[border, largeText, css({textAlign:'center'})]}>
        {message}
      </div>)
}