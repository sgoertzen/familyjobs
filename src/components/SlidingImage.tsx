/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react'

export enum SlideFrom {
    FromRight, FromBottom, FromTop
}

type SlidingImageProps = {
    src: string,
    from: SlideFrom,
    width: number,
    height: number
}

export const SlidingImage = (props: SlidingImageProps) => {
    
    const framesFromRight = keyframes({ 
        from: { top: 'calc(100% - ' + props.height + 'px)', left: '100%' },
        '15%': { left: 'calc(100% - ' + props.width +  'px)' },
        '85%': { left: 'calc(100% - ' + props.width +  'px)' },
        to: { top: 'calc(100% - ' + props.height + 'px)', left: '100%'
        }
    })

    const framesFromBottom = keyframes({
        from: { top: '100%', left: 'calc(50% - ' + props.width / 2 + 'px)' },
        '15%': { top: 'calc(100% - ' + props.height +  'px)' },
        '85%': { top: 'calc(100% - ' + props.height +  'px)' },
        to: { top: '100%', left: 'calc(50% - ' + props.width / 2 + 'px)' }
    })

    const framesFromTop = keyframes({
        from: { top: '-' + props.height +  'px', left: 'calc(50% - ' + props.width / 2 + 'px)' },
        '15%': { top: '0%' },
        '85%': { top: '0%' },
        to: { top: '-' + props.height +  'px', left: 'calc(50% - ' + props.width / 2 + 'px)' }
    })

    const getFrames = (from:SlideFrom) => {
        switch(from){
            case SlideFrom.FromTop:
                return framesFromTop
            case SlideFrom.FromBottom:
                return framesFromBottom
            case SlideFrom.FromRight:
                return framesFromRight
        }
    }

    const imageStyleBetter = css({
        animationName: getFrames(props.from),
        animationDuration: '4s',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'normal',
        animationIterationCount: '1',
        position: 'fixed',
        top: '100%',
        left: '100%'
    })

    return (
        <img css={imageStyleBetter} src={props.src} alt="Darwin" width={props.width} height={props.height}/>
    )
};