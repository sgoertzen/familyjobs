/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { border, extraLargeText } from '../styles/style'

export const Clock = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [timeout, setTimeout] = useState<NodeJS.Timeout>();
    
    useEffect(() => {
        setTimeout( setInterval(() => { setTime(new Date()) }, 1000) )
    }, [])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            if (timeout !== undefined) {
                clearInterval(timeout);
            }
        }
      }, [timeout]);

    return (<div css={[border, extraLargeText, css({textAlign:'center'})]}>
        {format(time, "h:mm:ss aaa")}
      </div>)
}