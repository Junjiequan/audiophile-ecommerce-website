import React from 'react'
import GoBackBtn from '../../GoBackBtn'
import Inputs from './Inputs'
import Summary from './Summary'
import {
    CheckoutContainer,
    CheckoutWrapper,
    CheckoutForm,
} from './CheckoutElements'


const Checkout = () => {
    return (
        <CheckoutContainer>
            <CheckoutWrapper>
                <GoBackBtn />
                <CheckoutForm>
                    <Inputs />
                    <Summary />
                </CheckoutForm>
            </CheckoutWrapper>
        </CheckoutContainer>




    )
}

export default Checkout
