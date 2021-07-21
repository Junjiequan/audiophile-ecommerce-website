import React from 'react'
import {
    ProductMainContainer,
    ProductMainWrapper,
} from './ProductMainElements';
import Product from './Product'
import GoBackBtn from '../../GoBackBtn'
import Features from './Features'
import Gallery from './Gallery'
import Preference from './Preference';


const ProductMain = ( {data} ) => {
    return (
        <ProductMainContainer data-aos="fade" data-aos-duration="1000">
            <ProductMainWrapper>
                <GoBackBtn />
                {/* AddCart button included in Product component */}
                <Product data={data} />
                <Features data={data}/>
                <Gallery data={data}/>
                <Preference data={data}/>
            </ProductMainWrapper>
        </ProductMainContainer>
    )
}

export default ProductMain
