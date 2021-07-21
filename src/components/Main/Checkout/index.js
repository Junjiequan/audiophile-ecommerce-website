import React from 'react'
import GoBackBtn from '../../GoBackBtn'
import Form from './Form'
import Summary from './Summary'
import {
    CheckoutContainer,
    CheckoutWrapper,
    CheckoutContent
} from './CheckoutElements'


const Checkout = () => {
    return (
        <CheckoutContainer>
            <CheckoutWrapper>
                <GoBackBtn />
                <CheckoutContent>
                    <Form />
                    <Summary />
                </CheckoutContent>
            </CheckoutWrapper>
        </CheckoutContainer>




    )
}

export default Checkout
