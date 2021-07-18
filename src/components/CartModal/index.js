import React, { useState} from 'react'
import {
    CartModalContainer,
    CartModalWrapper,
} from './CartModalElements'

const Cart = () => {
    return (
        <CartModalContainer>
            <CartModalWrapper>
                <Modal>
                    <FirstRow>
                        <Amount> Cart (2)</Amount>
                        <RemoveBtn> Remove all</RemoveBtn>
                    </FirstRow>
                    <Items>
                        <ItemImg />
                        <ItemInfo>
                            XX99 MK II<br />
                            <ItemPrice>$2,999</ItemPrice>
                        </ItemInfo>
                        <ItemDecrement >-</ItemDecrement>
                            1
                        <ItemIncrement >+</ItemIncrement>
                    </Items>
                    <Total>
                        <TotalP>Total</TotalP>
                        <TotalCost>$5,999</TotalCost>
                    </Total>
                    <CheckOutBtn />
                </Modal>
            </CartModalWrapper>
        </CartModalContainer>
    )
}

export default Cart
