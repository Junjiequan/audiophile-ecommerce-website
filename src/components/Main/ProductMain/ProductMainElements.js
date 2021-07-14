import Styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { HEIGHT,WIDTH,SPACE,COLORS,TRANSITION,DEVICE,FONT } from '../../../Constants';


export const ProductMainContainer = Styled.section`
    margin-top:${HEIGHT.navHeight};
    padding:${SPACE.container};
    display:flex;
    justify-content:center;
`
export const ProductMainWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    height:100%;
`
export const Button = Styled(LinkR)`
    display:block;
    width:5.7rem;
    margin:7.9rem 0 5.6rem;
    position:relative;
    color:hsla(0,0%,0%,.7);
    &::after{
        position:absolute;
        content:'';
        width:0;
        left:0;bottom:0;
        height:2px;
        background:${COLORS.brownDark};
        transition:width ${TRANSITION.ease};
    }
    &:hover:after{
        width:100%;
    }
`
export const ProductWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    @media screen and ${DEVICE.md}{
        margin-bottom:10rem;
        flex-direction:column;
        align-items:center;
    }
    @media screen and ${DEVICE.sm}{
        margin-bottom:4rem;
    }
`
export const ProductImgWrapper = Styled.div`
    display:flex;
    max-width:54rem;
    width:100%;
    background:${COLORS.grayDark};
    border-radius:8px;
    margin:${(props => props["data-reversed"]? '0 0 0 2rem': '0 2rem 0 0')};
    @media screen and ${DEVICE.md}{
        margin:0;
        max-width:100%;
        height:35.2rem;
        justify-content:center;
    }
`
export const ProductImg = Styled.img`
    object-fit:cover;
    max-width:100%;
    border-radius:8px;
    @media screen and ${DEVICE.md}{
        max-height:100%;
        object-fit:contain;
    }
`
export const PorudctDetails = Styled.div`
    display:flex;
    flex-direction:column;
    max-width:44.5rem;
    width:100%;
    height:100%;
    margin:10.9rem 0;
    @media screen and ${DEVICE.md}{
        align-items:center;
        text-align:center;
        max-width:57.2rem;
        margin:5.9rem 0;
    }
    @media screen and ${DEVICE.sm}{
    }
`
export const ProductFeature = Styled.p`
    color:${COLORS.brownDark};
    ${FONT.overline};
    margin-bottom:1.6rem;
`
export const ProductTitle = Styled.h2`
    margin-bottom:3.2rem;
    font-weight:700;
    white-space:pre-wrap;
    @media screen and ${DEVICE.sm}{
        text-align:center;
        font-size:2.8rem;
        line-height:3.9rem;
        letter-spacing:.1rem;
    }
`
export const ProductInfo = Styled.p`
    font-weight:400;
    opacity:.6;
`
export const ProductPrice = Styled.p`
    margin:3.2rem 0 4.7rem;
    font-weight:700;
    font-size:1.8rem;
`

export const AddCartWrapper = Styled.div`
    display:flex;
    align-items:center;
`
export const AddCartAmount = Styled.span`
    display:flex;
    width:12rem;
    height:4.8rem;
    background:${COLORS.grayDark};
    margin-right:1.6rem;
    justify-content:center;
    align-items:center;
    font-weight:700;
    position:relative;
    user-select:none;
`
export const AddCartDecrease = Styled.span`
    position:absolute;
    display:flex;
    justify-content:Center;
    width:5rem;
    left:0;
    cursor:pointer;
    color:hsla(0,0%,0%,0.3);
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
`
export const AddCartIncrease = Styled.span`
    position:absolute;
    display:flex;
    justify-content:Center;
    width:5rem;
    cursor:pointer;
    right:0;
    color:hsla(0,0%,0%,0.3);
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
`

export const AddCartBtn = Styled.button`
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