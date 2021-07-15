import React from 'react'
import { GlobalBtnBrown } from '../../../GlobalBtn'
import{
    PreferenceWrapper,
    PreferenceTitle,
    PreferenceProductWrapper,
    PreferenceProduct,
    PreferenceItem,
    PreferenceItemName
} from './ProductMainElements'

const Preference = () => {
    return (
        <PreferenceWrapper>
            <PreferenceTitle>you may also like</PreferenceTitle>
            <PreferenceProductWrapper>
                <PreferenceProduct>
                    <PreferenceItem 
                        width="350"
                        height="318"
                        src={require('../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg').default}
                    />
                    <PreferenceItemName>XX99 MARK I</PreferenceItemName>
                    <GlobalBtnBrown data-text="see product"/>
                </PreferenceProduct>
                <PreferenceProduct>
                    <PreferenceItem 
                        width="350"
                        height="318"
                        src={require('../../../assets/product-yx1-earphones/desktop/image-product.jpg').default}
                    />
                    <PreferenceItemName>XX59</PreferenceItemName>
                    <GlobalBtnBrown data-text="see product"/>
                </PreferenceProduct>
                <PreferenceProduct>
                    <PreferenceItem 
                        width="350"
                        height="318"
                        src={require('../../../assets/product-xx59-headphones/desktop/image-product.jpg').default}
                    />
                    <PreferenceItemName>ZX9 SPEAKER</PreferenceItemName>
                    <GlobalBtnBrown data-text="see product"/>
                </PreferenceProduct>
            </PreferenceProductWrapper>
        </PreferenceWrapper>
    )
}

export default Preference
