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
    margin: '15px'
})

export const DailyChoreItem = ({name, assignee}: ChoreProps) => {
    return (
        <div css={[choreSpacing, largeText]}>{ name }: { assignee }</div>
        )
};