import React from 'react'
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
    return (
        <HeaderContainer bgColor={`transparent`}>
            <HeaderWrapper borderBot={true}>
                <HeaderLogo>
                    <LogoImg src={Logo} />
                </HeaderLogo>
                <HeaderNav>
                    <HeaderNavLink tabIndex="0" >home</HeaderNavLink>
                    <HeaderNavLink tabIndex="0" >headphones</HeaderNavLink>
                    <HeaderNavLink tabIndex="0" >speakers</HeaderNavLink>
                    <HeaderNavLink tabIndex="0" >earphones</HeaderNavLink>
                </HeaderNav>
                <Cart />
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
