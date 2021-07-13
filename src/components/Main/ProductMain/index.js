import React from 'react'
import {
    ProductMainContainer,
    ProductMainWrapper,
    ProductMainInfo,
    ProductImgWrapper,
    ProductImg,
    PorudctDetails,
    ProductFeature,
    ProductTitle,
    ProductInfo,
    ProductMainDesc,
    Features,
    FeaturesTitle,
    FeaturesText,
    InTheBox,
    InTheBoxTitle,
    InTheBoxDesc,
    IntheBoxNum,
    ProductMainGallery,
    ProductMainImg1,
    ProductMainImg2,
    ProductMainImg3
} from 'styled-components';
import AddCart from '../../AddCart';

//Probably need to break the structure down to several small components
//This is too much, probably hard to maintain later.
//
//Basic structure is done though. 
const ProductMain = () => {
    return (
        <ProductMainContainer>
            <ProductMainWrapper>
                <GoBackBtn />
                <ProductMainInfo>
                    <ProductImgWrapper>
                        <ProductImg />
                    </ProductImgWrapper>
                    <PorudctDetails>
                        <ProductFeature></ProductFeature>
                        <ProductTitle></ProductTitle>
                        <ProductInfo></ProductInfo>
                        <AddCart />
                    </PorudctDetails>
                </ProductMainInfo>
                <ProductMainDesc>
                    <Features>
                        <FeaturesTitle></FeaturesTitle>
                        <FeaturesText></FeaturesText>
                    </Features>
                    <InTheBox>
                        <InTheBoxTitle></InTheBoxTitle>
                        {/* Loop in the box insde */}
                        <InTheBoxDesc><IntheBoxNum></IntheBoxNum></InTheBoxDesc>
                    </InTheBox>
                </ProductMainDesc>
                <ProductMainGallery>
                    {/* Use Grid here. */}
                    <ProductMainImg1 alt=''/>
                    <ProductMainImg2 alt=''/>
                    <ProductMainImg3 alt=''/>
                </ProductMainGallery>
            </ProductMainWrapper>
        </ProductMainContainer>
    )
}

export default ProductMain
