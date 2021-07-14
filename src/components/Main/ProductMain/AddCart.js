import React,{useState} from 'react'
import {
    AddCartWrapper,
    AddCartAmount,
    AddCartIncrease,
    AddCartDecrease,
    AddCartBtn
} from './ProductMainElements'


const AddCart = () => {
    const [counter,setCounter] = useState(1);
    const IncreaseCounter = () => setCounter(counter + 1);
    const DecreaseCounter = () => setCounter(counter - 1);
    if(counter < 1) setCounter(1);

    return (
        <AddCartWrapper>
            <AddCartAmount>
                <AddCartDecrease onClick={DecreaseCounter}>-</AddCartDecrease>
                    {counter}
                <AddCartIncrease onClick={IncreaseCounter}>+</AddCartIncrease>
            </AddCartAmount>
            <AddCartBtn data-text="add to cart"/>
        </AddCartWrapper>
    )
}

export default AddCart
