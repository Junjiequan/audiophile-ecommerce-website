import Styled from 'styled-components';
import { COLORS,FONT,TRANSITION,WIDTH,SPACE,DEVICE } from '../../Constants'
import { ANIMATION } from '../../Animation'
import { Link as LinkR } from 'react-router-dom'

export const ProductNavContainer = Styled.div`
    display:block;
    margin:${SPACE.productNav};
    padding:0 2.4rem;
    width:100%;
    @media screen and ${DEVICE.md}{
        margin:${SPACE.productNavMD}
    }
    @media screen and ${DEVICE.sm}{
        margin:${SPACE.productNavSM};
    }
`
export const ProductNavWrapper = Styled.div`
    display:flex;
    max-width:${WIDTH.desktop};
    justify-content:space-between;
    width:100%;
    min-height:20.4rem;
    margin:0 auto;
    @media screen and ${DEVICE.md}{
        min-height:16.5rem;
    }
    @media screen and ${DEVICE.sm}{
        display:block;
        max-height:55rem;
        height:100%;
    }
`
export const ProductNavItem = Styled(LinkR)`
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
        background-image:url(${prop => prop["data-product-image"]});
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
    @media screen and ${DEVICE.md}{
        width:100%;
        &:before{
            top:-11rem;
        }
        &:nth-child(3):before{
            top:-10.5rem;
            background-size:73%;
        }
    }
    @media screen and ${DEVICE.sm}{
        padding-bottom:2rem;
        min-height:14rem;
        &:nth-child(2){
            margin:6rem 0;
        }
        &::before{
            background-size:42%;
            top:-10rem;
        }
        &:nth-child(3):before{
            top:-9.5rem;
            background-size:50%;
        }
    }
`
export const ProductTitle = Styled.span`
    pointer-events:none;
    margin-bottom:.5rem;
    ${FONT.menutitle};
    @media screen and ${DEVICE.sm}{
        font-size:1.5rem;
    }
`