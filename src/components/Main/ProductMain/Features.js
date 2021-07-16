import React from 'react'
import {
    FeaturesWrapper,
    Feature,
    FeatureTitle,
    FeatureInfo,
    InTheBox,
    InTheBoxTitle,
    InTheBoxDescWrapper,
    InTheBoxDesc,
    IntheBoxNum
} from './ProductMainElements'


const Features = ({data}) => {
    return (
        <FeaturesWrapper>
            <Feature>
                <FeatureTitle>feature</FeatureTitle>
                <FeatureInfo>
                    {data.featureDesc1}
                    <br /><br />
                    {data.featureDesc2}
                </FeatureInfo>
            </Feature>
            <InTheBox>
                <InTheBoxTitle>in the box</InTheBoxTitle>
                <InTheBoxDescWrapper>
                    { 
                        data.inTheBox.map(item=>{
                            return <InTheBoxDesc><IntheBoxNum>{item[0]}</IntheBoxNum>{item[1]}</InTheBoxDesc>
                        })
                    }
                </InTheBoxDescWrapper>
            </InTheBox>
        </FeaturesWrapper>
    )
}

export default Features
