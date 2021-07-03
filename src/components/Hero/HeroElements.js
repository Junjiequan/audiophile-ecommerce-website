import Styled, { keyframes } from 'styled-components'
import HeroBg from '../../assets/home/desktop/image-hero.jpg'
import { SPACE, WIDTH, COLORS, FONT, TRANSITION } from '../../Constants'

const animation = {
    flashy:keyframes`
        15%{opacity:0.4}
        18%{opacity:0.2}
        21%{opacity:0.4}
        24%{opacity:0.2}
        27%{opacity:0.4}
        30%{opacity:0.2}
        33%{opacity:0.4}
        36%{opacity:0.2}
        39%{opacity:0.4}
        42%{opacity:0.2}
        100%{opacity:1}
    `
}


export const HeroContainer = Styled.section`
    display:flex;
    justify-content:center;
    height:72.8rem;
    background:${COLORS.blackStupid};
    z-index:1;
    padding:${SPACE.container};
`
export const HeroWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    position:relative;
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
`
export const HeroTitle = Styled.p`
    opacity:.5;
    ${FONT.overline};
`
export const HeroProductName = Styled.h1`
    margin:2.4rem 0;
`
export const HeroInfo = Styled.p`
    opacity:.6;
    font-weight:100;
    margin-bottom:4rem;
`
export const HeroImgWrapper = Styled.div`
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
    animation:${animation.flashy} 3s ease-in-out 1;
`
export const HeroImg = Styled.img`
    display:none;
`