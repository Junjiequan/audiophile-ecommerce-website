import Styled,{ keyframes } from 'styled-components';
import { COLORS,WIDTH,SPACE,TRANSITION,DEVICE } from '../../Constants'
import { Link as LinkR, NavLink } from 'react-router-dom'

const textAnim = {
    bg_loop:keyframes`
        0%{background-position:200% center;}
        50%{background-position:0% center;}
        100%{background-position:200% center;}
    `,
    jay_loop:keyframes`
        0%{
            background:white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        25%{
            background:yellow;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity:0.2;
        }
        50%{
            background:cyan;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity:0.7;
        }
        75%{
            background:purple;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    `
}

export const FooterContainer = Styled.footer`
    display:flex;
    justify-content:center;
    background: ${COLORS.blackLight};
    padding:${SPACE.FootDeskContainerPadding};
    color:${COLORS.white};
    min-height:36.5rem;
    @media screen and ${DEVICE.sm}{
        padding:${SPACE.FootDeskContainerPaddingSM};
        text-align:center;
    }
`
export const FooterWrapper = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    margin:${SPACE.wrapper};
    max-width:${WIDTH.desktop};
    position:relative;
    &:before{
        position:absolute;
        content:'';
        top:-7.5rem;left:0;right:0;
        display:flex;
        height:.4rem;
        width:10.1rem;
        background:${COLORS.brownDark};
    }
    @media screen and ${DEVICE.sm}{
        &:before{
            top:-5.2rem;
            justify-content:center;
            margin:0 auto;
        }
    }
`
export const FooterLinks = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
    }
`
export const FooterLogo = Styled(LinkR)`
    cursor:pointer;
    min-width:14.3rem;
`
export const LogoImg = Styled.img`
    pointer-events:none;
    max-width:100%;
    width:14.3rem;
    height:2.5rem;
`
export const FooterNav = Styled.div`
    display:flex;
    text-transform:uppercase;
    font-size:1.3rem;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
        align-items:center;
        margin:3rem 0;
    }
`
export const FooterNavLink = Styled(NavLink)`
    cursor:pointer;
    transition: color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
    &:not(:last-of-type){
        margin-right:3.4rem;
    }
    &:focus-visible{
        color:${COLORS.brownDark};
    }
    &.${props=> props["data-active"]}{
        color:${COLORS.brownDark};
    }
    @media screen and ${DEVICE.sm}{
        margin:0.8rem 0;
        &:not(:last-of-type){
            margin-right:0;
        }
    }
`
export const FooterInfo = Styled.p`
    max-width:54rem;
    font-weight:200;
    opacity:.5;
    margin-bottom:3.8rem;
`
export const FooterEnder = Styled.div`
    display:flex;
    justify-content:space-between;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
    }
`
export const FooterIcons = Styled.div`
    transform:translateY(-6.3rem);
    @media screen and ${DEVICE.md}{
        transform:translateY(0);
    }
`
export const FooterIcon = Styled.a`
    display:inline-block;
    transition:all ${TRANSITION.ease};
    font-size:2.7rem;
    &:hover{
        color:${COLORS.brownDark}
    }
    &:not(:last-of-type){
        margin-right:1.6rem;
    }
`
export const FooterSign = Styled.p`
    font-weight:400;
    font-size:1.4rem;
    text-align:left;
    user-select:none;
    letter-spacing:.04rem;
    line-height:2.5rem;
    color:rgba(255,255,255,0.6);
    & > a:first-of-type{
        opacity:1;
        color: red;
        background: linear-gradient(to left, rgba(50, 169, 255, 1),rgba(188, 183, 152, 1),rgba(255, 197, 147, 1));
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: ${textAnim.bg_loop} 5s linear infinite;
        margin-right:.5rem;
    }
    @media screen and (max-width:650px){
        margin-top:2rem;
        text-align:center;
    }
    @media screen and ${DEVICE.sm}{
        margin-bottom:4.8rem;
        display:flex;
        flex-direction:column;
    }
`
export const Sign = Styled.a`
    text-transform: uppercase;
    position:relative;
    font-weight:700;
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${textAnim.jay_loop} 5s linear infinite;
`