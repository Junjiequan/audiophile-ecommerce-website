import Styled from 'styled-components';
import { WIDTH,SPACE,COLORS,TRANSITION,DEVICE,FONT } from '../../../Constants';


export const ProductMainContainer = Styled.section`
    padding:${SPACE.container};
    display:flex;
    justify-content:center;
`
export const ProductMainWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    height:100%;
`

////////////////////////////////////////////////
            //GoBackBtn component
////////////////////////////////////////////////

export const Button = Styled.button`
    cursor:pointer;
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

////////////////////////////////////////////////
            //Product component
////////////////////////////////////////////////

export const ProductWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    margin:${SPACE.ProductMainMargin};
    @media screen and ${DEVICE.sm}{
        margin:${SPACE.ProductMainMarginMD};
        flex-direction:column;
        align-items:center;
    }
    @media screen and ${DEVICE.sm}{
        margin:${SPACE.ProductMainMarginSM};
    }
`
export const ProductImgWrapper = Styled.div`
    display:flex;
    max-width:54rem;
    width:100%;
    background:${COLORS.grayDark};
    border-radius:8px;
    margin:0 6.9rem 0 0;
    @media screen and ${DEVICE.md}{
        margin:0 4rem 0 0;
    }
    @media screen and ${DEVICE.sm}{
        margin:0;
        max-width:100%;
        justify-content:center;
    }
`
export const ProductImg = Styled.img`
    object-fit:cover;
    max-width:100%;
    border-radius:8px;
    @media screen and ${DEVICE.sm}{
        max-height:32.7rem;
    }
`
export const PorudctDetails = Styled.div`
    display:flex;
    flex-direction:column;
    max-width:44.5rem;
    width:100%;
    height:100%;
    margin:10.9rem 0;
    @media screen and ${DEVICE.sm}{
        max-width:57.2rem;
        margin:5.9rem 0;
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

////////////////////////////////////////////////
            //AddCart component
////////////////////////////////////////////////

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
export const AddCartDecrease = Styled.button`
    position:absolute;
    display:flex;
    justify-content:Center;
    width:3rem;
    font-size:1.8rem;
    left:1rem;
    cursor:pointer;
    color:hsla(0,0%,0%,0.3);
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
`
export const AddCartIncrease = Styled.button`
    position:absolute;
    display:flex;
    font-size:1.8rem;
    justify-content:Center;
    width:3rem;
    cursor:pointer;
    right:1rem;
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
        top:2px;
    }
`

////////////////////////////////////////////////
            //Features component
////////////////////////////////////////////////

export const FeaturesWrapper=Styled.div`
    display:flex;
    justify-content:space-between;
    min-height:31.8rem;
    margin:${SPACE.ProductMainMargin};
    @media screen and ${DEVICE.md}{
        margin:${SPACE.ProductMainMarginMD};
        flex-direction:column;
    }
    @media screen and ${DEVICE.sm}{
        margin:${SPACE.ProductMainMarginSM};
    }
`
export const Feature=Styled.div`
    display:flex;
    flex-direction:column;
    max-width:63.5rem;
    width:100%;
    margin:0 2rem 0 0;
    @media screen and ${DEVICE.md}{
        margin:0 0 12rem 0;
        flex-direction:column;
    }
    @media screen and ${DEVICE.md}{
        margin:0 0 8.8rem 0;
    }
`
export const FeatureTitle=Styled.p`
    ${FONT.producttitle};
    margin-bottom:3.2rem;
`
export const FeatureInfo=Styled.p`

`
export const InTheBox=Styled.div`
    display:flex;
    flex-direction:column;
    max-width:35rem;
    width:100%;
    @media screen and ${DEVICE.md}{
        max-width:54.9rem;
        flex-direction:row;
        justify-content:space-between;
    }
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
    }
`
export const InTheBoxTitle=Styled.p`
    ${FONT.producttitle};
    margin-bottom:3.2rem;
`
export const InTheBoxDescWrapper=Styled.div`
    display:flex;
    flex-direction:column;
`
export const InTheBoxDesc=Styled.p`
    display:flex;
`
export const IntheBoxNum=Styled.span`
    user-select:none;
    font-weight:700;
    color:${COLORS.brownDark};
    margin:0 2.4rem .8rem 0;
`

////////////////////////////////////////////////
            //Gallery component
////////////////////////////////////////////////

export const GalleryWrapper = Styled.div`
    display:grid;
    margin:${SPACE.ProductMainMargin};
    grid-gap: 3.2rem;
    grid-template-areas:
    "img1 img3"
    "img2 img3";
    @media screen and ${DEVICE.md}{
        margin:${SPACE.ProductMainMarginMD};
    }
    @media screen and ${DEVICE.sm}{
        margin:${SPACE.ProductMainMarginSM};
        grid-template-areas:
            "img1"
            "img2"
            "img3";
    }
`
export const GalleryImg1 = Styled.img`
    grid-area:img1;
    object-fit:cover;
    border-radius:8px;
    @media screen and ${DEVICE.sm}{
        max-height:17.4rem;
    }
`
export const GalleryImg2 = Styled.img`
    grid-area:img2;
    object-fit:cover;
    border-radius:8px;
    @media screen and ${DEVICE.sm}{
        max-height:17.4rem;
    }
`
export const GalleryImg3 = Styled.img`
    grid-area:img3;
    object-fit:cover;
    border-radius:8px;
    @media screen and ${DEVICE.sm}{
        max-height:36.8rem;
    }
`

////////////////////////////////////////////////
            //Gallery component
////////////////////////////////////////////////

export const PreferenceWrapper= Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const PreferenceTitle= Styled.p`
    ${FONT.producttitle}
    margin-bottom:6.4rem;
`
export const PreferenceProductWrapper= Styled.div`
    display:inline-flex;
    justify-content:space-between;
    width:100%;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
        margin-bottom:7rem;
    }
`
export const PreferenceProduct= Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    max-height:47.1rem;
    &:nth-child(2){
        margin:0 2rem;
    }
    @media screen and ${DEVICE.sm}{
        &:nth-child(2){
            margin:5.6rem 0;
        }
    }
`
export const PreferenceItem= Styled.img`
    object-fit:cover;
    border-radius:8px;
`
export const PreferenceItemName= Styled.p`
    ${FONT.preferencetitle};
    margin:4rem 0 3.2rem;
`