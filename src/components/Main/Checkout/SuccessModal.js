import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { resProduct,toggleSuccess } from '../../../actions';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
    ModalContainer,
    ModalWrapper,
    ModalIcon,
    ModalH3,
    ModalP,
    ModalInfo,
    ModalItemWrapper,
    ModalItem,
    ModalItemImg,
    ModalItemInfo,
    ModalItemPrice,
    ModalAmount,
    ModalTotal,
    ModalTotalLabel,
    ModalTotalCost,
    ModalButton,
} from './CheckoutElements'

const SuccessModal = (props) => {
    const products = useSelector(state=>state.products.cartItems)
    const success = useSelector(state=>state.successToggle);
    const dispatch = useDispatch();
    const { total } = props
    success ? disableBodyScroll(document) : enableBodyScroll(document)

    const handleButton = ()=>{
        setTimeout(()=>dispatch(resProduct(),1000));
        dispatch(toggleSuccess());
    }

    const displayItems = (item,index)=>{
        return(
            <ModalItem>
                <ModalItemImg width="50" height="50" src={require(`../../../assets/${item.cartImg}`).default} alt={item.cartImg}/>
                <ModalItemInfo>
                    {item.short}
                    <ModalItemPrice>$ {item.price.toLocaleString()}</ModalItemPrice>
                </ModalItemInfo>
                <ModalAmount>
                    x{item.qty}
                </ModalAmount>
            </ModalItem>
        )
    }
    return (
        <ModalContainer data-display={success}>
            <ModalWrapper>
                <ModalIcon> 	&#10003;</ModalIcon>
                <ModalH3>THANK YOU <br/>FOR YOUR ORDER</ModalH3>
                <ModalP>You will receive an email confirmation shortly.</ModalP>
                <ModalInfo>
                    <ModalItemWrapper>
                        {
                            products.map(displayItems)
                        }
                    </ModalItemWrapper>
                    <ModalTotal>
                        <ModalTotalLabel>grand total</ModalTotalLabel>
                        <ModalTotalCost>$ {total.toLocaleString()}</ModalTotalCost>
                    </ModalTotal>
                </ModalInfo>
                <ModalButton data-text="back to home" onClick={handleButton} aria-label="linke to home page" to="/" />
            </ModalWrapper>
        </ModalContainer>
    )
}

export default SuccessModal
