import React from 'react'
import {
    ProductWrapper,
    ProductImgWrapper,
    ProductImg,
    PorudctDetails,
    ProductFeature,
    ProductTitle,
    ProductInfo,
    ProductPrice
} from './ProductMainElements'
import AddCart from './AddCart';


const Product = ({data}) => {
    return (
        <ProductWrapper>
            <ProductImgWrapper>
                <ProductImg 
                    width="540" 
                    height="560"
                    src={require(`../../../assets/${data.productIMG}`).default}
                    alt="headphones"
                />
            </ProductImgWrapper>
            <PorudctDetails>
                <ProductFeature>{data.feature}</ProductFeature>
                <ProductTitle>
                    {data.product}
                </ProductTitle>
                <ProductInfo>
                    {data.info}
                </ProductInfo>
                <ProductPrice>
                    {data.price}
                </ProductPrice>
                <AddCart data={data}/>
            </PorudctDetails>
        </ProductWrapper>
    )
}

export default Product
