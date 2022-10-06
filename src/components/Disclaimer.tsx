/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

const disclaimerStyle = css({
    color: '#888888'
  })
  
export const Disclaimer = () => (
    <div css={disclaimerStyle}>
        Morning chores before 12:30pm, night chores before 6:30pm
    </div>
);