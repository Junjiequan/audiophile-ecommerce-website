import Styled from 'styled-components';
import { COLORS,SPACE,WIDTH,FONT,DEVICE } from '../../../Constants'


export const CategoryMainContainer = Styled.section`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    margin:${SPACE.CategoryMain};
`
export const CategoryMainWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    height:100%;
`
export const CategoryMainProduct = Styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-bottom:16rem;
    flex-direction:${(props => props["data-reversed"]? 'row-reverse': false)};
    &:last-of-type{
        margin-bottom:4rem;
    }
`
export const ProductImgWrapper = Styled.div`
    display:flex;
    min-width:32.7rem;
`
export const ProductImg = Styled.img`
    object-fit:cover;
    max-width:100%;
    border-radius:8px;
`
export const ProductInfo = Styled.div`
    display:flex;
    flex-direction:column;
    max-width:44.5rem;
    width:100%;
    height:100%;
    margin:10.9rem 0;
    @media screen and ${DEVICE.sm}{
        margin:0;
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
    }
`
export const ProductDetail = Styled.p`
    font-weight:200;
    margin-bottom:6.5rem;
    opacity:.8;
`