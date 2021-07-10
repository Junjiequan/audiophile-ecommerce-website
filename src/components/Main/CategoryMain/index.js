import React from 'react'
import { GlobalBtnBrown } from '../../../GlobalBtn'
import {
    CategoryMainContainer,
    CategoryMainWrapper,
    CategoryMainProduct,
    ProductImgWrapper,
    ProductImg,
    ProductInfo,
    ProductFeature,
    ProductTitle,
    ProductDetail
} from './CategoryMainElements'


const CategoryMain = ({data}) => {
    return (
        <CategoryMainContainer>
            <CategoryMainWrapper>
            {data.map((item,index)=>{
                let isEvenNum = index % 2 ? true: false;
                return(
                    <CategoryMainProduct data-reversed={isEvenNum} key={index}>
                        <ProductImgWrapper>
                            <ProductImg 
                                width="540" 
                                height="560" 
                                data-aos="fade"
                                data-aos-duration="800"
                                src={require(`../../../assets/${item.src}`).default} 
                                alt={item.alt} 
                            />
                        </ProductImgWrapper>
                        <ProductInfo>
                            <ProductFeature>{item.feature}</ProductFeature>
                            <ProductTitle>{item.product}</ProductTitle>
                            <ProductDetail>
                                {item.detail}
                            </ProductDetail>
                            <GlobalBtnBrown data-text="see product" aria-label={item.label}/>
                        </ProductInfo>
                    </CategoryMainProduct>
                )
            })}
            </CategoryMainWrapper>
        </CategoryMainContainer>
    )
}

export default CategoryMain
