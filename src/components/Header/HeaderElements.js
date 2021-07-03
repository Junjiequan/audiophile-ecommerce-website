import Styled,{ keyframes } from 'styled-components'
import { Link as LinkR, NavLink } from 'react-router-dom'
import { COLORS, SPACE, WIDTH, TRANSITION } from '../../Constants'

const headerBorderBottom = `
    &:after{
        position:absolute;
        content:'';
        display:block;
        left:0;bottom:-3.6rem;
        width:100%;
        height:1px;
        background:${COLORS.white};
        opacity:.2;
    }
`

export const HeaderContainer = Styled.header`
    position:fixed;
    width:100%;
    height:9.6rem;
    background:${prop=> prop.bgColor};
    display:flex;
    justify-content:center;
    padding:${SPACE.navContainer};
    z-index:2;
`
export const HeaderWrapper = Styled.div`
    margin:${SPACE.wrapper};
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    justify-content:space-between;
    position:relative;
    ${prop=> prop.borderBot ? headerBorderBottom : null};
`
export const HeaderLogo = Styled(LinkR)`
    min-width:14.3rem;
    height:2.5rem;
`
export const LogoImg = Styled.img`
    pointer-events:none;
    max-width:100%;
`
export const HeaderNav = Styled.nav`
    display:flex;
    justify-content:space-between;
    max-width:42.9rem;
    width:100%;
`
export const HeaderNavLink = Styled.a`
    cursor:pointer;
    color:${COLORS.white};
    font-weight:700;
    font-size:1.3rem;
    text-transform: uppercase;
    transition: all ${TRANSITION.ease};
    background-image:linear-gradient(to right, ${COLORS.brownDark}0%,${COLORS.brownDark}50%,${COLORS.white}50% );
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-size: 200% 100%;
    background-position: 100%;
    outline:0;
    &:hover{
        transition: all ${TRANSITION.ease};
        background-position: 0%;
    }
    &:focus-visible{
        transition: all ${TRANSITION.ease};
        background-position: 0%;
    }
`