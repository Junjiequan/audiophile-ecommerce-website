import React from 'react'
import ManImgLG from '../../assets/shared/desktop/image-best-gear.jpg'
import ManImgMD from '../../assets/shared/tablet/image-best-gear.jpg'
import ManImgSM from '../../assets/shared/mobile/image-best-gear.jpg'
import {
    BannerContainer,
    BannerWrapper,
    BannerInfo,
    BannerH2,
    BannerSpan,
    BannerDesc,
    BannerImgWrapper,
    BannerImg
} from './BannerElements'


const Banner = () => {
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerInfo>
                    <BannerH2 data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
                        Bringing you the <BannerSpan>best</BannerSpan> audio gear
                    </BannerH2>
                    <BannerDesc data-aos="zoom-in-out" data-aos-duration="700" data-aos-delay="400">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                        rooms available for you to browse and experience a wide range of our products. Stop by our store to 
                        meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </BannerDesc>
                </BannerInfo>
                <BannerImgWrapper data-aos="flip-right" data-aos-duration="800" data-aos-delay="100" >
                    <BannerImg src={ManImgLG}  srcSet={`${ManImgSM} 375w, ${ManImgMD} 768w, ${ManImgLG} 1024w`} alt="A handsome man wearing a headphone" />
                </BannerImgWrapper>
            </BannerWrapper>
        </BannerContainer>
    )
}

export default Banner
