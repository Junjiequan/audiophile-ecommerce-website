import React from 'react'
import{
    HeroContainer,
    HeroWrapper,
    HeroDesc,
    HeroTitle,
    HeroProductName,
    HeroInfo,
    HeroImgWrapper,
    HeroImg
} from './HeroElements'
import {GlobalBtnBrown} from '../../GlobalBtn'
const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroDesc>
                    <HeroTitle>new product</HeroTitle>
                    <HeroProductName>XX99 Mark II Headphones</HeroProductName>
                    <HeroInfo>
                        Experience natural, lifelike audio and exceptional 
                        build quality made for the passionate music enthusiast.
                    </HeroInfo>
                    <GlobalBtnBrown data-text="see product" aria-label="link to product page"/>
                </HeroDesc>
                <HeroImgWrapper aria-label="giant headphone image on background">
                    <HeroImg  />
                </HeroImgWrapper>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
