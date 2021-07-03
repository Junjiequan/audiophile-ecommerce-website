import React from 'react'
import {
    ProductListWrapper,
    ProductListItem,
    ProductTitle,
} from './ProductListElements'
import { GlobalArrowBtn } from '../../GlobalBtn';
import earphone from '../../assets/shared/desktop/image-earphones.png';
import speaker from '../../assets/shared/desktop/image-speakers.png';
import headphone from '../../assets/shared/desktop/image-headphones.png';


const ProductList = () => {
    return (
        <ProductListWrapper>
            <ProductListItem productImage={headphone}>
                <ProductTitle>headphones</ProductTitle>
                <GlobalArrowBtn data-text="shop" aria-label="link to headphones product page"/>
            </ProductListItem>
            <ProductListItem productImage={speaker}>
                <ProductTitle>speakers</ProductTitle>
                <GlobalArrowBtn data-text="shop" aria-label="link to speakers product page"/>
            </ProductListItem>
            <ProductListItem productImage={earphone}>
                <ProductTitle>earphones</ProductTitle>
                <GlobalArrowBtn data-text="shop" aria-label="link to earphones product page"/>
            </ProductListItem>
        </ProductListWrapper>
    )
}

export default ProductList
