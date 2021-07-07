import Styled from 'styled-components';
import { COLORS,WIDTH,SPACE,TRANSITION } from '../../Constants'

export const FooterContainer = Styled.footer`
    display:flex;
    justify-content:center;
    background: ${COLORS.blackLight};
    padding:${SPACE.FootDeskContainerPadding};
    color:${COLORS.white};
`
export const FooterWrapper = Styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin:${SPACE.wrapper};
    max-width:${WIDTH.desktop};
`
export const FooterLinks = Styled.div`
    display:flex;
    justify-content:space-between;
`
export const FooterLogo = Styled.a`
    cursor:pointer;
`
export const LogoImg = Styled.img`
    pointer-events:none;
    max-width:100%;
`
export const FooterNav = Styled.div`
    display:flex;
`
export const FooterNavLink = Styled.div`
    cursor:pointer;
    padding:0 1rem;
`
export const FooterInfo = Styled.p`
    max-width:54rem;
    font-weight:200;
    opacity:0.5;
`
export const FooterEnder = Styled.div`
    display:flex;
    justify-content:space-between;
`
export const CopyRight = Styled.p``
export const FooterIcons = Styled.div`
    transform:translateY(-2rem);
`
export const FooterIcon = Styled.a`
    margin:0 1rem;
    transition:all ${TRANSITION.ease};
    font-size:2.4rem;
    &:hover{
        color:${COLORS.brownDark}
    }
`