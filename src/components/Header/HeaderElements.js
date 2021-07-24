import Styled from 'styled-components'
import { Link as LinkR, NavLink } from 'react-router-dom'
import { COLORS, SPACE, WIDTH, HEIGHT, TRANSITION, DEVICE } from '../../Constants'

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
    position:sticky;
    top:0;
    width:100%;
    height:10rem;
    background:${prop=> prop.bgColor? 'rgb(25,25,25)': `${COLORS.black}`};
    display:flex;
    justify-content:center;
    padding:${SPACE.navDeskContainerPadding};
    z-index:9999;
`
export const HeaderWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    ${prop=> prop.borderBot ? headerBorderBottom : null};
`
export const HeaderLogo = Styled(LinkR)`
    min-width:14.3rem;;
`
export const LogoImg = Styled.img`
    pointer-events:none;
    max-width:100%;
    width:14.3rem;
    height:2.5rem;
`
export const HeaderNav = Styled.nav`
    display:flex;
    justify-content:space-between;
    max-width:42.9rem;
    width:100%;
    @media screen and ${DEVICE.md}{
        display:none;
    }
`
export const HeaderNavLink = Styled(NavLink)`
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
    &.${props=> props["data-active"]}{
        background-position: 0%;
    }
`
export const MobNavWrapper = Styled.div`
    z-index:99;
    position:absolute;
    top:10rem; // nav height;
    width:100vw;
    display:flex;
    justify-content:center;
    height:100vh;
    opacity:${props=>props['data-open'] ? '1' : '0'};
    margin:-3.2rem -2.4rem -3.6rem;
    background:hsla(0,0%,0%,0.5);
    transform:${props=>props['data-open'] ? 'translateX(0%)' : 'translateX(-120%)'};
    transition:all ${TRANSITION.ease};
    overflow-Y:hidden;
`
export const MobNav = Styled.div`
    display:flex;
    width:100%;
    background:${COLORS.white};
    transform:${props=>props['data-open'] ? 'translateY(0%)' : 'translateY(-120%)'};
    transition:all ${TRANSITION.ease};
    transition-delay:.2s;
    height:fit-content;
    justify-content:center;
`
export const CartWrapper = Styled.button`
    display:flex;
    justify-content:center;
    cursor:pointer;
    position:relative;
    &:before{
        pointer-events:none;
        user-select:none;
        opacity:${props=>props['data-amount'] < 1 ? 0 : 1 };
        position:absolute;
        content:attr(data-amount);
        font-size:1.3rem;
        font-weight:700;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100%;
        background: ${COLORS.brownDark};
        color:white;
        width:2rem;
        height:2rem;
        right:-1.2rem;
        bottom:1.5rem;
        transition:opacity ${TRANSITION.ease};
    }
`
export const CartIcon = Styled.img`
    pointer-events:none;
    width:2.3rem;
    min-width:2.2rem;
    height:2rem;
`