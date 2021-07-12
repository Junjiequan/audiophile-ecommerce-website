import Styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
import { COLORS, TRANSITION, FONT } from './Constants'
import arrowIcon from './assets/shared/desktop/icon-arrow-right.svg'
import { ProductNavItem } from './components/ProductNav/ProductNavElements'

export const GlobalBtnBrown = Styled.button`
    display:flex;
    width:16rem;
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
        background-color:${COLORS.brownDark};
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
        /* transform:translateY(2px); */
        top:2px;
    }
`
export const GlobalBtnBlack = Styled.button`
    display:flex;
    width:16rem;
    height:4.8rem;
    justify-content:center;
    align-items:center;
    background-color:${COLORS.blackStupid2};
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
        background-color:${COLORS.black};
        transition:height ${TRANSITION.ease};
    }
    &:after{
        position:absolute;
        content:attr(data-text);
        color:${COLORS.white}
    }
    &:hover:before{
        height:0;
    }
    &:focus-visible:before{
        height:0;
    }
    &:focus-visible{
        outline-color:${COLORS.white};
    }
    &:active{
        transform:translateY(2px);
    }
`
export const GlobalBtnWhite = Styled.button`
    display:flex;
    width:16rem;
    height:4.8rem;
    border:1px solid ${COLORS.black};
    justify-content:center;
    align-items:center;
    background-color:transparent;
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
        height:0;
        width:100%;
        top:0;
        display:flex;
        justify-content:center;
        align-items:center;
        white-space: nowrap;
        background-size:100% 100%;
        background-color:${COLORS.black};
        transition:height ${TRANSITION.ease};
    }
    &:after{
        position:absolute;
        content:attr(data-text);
        color:${COLORS.black};
        transition:color ${TRANSITION.ease};
    }
    &:hover:before{
        height:100%;
    }
    &:hover:after{
        color:${COLORS.white};
    }
    &:focus-visible:before{
        height:100%;
    }
    &:focus-visible:after{
        color:${COLORS.white};
    }
    &:focus-visible{
        outline-color:${COLORS.black};
    }
    &:active{
        transform:translateY(2px);
    }
`
export const GlobalArrowBtn = Styled.button`
    pointer-events:none;
    display:flex;
    align-items:center;
    width:5.7rem;
    height:1.8rem;
    ${FONT.subtitle};
    position:relative;
    transition: color ${TRANSITION.easeFast};
    &:before{
        position:absolute;
        content:attr(data-text);
        opacity:0.4;
        left:0;
        color:${COLORS.black};
        transition: all ${TRANSITION.ease};
    }
    &:after{
        content:url(${arrowIcon});
        position:absolute;
        right:0;top:.1rem;bottom:0;
        display:flex;
        align-items:center;
        height:100%;
    };
    ${ProductNavItem}:hover &:before{
        opacity:1;
        color:${COLORS.brownDark};
    }
    &:focus-visible{
        color:${COLORS.brownDark};
    }
`
export const GlobalGoBackBtn = Styled.button`

`