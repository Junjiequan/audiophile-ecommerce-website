import Styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { COLORS, TRANSITION, FONT } from './Constants'
import arrowIcon from './assets/shared/desktop/icon-arrow-right.svg'
import { ProductListItem, } from './components/ProductList/ProductListElements'

export const GlobalBtnBrown = Styled.button`
    display:flex;
    width:16rem;
    height:4.8rem;
    justify-content:center;
    align-items:center;
    background-color:${COLORS.brownLight};
    text-transform:uppercase;
    letter-spacing:.1rem;
    font-size:1.3rem;
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
        transform:translateY(2px);
    }
`
export const GlobalArrowBtn = Styled(LinkR)`
    pointer-events:none;
    display:flex;
    align-items:center;
    width:5.7rem;
    height:1.8rem;
    ${FONT.subtitle};
    position:relative;
    transition: color ${TRANSITION.ease};
    &:before{
        position:absolute;
        content:attr(data-text);
        left:0;
    }
    &:after{
        content:url(${arrowIcon});
        position:absolute;
        right:0;top:.1rem;bottom:0;
        display:flex;
        align-items:center;
        height:100%;
        transition: right ${TRANSITION.ease};
    };
    ${ProductListItem}:hover &{
        color:${COLORS.brownDark};
    }
    ${ProductListItem}:hover &:after{
        right:-0.7rem;
    }
    &:focus-visible{
        color:${COLORS.brownDark};
    }
    &:focus-visible:after{
        right:-0.7rem;
    }
`