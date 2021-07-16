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

const Preference = ( {data} ) => {
    return (
        <PreferenceWrapper>
            <PreferenceTitle>you may also like</PreferenceTitle>
            <PreferenceProductWrapper>
                {
                    data.preference.map(item=>{
                        return(
                            <PreferenceProduct>
                                <PreferenceItem 
                                    width="350"
                                    height="318"
                                    src={require(`../../../assets/${item.url}`).default}
                                />
                                <PreferenceItemName>{item.product}</PreferenceItemName>
                                <GlobalBtnBrown data-text="see product" to={item.link}/>
                            </PreferenceProduct>
                        )
                    })
                }
            </PreferenceProductWrapper>
        </PreferenceWrapper>
    )
}

export default Preference
