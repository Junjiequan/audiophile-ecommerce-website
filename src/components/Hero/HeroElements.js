import Styled from 'styled-components'
import HeroBg from '../../assets/home/desktop/image-hero.jpg'
import HeroBgMD from '../../assets/home/tablet/image-header.jpg'
import HeroBgSM from '../../assets/home/mobile/image-header.jpg'
import { SPACE,WIDTH,COLORS,FONT,TRANSITION,DEVICE } from '../../Constants'
import { ANIMATION } from '../../Animation'


export const HeroContainer = Styled.section`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    height:72.8rem;
    background:${COLORS.blackStupid};
    z-index:1;
    @media screen and ${DEVICE.md}{
        padding:0;
    }
    @media screen and ${DEVICE.sm}{
        height:60rem;
    }
`
export const HeroWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    position:relative;
    @media screen and ${DEVICE.md}{
        justify-content:center;
        text-align:center;
    }
`
export const HeroDesc = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:39.8rem;
    width:100%;
    margin-top:${SPACE.navHeight};
    color:${COLORS.white};
    background:transparent;
    z-index:2;
    @media screen and ${DEVICE.md}{
        max-width:37.9rem;
        align-items:center;
    }
    @media screen and ${DEVICE.sm}{
        max-width:32.8rem;
    }
`
export const HeroTitle = Styled.p`
    color:rgba(255,255,255,0.5);
    ${FONT.overline};
    @media screen and ${DEVICE.sm}{
        font-size:1.5rem;
        font-weight:200;
    }
`
export const HeroProductName = Styled.h1`
    margin:2.4rem 0;
    @media screen and ${DEVICE.sm}{
        font-size:3.6rem;
        line-height:4rem;
    }
`
export const HeroInfo = Styled.p`
    color:rgba(255,255,255,0.75);
    font-weight:100;
    margin-bottom:4rem;
    @media screen and ${DEVICE.md}{
        max-width:34.9rem;
    }
    @media screen and ${DEVICE.sm}{
        max-width:26rem;
    }
`
export const HeroImg = Styled.div`
    z-index:1;
    position:absolute;
    display:flex;
    margin-top:3.9rem;
    max-width:111rem;
    min-width:90rem;
    width:100%;
    min-height:63.6rem;
    background-image:url(${HeroBg});
    background-size:120% ;
    background-repeat:no-repeat;
    background-position:54%;
    opacity:1;
    transition:opacity ${TRANSITION.ease};
    animation:${ANIMATION.flashy} 4.8s ease-in-out 1;
    animation-delay:2.2s;
    @media screen and ${DEVICE.md}{
        background-image:url(${HeroBgMD});
        background-position:center center;
        background-size:contain;
        min-width:0;
    }
    @media screen and ${DEVICE.sm}{
        background-image:url(${HeroBgSM});
        min-height:51rem;
    }
`
