import React from 'react'
import {
    ProductListContainer,
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
        <ProductListContainer>
            <ProductListWrapper >
                <ProductListItem 
                    data-aos-once="true"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    productImage={headphone}>
                    <ProductTitle>headphones</ProductTitle>
                    <GlobalArrowBtn data-text="shop" aria-label="link to headphones product page"/>
                </ProductListItem>
                <ProductListItem 
                    data-aos-once="true"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-delay="100"
                    productImage={speaker}>
                    <ProductTitle>speakers</ProductTitle>
                    <GlobalArrowBtn data-text="shop" aria-label="link to speakers product page"/>
                </ProductListItem>
                <ProductListItem 
                    data-aos-once="true"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    productImage={earphone}>
                    <ProductTitle>earphones</ProductTitle>
                    <GlobalArrowBtn data-text="shop" aria-label="link to earphones product page"/>
                </ProductListItem>
            </ProductListWrapper>
        </ProductListContainer>
    )
}

export default ProductList
