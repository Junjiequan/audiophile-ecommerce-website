import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {
    SummaryWrapper,
    SummaryTitle,
    ItemsWrapper,
    Item,
    ItemImg,
    ItemInfo,
    ItemPrice,
    ItemAmount,
    PriceWrapper,
    Price,
    PriceDesc,
    PriceCost,
    ContinueBtn
} from './CheckoutElements'

const Summary = () => {
    const products = useSelector(state=>state.products.cartItems) 
    const history = useHistory();

    // const displayItems = (item,index)=>{
    //     return (
    //         <Item key={index}>
    //             <ItemImg width="64" height="64" src={require(`../../assets/${item.cartImg}`).default} alt={item.cartImg}/>
    //             <ItemInfo>
    //                 {item.short}<br />
    //                 <ItemPrice>$ {item.price.toLocaleString()}</ItemPrice>
    //             </ItemInfo>
    //             <ItemAmount>
    //                 x{item.qty}
    //             </ItemAmount>
    //         </Item>
    //     )
    // }

    //Didn't use ternary operator here. If no product returns code right below.
    if(products.length < 1)
        return(
            <SummaryWrapper>
                no item found
                <ContinueBtn data-text="back to purchase" onClick={()=>history.goBack()} aria-label="back to previous page" />
            </SummaryWrapper>
        )

    return (
        <SummaryWrapper>
            <SummaryTitle></SummaryTitle>
            <ItemsWrapper>
                {  }
            </ItemsWrapper>
            <PriceWrapper>
                <Price>
                    <PriceDesc>TOTAL</PriceDesc>
                    <PriceCost>$ 5050</PriceCost>
                </Price>
                <Price>
                    <PriceDesc>SHIPPING</PriceDesc>
                    <PriceCost>$ 5050</PriceCost>
                </Price>
                <Price>
                    <PriceDesc>VAT (INCLUDED)</PriceDesc>
                    <PriceCost>$ 5050</PriceCost>
                </Price>
                <Price>
                    <PriceDesc>GRAND TOTAL</PriceDesc>
                    <PriceCost data-total>$ 5050</PriceCost>
                </Price>
            </PriceWrapper>
            <ContinueBtn data-text="continue" form='checkout-form' content='Submit' value='Submit' aria-label="continue payment"/>
        </SummaryWrapper>

    )
}

export default Summary


