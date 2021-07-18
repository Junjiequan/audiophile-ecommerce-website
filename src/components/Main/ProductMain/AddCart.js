import React,{useState} from 'react'
import {
    AddCartWrapper,
    AddCartAmount,
    AddCartIncrease,
    AddCartDecrease,
    AddCartBtn
} from './ProductMainElements'


const AddCart = ({data,onAdd}) => {
    const [counter,setCounter] = useState(1);
    const IncreaseCounter = () => setCounter(counter + 1);
    const DecreaseCounter = () => setCounter(counter - 1);
    if(counter < 1) setCounter(1);

    const handleCartData = ()=>{
        onAdd(data,counter);
    }

    return (
        <AddCartWrapper>
            <AddCartAmount>
                <AddCartDecrease onClick={DecreaseCounter}>-</AddCartDecrease>
                    {counter}
                <AddCartIncrease onClick={IncreaseCounter}>+</AddCartIncrease>
            </AddCartAmount>
            <AddCartBtn data-text="add to cart" onClick={handleCartData}/>
        </AddCartWrapper>
    )
}

export default AddCart
