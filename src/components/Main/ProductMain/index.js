import React from 'react'
import {
    ProductMainContainer,
    ProductMainWrapper,
} from './ProductMainElements';
import Product from './Product'
import GoBackBtn from './GoBackBtn'
import Features from './Features'
import Gallery from './Gallery'
import Preference from './Preference';

const ProductMain = () => {
    return (
        <ProductMainContainer>
            <ProductMainWrapper>
                <GoBackBtn />
                <Product />
                <Features />
                <Gallery />
                <Preference />
            </ProductMainWrapper>
        </ProductMainContainer>
    )
}

export default ProductMain
