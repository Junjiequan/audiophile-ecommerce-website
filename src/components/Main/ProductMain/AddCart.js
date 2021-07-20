import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { increment, decrement, addProduct } from '../../../actions';
import {
    AddCartWrapper,
    AddCartAmount,
    AddCartIncrease,
    AddCartDecrease,
    AddCartBtn
} from './ProductMainElements'


const AddCart = ({data}) => {
    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    return (
        <AddCartWrapper>
            <AddCartAmount>
                <AddCartDecrease onClick={()=> dispatch(decrement())}>-</AddCartDecrease>
                    {counter}
                <AddCartIncrease onClick={()=> dispatch(increment())}>+</AddCartIncrease>
            </AddCartAmount>
            <AddCartBtn data-text="add to cart" onClick={()=> dispatch(addProduct(data,counter))} />
        </AddCartWrapper>
    )
}

export default AddCart
