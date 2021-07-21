import React from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../actions'
import{
    HeaderContainer,
    HeaderWrapper,
    HeaderLogo,
    LogoImg,
    HeaderNav,
    HeaderNavLink,
    CartWrapper,
    CartIcon
} from './HeaderElements';
import Logo from '../../assets/shared/desktop/logo.svg'
import CartImg from '../../assets/shared/desktop/icon-cart.svg'

const Header = () => {
    const itemAmount = useSelector(state=> state.products.cartItems.length)
    const dispatch = useDispatch();

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
                <CartWrapper data-amount={itemAmount} onClick={()=>dispatch(toggleModal())}>
                    <CartIcon src={CartImg} alt="cart icon image"/>
                </CartWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
