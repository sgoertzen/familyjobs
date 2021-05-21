/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { format } from 'date-fns'
import { largeText } from '../styles/style'

type DayDisplayProps = {
    day: Date
}

const dayStyle = css({
    fontWeight: 'bold'
})
export const DayDisplay = (props:DayDisplayProps) => {
    return <div css={css(largeText, dayStyle)}>{format(props.day, "eeee MMM do 'Chores'")}</div>
}