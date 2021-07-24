import React,{useState} from 'react'
import GoBackBtn from '../../GoBackBtn'
import Inputs from './Inputs'
import Summary from './Summary'
import {
    CheckoutContainer,
    CheckoutWrapper,
    CheckoutForm,
} from './CheckoutElements'
import SuccessModal from './SuccessModal';

const Checkout = () => {
    const [total, setTotal]= useState(0);
    return (
        <CheckoutContainer>
            <SuccessModal total={total}/>
            <CheckoutWrapper>
                <GoBackBtn />
                <CheckoutForm>
                    <Inputs />
                    <Summary  updateTotal={setTotal}/>
                </CheckoutForm>
            </CheckoutWrapper>
        </CheckoutContainer>
    )
}

export default Checkout
