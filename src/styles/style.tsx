
import { css } from '@emotion/react'

export const COLOR_MAIN = '#3d5a80'
// export const COLOR_MAIN = '#9EACBF' todo: Move this to HAApp.tsx
export const COLOR_SECONDARY = '#6eb4d1'
export const COLOR_HIGHLIGHT = '#17301C'
export const COLOR_ACCENT = '#989572'
export const COLOR_BACKGROUND = '#989572'


export const border = css({
    border: '4px solid ' + COLOR_ACCENT,
    borderRadius: '15px',
    padding: '10px',
    margin: '10px'
})

export const text = css({
    color: COLOR_MAIN
})

export const accentText = css({
    color: 'white'
})

export const smallText = [text, css({
    fontSize: '1em'
})]

export const largeText = [text, css({
    fontSize: '2em'
})]
export const extraLargeText = [text, css({
    fontSize: '6em'
})]

export const smallButton = css({
    border: '4px solid ' + COLOR_HIGHLIGHT,
    borderRadius: '7px',
    backgroundColor: COLOR_ACCENT,
    color: 'white',
    padding: '5px'
})

export const iconButton = css({
    border: '4px solid ' + COLOR_HIGHLIGHT,
    borderRadius: '15px',
    backgroundColor: COLOR_ACCENT,
    color: 'white',
    padding: '25px'
  })
