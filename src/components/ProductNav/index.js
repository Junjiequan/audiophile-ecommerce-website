import React from 'react'
import {
    ProductNavContainer,
    ProductNavWrapper,
    ProductNavItem,
    ProductTitle,
} from './ProductNavElements'
import { GlobalArrowBtn } from '../../GlobalBtn';
import earphone from '../../assets/shared/desktop/image-earphones.png';
import speaker from '../../assets/shared/desktop/image-speakers.png';
import headphone from '../../assets/shared/desktop/image-headphones.png';


const ProductNav = () => {
    return (
        <ProductNavContainer>
            <ProductNavWrapper >
                <ProductNavItem 
                    to="/headphones"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-offset="0"
                    data-product-image={headphone}
                    aria-label="link to headphones product page"
                >
                    <ProductTitle>headphones</ProductTitle>
                    <GlobalArrowBtn data-text="shop"/>
                </ProductNavItem>
                <ProductNavItem 
                    to="/speakers"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-delay="100"
                    data-aos-offset="0"
                    data-product-image={speaker}
                    aria-label="link to speakers product page"
                >
                    <ProductTitle>speakers</ProductTitle>
                    <GlobalArrowBtn data-text="shop"/>
                </ProductNavItem>
                <ProductNavItem 
                    to="/earphones"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    data-aos-offset="0"
                    data-product-image={earphone}
                    aria-label="link to earphones product page"
                >
                    <ProductTitle>earphones</ProductTitle>
                    <GlobalArrowBtn data-text="shop"/>
                </ProductNavItem>
            </ProductNavWrapper>
        </ProductNavContainer>
    )
}

export default ProductNav
