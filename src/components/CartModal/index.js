import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, addProduct, deleteProduct, resProduct } from '../../actions';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
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
  TotalDesc,
  TotalCost,
  CheckOutBtn,
} from './CartModalElements';

const Cart = () => {
  const isModalToggle = useSelector((state) => state.modalToggle);
  const products = useSelector((state) => state.products.cartItems);

  console.log('-----', products);
  const dispatch = useDispatch();
  isModalToggle ? disableBodyScroll(document) : enableBodyScroll(document);

  //click modal outer || click checkout button to close modal
  useEffect(() => {
    document.addEventListener('click', (e) => {
      const isOverlay = e.target.getAttribute('data-container') === 'true';
      const isCheckout = e.target.getAttribute('data-text') === 'checkout';
      if (isOverlay || isCheckout) {
        dispatch(toggleModal());
      }
    });
  }, [dispatch]);

  const displayItems = (item, index) => {
    console.log(item);
    return (
      <Items key={index}>
        <ItemImg width='64' height='64' src={require(`../../assets/${item.cartImg}`).default} alt={item.cartImg} />
        <ItemInfo>
          {item.short}
          <br />
          <ItemPrice>$ {item.price.toLocaleString()}</ItemPrice>
        </ItemInfo>
        <ItemAmount>
          <ItemDecrement onClick={() => dispatch(deleteProduct(item))}>-</ItemDecrement>
          {item.qty}
          <ItemIncrement onClick={() => dispatch(addProduct(item, 1))}>+</ItemIncrement>
        </ItemAmount>
      </Items>
    );
  };
  const totalPrice = products.reduce((sum, current) => sum + current.price * current.qty, 0);

  return (
    <CartModalContainer data-display={isModalToggle} data-container>
      <CartModalWrapper data-container>
        <Modal data-display={isModalToggle} aria-labelledby='cart_button' aria-expanded={isModalToggle} id='cart_modal'>
          <FirstRow>
            <Amount> Cart ({products.length})</Amount>
            <RemoveBtn onClick={() => dispatch(resProduct())}> Remove all</RemoveBtn>
          </FirstRow>

          <ItemsWrapper>
            {products.length < 1 ? (
              <Items style={{ justifyContent: 'center' }}>
                <iframe
                  title='random gif'
                  src='https://giphy.com/embed/nKERd2uhn8hhe'
                  width='180'
                  height='180'
                  style={{ pointerEvents: 'none', border: '0' }}
                ></iframe>
              </Items>
            ) : (
              products.map(displayItems)
            )}
          </ItemsWrapper>

          <Total>
            <TotalDesc>Total</TotalDesc>
            <TotalCost>$ {totalPrice.toLocaleString()}</TotalCost>
          </Total>
          {products.length < 1 ? (
            <CheckOutBtn
              data-text='no items in the list'
              data-black={true}
              to='/'
              tabIndex='-1'
              style={{ pointerEvents: 'none' }}
            />
          ) : (
            <CheckOutBtn data-text='checkout' data-black={false} to='/checkout' aria-label='to checkout page' />
          )}
        </Modal>
      </CartModalWrapper>
    </CartModalContainer>
  );
};

//React.memo is just used for try out purpose

export default React.memo(Cart);
