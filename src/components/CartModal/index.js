import React,{useEffect,useState} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../actions'
import {
    CartModalContainer,
    CartModalWrapper,
    Modal,
    FirstRow,
    Amount,
    RemoveBtn,
    Items,
    ItemImg,
    ItemInfo,
    ItemPrice,
    ItemAmount,
    ItemDecrement,
    ItemIncrement,
    Total,
    TotalP,
    TotalCost,
    CheckOutBtn
} from './CartModalElements'


const Cart = () => {
    const isModalToggle = useSelector(state=>state.modalToggle)
    const dispatch = useDispatch();
    useEffect(()=>{
        document.addEventListener('click',e=>{
            const isOverlay = e.target.getAttribute('data-container') === 'true'
            const isCheckout = e.target.getAttribute('data-text') === 'checkout'
            if(isOverlay||isCheckout){
                dispatch(toggleModal());
            }
        })
    },[]);
    return (
        <CartModalContainer data-display={isModalToggle} data-container>
            <CartModalWrapper data-container>
                <Modal data-modal="true">
                    <FirstRow>
                        <Amount> Cart (2)</Amount>
                        <RemoveBtn> Remove all</RemoveBtn>
                    </FirstRow>
                    <Items>
                        <ItemImg width="64" height="64" src={require('../../assets/cart/image-xx99-mark-two-headphones.jpg').default} alt="random image"/>
                        <ItemInfo>
                            XX99 MK II<br />
                            <ItemPrice>$2,999</ItemPrice>
                        </ItemInfo>
                        <ItemAmount>
                            <ItemDecrement >-</ItemDecrement>
                                1
                            <ItemIncrement >+</ItemIncrement>
                        </ItemAmount>
                    </Items>
                    <Total>
                        <TotalP>Total</TotalP>
                        <TotalCost>$5,999</TotalCost>
                    </Total>
                    <CheckOutBtn data-text="checkout" to="/" />
                </Modal>
            </CartModalWrapper>
        </CartModalContainer>
    )
}

export default Cart
