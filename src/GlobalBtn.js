import Styled from 'styled-components';
import { COLORS, TRANSITION } from './Constants'

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
    &:active{
        transform:translateY(2px);
    }
`