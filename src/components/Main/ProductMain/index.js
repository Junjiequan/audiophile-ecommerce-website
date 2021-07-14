import React from 'react'
import {
    ProductMainContainer,
    ProductMainWrapper,
} from './ProductMainElements';
import Product from './Product'
import GoBackBtn from './GoBackBtn'

//Probably need to break the structure down to several small components
//This is too much, probably hard to maintain later.
//
//Basic structure is done though. 
const ProductMain = () => {
    return (
        <ProductMainContainer>
            <ProductMainWrapper>
                <GoBackBtn />
                <Product />

{/* 
                <ProductMainDesc>
                    <Features>
                        <FeaturesTitle></FeaturesTitle>
                        <FeaturesText></FeaturesText>
                    </Features>
                    <InTheBox>
                        <InTheBoxTitle></InTheBoxTitle>
                        Loop in the box insde
                        <InTheBoxDesc><IntheBoxNum></IntheBoxNum></InTheBoxDesc>
                    </InTheBox>
                </ProductMainDesc>
                <ProductMainGallery>
                    Use Grid here.
                    <ProductMainImg1 alt=''/>
                    <ProductMainImg2 alt=''/>
                    <ProductMainImg3 alt=''/>
                </ProductMainGallery>
                 */}
            </ProductMainWrapper>
        </ProductMainContainer>
    )
}

export default ProductMain
