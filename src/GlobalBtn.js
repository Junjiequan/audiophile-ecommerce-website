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
        content:attr(data-text);
        position:absolute;
        height:100%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        white-space: nowrap;
        background-color:${COLORS.brownDark};
        transition:width ${TRANSITION.ease};
    }
    &:hover:before{
        width:0;
    }


`