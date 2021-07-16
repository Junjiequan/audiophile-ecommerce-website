import React from 'react'
import { useLocation } from 'react-router-dom';
import Cart  from '../Cart/'
import{
    HeaderContainer,
    HeaderWrapper,
    HeaderLogo,
    LogoImg,
    HeaderNav,
    HeaderNavLink
} from './HeaderElements';
import Logo from '../../assets/shared/desktop/logo.svg'

const Header = () => {
    const location = useLocation();
    let isHomePage = location.pathname === '/';
    
    return (
        <HeaderContainer bgColor={isHomePage} >
            <HeaderWrapper borderBot={true}>
                <HeaderLogo to="/">
                    <LogoImg src={Logo} alt="audiophile logo"/>
                </HeaderLogo>
                <HeaderNav>
                    <HeaderNavLink to="/" exact={true} data-active="active" aria-label="link to home page">home</HeaderNavLink>
                    <HeaderNavLink to="/headphones" exact={true} data-active="active" aria-label="link to headphones page">headphones</HeaderNavLink>
                    <HeaderNavLink to="/speakers" exact={true} data-active="active" aria-label="link to speakers page">speakers</HeaderNavLink>
                    <HeaderNavLink to="/earphones" exact={true} data-active="active" aria-label="link to earphones page">earphones</HeaderNavLink>
                </HeaderNav>
                <Cart />
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
