import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divide  as Hamburger } from 'hamburger-react'
import { toggleModal } from '../../actions';
import useWindowSize from '../../hooks/useWindowSize';
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
    const width = useWindowSize();
    const isMobile = width.width < 769;
    const location = useLocation();
    let isHomePage = location.pathname === '/';


    return (
        <HeaderContainer bgColor={isHomePage} >
            <HeaderWrapper borderBot={true}>
                {
                    isMobile && 
                    <Hamburger color="#fff" size="25" toggled={isOpen} toggle={setIsOpen} />
                }
                <HeaderLogo to="/">
                    <LogoImg src={Logo} alt="audiophile logo"/>
                </HeaderLogo>
                <HeaderNav>
                    <HeaderNavLink to="/" exact={true} data-active="active" aria-label="link to home page">home</HeaderNavLink>
                    <HeaderNavLink to="/headphones" exact={true} data-active="active" aria-label="link to headphones page">headphones</HeaderNavLink>
                    <HeaderNavLink to="/speakers" exact={true} data-active="active" aria-label="link to speakers page">speakers</HeaderNavLink>
                    <HeaderNavLink to="/earphones" exact={true} data-active="active" aria-label="link to earphones page">earphones</HeaderNavLink>
                </HeaderNav>
                {
                    isMobile && 
                <MobNavWrapper data-open={isOpen} onClick={()=> setIsOpen(!isOpen)}>
                    <MobNav data-open={isOpen}>
                        <ProductNav />
                    </MobNav>
                </MobNavWrapper>

                }
                <CartWrapper data-amount={itemAmount} onClick={()=>dispatch(toggleModal())}>
                    <CartIcon src={CartImg} alt="cart icon image"/>
                </CartWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
