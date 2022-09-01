/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { format } from 'date-fns'
import { smallText } from '../styles/style'

type HADayDisplayProps = {
    day: Date
}

const dayStyle = css({
    fontWeight: 'bold'
})
export const HADayDisplay = (props:HADayDisplayProps) => {
    return <div css={css(smallText, dayStyle)}>{format(props.day, "eeee 'Chores'")}</div>
}