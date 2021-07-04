import Styled from 'styled-components';
import { COLORS,FONT,TRANSITION } from '../../Constants'
import { ANIMATION } from '../../Animation'

export const ProductListWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    min-height:20.4rem;
`
export const ProductListItem = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    width:35rem;
    background: ${COLORS.grayDark};
    border-radius:.8rem;
    padding-bottom:3rem;
    cursor:pointer;
    position:relative;
    &:before{
        pointer-events:none;
        position:absolute;
        content:'';
        display:flex;
        justify-content:center;
        background-image:url(${prop => prop.productImage});
        background-size:64%;
        background-position:center;
        background-repeat:no-repeat;
        width:100%;
        min-height:25rem;
        top:-9rem;
        transition:all ${TRANSITION.ease};
    }
    &:hover:before{
        animation: ${ANIMATION.jelloHorizontal} 0.4s linear both;
    }
    &:nth-child(2){
        margin:0 1rem;
    }
`
export const ProductTitle = Styled.span`
    pointer-events:none;
    margin-bottom:1.5rem;
    ${FONT.menutitle};
`