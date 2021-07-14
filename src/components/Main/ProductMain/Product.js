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

const Product = () => {
    return (
        <ProductWrapper>
            <ProductImgWrapper>
                <ProductImg 
                    width="540" 
                    height="560"
                    src={require('../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg').default}
                />
            </ProductImgWrapper>
            <PorudctDetails>
                <ProductFeature>new product</ProductFeature>
                <ProductTitle>
                    XX99 Mark II Headphones
                </ProductTitle>
                <ProductInfo>
                    The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                    It redefines your premium headphone experience by reproducing the 
                    balanced depth and precision of studio-quality sound.
                </ProductInfo>
                <ProductPrice>
                    $ 2,999
                </ProductPrice>
                <AddCart />
            </PorudctDetails>
        </ProductWrapper>
    )
}

export default Product
