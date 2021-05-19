/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
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
        console.debug('Setting up loop interval')
        setLoop( setInterval(() => { setTime(new Date()) }, 1000) )
    }, [])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            console.debug('Clearing the loop interval')
            if (loop !== undefined) {
                clearInterval(loop);
            }
        }
      }, [loop]);

    return (<div css={[border, extraLargeText]}>
        {formatTime(time)}
      </div>)
}