/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import { largeText } from '../styles/style'
import { css } from '@emotion/react'

type ChoreProps = {
    name: string,
    assignee: string
}

const choreSpacing = css({
    margin: '10px'
})

const choreNameStyle = css({
    fontWeight: 'lighter'
})

const assigneeStyle = css({
    fontWeight: 'bold',
    marginLeft: '.5em'
})

export const DailyChoreItem = ({name, assignee}: ChoreProps) => {
    return (
            <div css={[choreSpacing, largeText]}>
                <span css={choreNameStyle}>{ name }</span>:
                <span css={assigneeStyle}>{ assignee }</span>
            </div>
        )
};