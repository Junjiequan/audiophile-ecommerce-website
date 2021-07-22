import React from 'react'
import {
    ContinueBtn
} from './CheckoutElements'


const Summary = () => {
    return (
        <div>
            <ContinueBtn data-text="continue" form='checkout-form' content='Submit' value='Submit' />
        </div>
    )
}

export default Summary
