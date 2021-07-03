import React from 'react'
import {
    CartWrapper,
    CartIcon
} from './CartElements'
import CartImg from '../../assets/shared/desktop/icon-cart.svg'

const Cart = () => {
    return (
        <CartWrapper>
            <CartIcon src={CartImg} alt="cart icon image"/>
        </CartWrapper>
    )
}

export default Cart
