/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { smallButton, smallText, accentText } from '../styles/style'

type emptyFunction = () => void;

type TimedButtonProps = {
    onClick: emptyFunction
    timeoutMilliseconds: number
}

// This button will auto execute its click action after the given countdown time
export const TimedButton = (props: TimedButtonProps) => {

    
    const [timer, setTimer] = useState<NodeJS.Timeout>()

    useEffect(() => {
        setTimer(setTimeout(props.onClick, props.timeoutMilliseconds))
    },  [props])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        }
      }, [timer]);


    return (
        <button css={[smallButton, smallText, accentText]} onClick={props.onClick}>Back To Today</button>
    )
}