import Styled from 'styled-components'
import { COLORS,WIDTH,SPACE,DEVICE } from '../../Constants'

export const BannerContainer = Styled.div`
    display:block;
    margin:${SPACE.banner};
    padding:${SPACE.container};
`
export const BannerWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    max-width:${WIDTH.desktop};
    width:100%;
    margin:auto;
    @media screen and ${DEVICE.md}{
        flex-direction:column-reverse;
        align-items:center;
    }
`

export const BannerInfo = Styled.div`
    max-width:44.5rem;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-self:center;
    margin-right:12.5rem;
    @media screen and ${DEVICE.md}{
        text-align:center;
        margin:0;
        max-width:57.3rem;
    }
`

export const BannerH2 = Styled.h2`
    margin-bottom:3.2rem;
`
export const BannerSpan = Styled.span`
    color:${COLORS.brownDark};
`
export const BannerDesc = Styled.p`
    color:rgba(0,0,0,0.5);
`
export const BannerImgWrapper = Styled.div`
    display:flex;
    max-width:54rem;
    @media screen and ${DEVICE.md}{
        margin-bottom:6.3rem;
        max-width:100%;
    }
`
export const BannerImg = Styled.img`
    object-fit:cover;
    width:54rem;
    height:58.8rem;
    border-radius:8px;
    @media screen and ${DEVICE.md}{
        width:68.9rem;
        height:30rem;
    }
`
