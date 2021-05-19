/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { format } from 'date-fns'
import { largeText } from '../styles/style'

type DayDisplayProps = {
    day: Date
}

export const DayDisplay = (props:DayDisplayProps) => {
    return <div css={largeText}>{format(props.day, "eeee MMM do 'chores'")}</div>
}