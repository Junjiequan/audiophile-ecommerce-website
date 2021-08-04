import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divide  as Hamburger } from 'hamburger-react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { toggleModal } from '../../actions';
import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';
import ProductNav from '../ProductNav'
import{
    HeaderContainer,
    HeaderWrapper,
    HeaderLogo,
    LogoImg,
    HeaderNav,
    HeaderNavLink,
    MobNavWrapper,
    MobNav,
    CartWrapper,
    CartIcon
} from './HeaderElements';
import Logo from '../../assets/shared/desktop/logo.svg'
import CartImg from '../../assets/shared/desktop/icon-cart.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const itemAmount = useSelector(state=> state.products.cartItems.length)
    const dispatch = useDispatch();
    const SIZE = useWindowSize();
    const SCROLL = useWindowScroll();
    const isMobile = SIZE.width < 769;
    const isScrolled = SCROLL.height >= 390;
    const location = useLocation();
    let isHomePage = location.pathname === '/';
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
        <HeaderContainer bgColor={isHomePage} data-scrolled={isScrolled}>
            <HeaderWrapper borderBot={true}>
                {
                    isMobile && 
                    <Hamburger color="#fff" size="25" toggled={isOpen} toggle={setIsOpen} />
                }
                <HeaderLogo to="/">
                    <LogoImg src={Logo} alt="audiophile logo"/>
                </HeaderLogo>
                <HeaderNav>
                    <HeaderNavLink to="/" exact={true} data-active="active" aria-current="page" >home</HeaderNavLink>
                    <HeaderNavLink to="/headphones" exact={true} data-active="active" aria-current="page" >headphones</HeaderNavLink>
                    <HeaderNavLink to="/speakers" exact={true} data-active="active" aria-current="page" >speakers</HeaderNavLink>
                    <HeaderNavLink to="/earphones" exact={true} data-active="active" aria-current="page" >earphones</HeaderNavLink>
                </HeaderNav>
                {
                    isMobile && 
                <MobNavWrapper data-open={isOpen} data-scrolled={isScrolled} onClick={()=> setIsOpen(!isOpen)}>
                    <MobNav data-open={isOpen} >
                        <ProductNav />
                    </MobNav>
                </MobNavWrapper>

                }
                <CartWrapper 
                    aria-label="button triggers shopping cart modal" 
                    id="cart_button" 
                    data-amount={itemAmount} 
                    onClick={()=>dispatch(toggleModal())} 
                    aria-haspopup="true" 
                    aria-controls="cart_modal"
                >
                    <CartIcon src={CartImg} />
                </CartWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
