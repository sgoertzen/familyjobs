/** @jsxImportSource @emotion/react */
import { LeftChevron, RightChevron } from '../images/Chevrons'
import { iconButton } from '../styles/style'

export enum ChevronDirection {
    Right, Left
}

type ChevronButtonProps = {
    direction: ChevronDirection
    onClick: React.MouseEventHandler<HTMLButtonElement>
}


export const ChevronButton = (props: ChevronButtonProps) => {
    let chevButton = (props.direction === ChevronDirection.Left) ?
        <LeftChevron width="24px" height="48px"/> :
        <RightChevron width="24px" height="48px"/>


    return (
        <button 
            css={iconButton} 
            onClick={props.onClick} 
            title={props.direction === ChevronDirection.Left?'leftchevron':'rightchevron'}>
            {chevButton}
        </button>
    )
};