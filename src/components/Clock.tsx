/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useEffect, useState } from 'react';
import { border, extraLargeText } from '../styles/style'

export const formatTime = (time:Date) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = "am";
    if (hours > 11) {
        ampm = "pm"
    }
    if (hours > 12) {
        hours = hours - 12
    }
    return hours + ":" + (minutes<10 ? "0": "") + minutes + ":" + (seconds<10 ? "0": "")  + seconds + " " + ampm;
}

export const Clock = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [loop, setLoop] = useState<NodeJS.Timeout>();
    
    useEffect(() => {
        setLoop( setInterval(() => { setTime(new Date()) }, 1000) )
    }, [])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            if (loop !== undefined) {
                clearInterval(loop);
            }
        }
      }, [loop]);

    return (<div css={[border, extraLargeText, css({textAlign:'center'})]}>
        {formatTime(time)}
      </div>)
}