import Styled from 'styled-components'
import { COLORS, WIDTH, TRANSITION, DEVICE} from '../../Constants'
import { ANIMATION } from '../../Animation';
import { Link as LinkR } from 'react-router-dom';


export const CartModalContainer = Styled.div`
    z-index:99999;
    position:fixed;
    width:100%;
    height:100%;
    background-color: hsla(0,0%,0%,0.5);
    display:${props=>props['data-display'] ? 'flex' : 'none'};
    animation: ${ANIMATION.fadeIn} 0.5s ease-in-out forwards;
    justify-content:center;
    padding:0 2rem;
`
export const CartModalWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    display:flex;
    width:100%;
    justify-content:flex-end;
`
export const Modal = Styled.div`
    width:37.7rem;
    margin-top:12rem;
    height:fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:white;
    border-radius:8px;
    padding:3.1rem 3.3rem;
    transition: opacity ${TRANSITION.ease};
    animation: ${ANIMATION.fadeIn} 0.5s ease-in-out forwards;
`
export const FirstRow = Styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`
export const Amount = Styled.p`
    font-size:1.8rem;
    font-weight:700;
`
export const RemoveBtn = Styled.button`
    text-decoration: underline;
    cursor:pointer;
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
`
export const ItemsWrapper = Styled.ul`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    justify-content:space-between;
    margin:2.2rem 0;
    max-height:60rem;
    padding-right:.1rem;
    overflow-y: auto;
    overflow-x: hidden;
    transition: padding ${TRANSITION.ease};
`
export const Items = Styled.li`
    display:flex;
    align-items:center;
    width:100%;
    margin:1rem;
`
export const ItemImg = Styled.img`
    object-fit:cover;
    max-width:100%;
    border-radius:8px;
`
export const ItemInfo = Styled.p`
    display:flex;
    width:100%;
    flex-direction:column;
    font-weight:700;
    margin:0 1.2rem;
    text-transform:uppercase;
    @media screen and ${DEVICE.sm}{
        margin:0 1rem;
    }
`
export const ItemPrice = Styled.span`
    opacity:0.5;
`
export const ItemAmount = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    max-width:9.6rem;
    height:3.2rem;
    background-color:${COLORS.grayDark};
    color:${COLORS.black};
    font-weight:700;
`
export const ItemDecrement = Styled.button`
    width:4rem;
    height:100%;
    cursor:pointer;
    color:hsla(0,0%,0%,0.3);
    font-weight:700;
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
    &:focus-visible{
        outline-offset:-5px;
    }
`
export const ItemIncrement = Styled.button`
    height:100%;
    cursor:pointer;
    width:4rem;
    color:hsla(0,0%,0%,0.3);
    font-weight:700;
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
    &:focus-visible{
        outline-offset:-5px;
    }
`
export const Total = Styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin-bottom:2.4rem;
`
export const TotalP = Styled.p`
    text-transform:uppercase;
    opacity:.5;
`
export const TotalCost = Styled.div`
    font-weight:700;
    font-size:1.8rem;
`
export const CheckOutBtn = Styled(LinkR)`
    display:flex;
    width:100%;
    height:4.8rem;
    justify-content:center;
    align-items:center;
    background-color:${COLORS.brownLight};
    color:${COLORS.white};
    text-transform:uppercase;
    letter-spacing:.1rem;
    font-size:1.3rem;
    font-weight:700;
    cursor:pointer;
    transition: background-color ${TRANSITION.ease};
    position:relative;
    &:before{
        content:'';
        position:absolute;
        height:100%;
        width:100%;
        bottom:0;
        display:flex;
        justify-content:center;
        align-items:center;
        white-space: nowrap;
        background-size:100% 100%;
        background-color:${props=>props['data-black']? COLORS.black: COLORS.brownDark};
        transition:height ${TRANSITION.ease};
    }
    &:after{
        position:absolute;
        content:attr(data-text);
    }
    &:hover:before{
        height:0;
    }
    &:focus-visible:before{
        height:0;
    }
    &:active{
        top:2px;
    }
`