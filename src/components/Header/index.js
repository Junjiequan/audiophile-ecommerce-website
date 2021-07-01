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

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                
                <HeaderLogo>
                    <LogoImg />
                </HeaderLogo>

                <HeaderNav>
                    <HeaderNavLink>home</HeaderNavLink>
                    <HeaderNavLink>headphones</HeaderNavLink>
                    <HeaderNavLink>speakers</HeaderNavLink>
                    <HeaderNavLink>earphones</HeaderNavLink>
                </HeaderNav>

                <Cart />

            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
