import React from 'react'
import{
    HeroContainer,
    HeroWrapper,
    HeroDesc,
    HeroTitle,
    HeroProductName,
    HeroInfo,
    HeroImg,
} from './HeroElements'
import {GlobalBtnBrown} from '../../GlobalBtn'
const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroDesc>
                    <HeroTitle data-aos="fade-down" data-aos-duration="500">new product</HeroTitle>
                    <HeroProductName data-aos="fade-right" data-aos-duration="1100" data-aos-delay="650">
                        XX99 Mark II Headphones
                    </HeroProductName>
                    <HeroInfo data-aos="zoom-in-out" data-aos-delay="1400" data-aos-duration="1100">
                        Experience natural, lifelike audio and exceptional 
                        build quality made for the passionate music enthusiast.
                    </HeroInfo>
                    <GlobalBtnBrown 
                        data-aos="zoom-out" 
                        data-aos-delay="1800" 
                        data-aos-duration="700" 
                        data-text="see product" 
                        aria-label="link to product page"
                    />
                </HeroDesc>
                <HeroImg aria-label="giant headphone image on background" />
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
