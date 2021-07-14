import Styled from 'styled-components';
import { COLORS,SPACE,WIDTH,FONT,DEVICE } from '../../../Constants'


export const CategoryMainContainer = Styled.main`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    margin:${SPACE.CategoryMain};
    @media screen and ${DEVICE.md}{
        margin:${SPACE.CategoryMainMD};
    }
    @media screen and ${DEVICE.sm}{
        margin:${SPACE.CategoryMainSM};
    }
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
    @media screen and ${DEVICE.md}{
        margin-bottom:10rem;
        flex-direction:column;
        align-items:center;
        &:last-of-type{
            margin-bottom:-4rem;
        }
    }
    @media screen and ${DEVICE.sm}{
        margin-bottom:4rem;
        &:last-of-type{
            margin-bottom:0;
        }
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
export const ProductInfo = Styled.div`
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
export const ProductDetail = Styled.p`
    font-weight:200;
    margin-bottom:6.5rem;
    opacity:.8;
`