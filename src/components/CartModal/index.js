import React,{useEffect} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal,addProduct,deleteProduct,resProduct } from '../../actions'
import {
    CartModalContainer,
    CartModalWrapper,
    Modal,
    FirstRow,
    Amount,
    RemoveBtn,
    ItemsWrapper,
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
    // const counter = useSelector(state=>state.counter);
    const products = useSelector(state=>state.products.cartItems);
    const dispatch = useDispatch();
    console.log(products.length)
    
    //click modal outer to close
    useEffect(()=>{
        document.addEventListener('click',e=>{
            const isOverlay = e.target.getAttribute('data-container') === 'true'
            const isCheckout = e.target.getAttribute('data-text') === 'checkout'
            if(isOverlay||isCheckout){
                dispatch(toggleModal());
            }
        })
    },[]);
    const displayItems = (item,index)=>{
        const price = item.price.toLocaleString()
        return (
            <Items key={index}>
                <ItemImg width="64" height="64" src={require(`../../assets/${item.cartImg}`).default} alt={item.cartImg}/>
                <ItemInfo>
                    {item.short}<br />
                    <ItemPrice>$ {price}</ItemPrice>
                </ItemInfo>
                <ItemAmount>
                    <ItemDecrement onClick={()=>dispatch(deleteProduct(item))}>-</ItemDecrement>
                        {item.qty}
                    <ItemIncrement onClick={()=>dispatch(addProduct(item,1))}>+</ItemIncrement>
                </ItemAmount>
            </Items>
        )
    }
    const totalPrice = products.reduce((sum,current)=> sum + current.price * current.qty,0);
    return (
        <CartModalContainer data-display={isModalToggle} data-container >
            <CartModalWrapper data-container>
                <Modal data-display={isModalToggle}>
                    <FirstRow >
                        <Amount> Cart ({products.length})</Amount>
                        <RemoveBtn onClick={()=> dispatch(resProduct())}> Remove all</RemoveBtn>
                    </FirstRow>

                    <ItemsWrapper>
                        {
                            products.length < 1
                            ? 
                            <>
                                <iframe src="https://giphy.com/embed/nKERd2uhn8hhe" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                            </>
                            : products.map(displayItems)
                        }
                    </ItemsWrapper>

                    <Total>
                        <TotalP>Total</TotalP>
                        <TotalCost>$ {totalPrice.toLocaleString()}</TotalCost>
                    </Total>
                    <CheckOutBtn data-text="checkout" to="/" />
                </Modal>
            </CartModalWrapper>
        </CartModalContainer>
    )
}

export default Cart
