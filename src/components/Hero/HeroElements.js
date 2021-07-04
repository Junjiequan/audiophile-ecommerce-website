import Styled from 'styled-components'
import HeroBg from '../../assets/home/desktop/image-hero.jpg'
import { SPACE, WIDTH, COLORS, FONT, TRANSITION } from '../../Constants'
import { ANIMATION } from '../../Animation'



export const HeroContainer = Styled.section`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    height:72.8rem;
    background:${COLORS.blackStupid};
    z-index:1;
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
`
