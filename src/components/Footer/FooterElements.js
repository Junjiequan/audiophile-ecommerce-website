import Styled from 'styled-components';
import { COLORS,WIDTH,SPACE,TRANSITION,DEVICE } from '../../Constants'
import { Link as LinkR } from 'react-router-dom'

export const FooterContainer = Styled.footer`
    display:flex;
    justify-content:center;
    background: ${COLORS.blackLight};
    padding:${SPACE.FootDeskContainerPadding};
    color:${COLORS.white};
    min-height:36.5rem;
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
        top:-7.5rem;left:0;
        display:flex;
        height:.4rem;
        width:10.1rem;
        background:${COLORS.brownDark};
    }
`
export const FooterLinks = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
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
`
export const FooterNavLink = Styled.a`
    cursor:pointer;
    transition: color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.brownDark};
    }
    &:not(:last-of-type){
        margin-right:3.4rem;
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
`
export const CopyRight = Styled.p`
    opacity:.5;
    font-weight:700;
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