import React from 'react'
import {
    MainContainer,
    MainWrapper,
    MainSpeakerWrapper,
    MainSpeakerImg,
    MainSpeakerInfo,
    MainSpeakerH1,
    MainSpeakerDesc,
    MainSpeakerSecWrapper,
    MainH3,
    MainEarphoneWrapper,
    MainEarphoneImg,
    MainEarphoneInfo,
} from './HomeMainElements'
import speakerZX9Img from '../../../assets/home/desktop/image-speaker-zx9.png'
import speakerZX7Img from '../../../assets/home/desktop/image-speaker-zx7.jpg'
import earphoneYX1Img from '../../../assets/home/desktop/image-earphones-yx1.jpg'
import { GlobalBtnBlack, GlobalBtnWhite } from '../../../GlobalBtn'


const HomeMain = () => {
    return (
        <MainContainer>
            <MainWrapper>
                <MainSpeakerWrapper>
                    <MainSpeakerImg 
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        imageSrc={speakerZX9Img} 
                        aria-label="ZX9 speaker product image" />
                    <MainSpeakerInfo>
                        <MainSpeakerH1>ZX9 SPEAKER</MainSpeakerH1>
                        <MainSpeakerDesc>
                            Upgrade to premium speakers that are phenomenally built 
                            to deliver truly remarkable sound.
                        </MainSpeakerDesc>
                        <GlobalBtnBlack data-text="see product" aria-label="link to ZX9 speaker product detail page" to="/product_detail/zx9"/>
                    </MainSpeakerInfo>
                </MainSpeakerWrapper>

                <MainSpeakerSecWrapper 
                    data-aos="zoom-in-out" 
                    data-aos-duration="700" 
                    imageSrc={speakerZX7Img}
                    aria-label="ZX7 speaker product image">
                    <MainH3>ZX7 SPEAKER</MainH3>
                    <GlobalBtnWhite data-text="see product" aria-label="link to ZX7 speaker product detail page" to="/product_detail/zx7"/>
                </MainSpeakerSecWrapper>

                <MainEarphoneWrapper aria-label="YX1 earphone product image">
                    <MainEarphoneImg 
                    data-aos="flip-left" 
                    data-aos-duration="800" 
                    data-aos-delay="100" 
                    src={earphoneYX1Img} alt="earphone YX1 product image"/>
                    <MainEarphoneInfo>
                        <MainH3>YX1 EARPHONES</MainH3>
                        <GlobalBtnWhite data-text="see product" aria-label="link to YX1 earphone product detail page" to="/product_detail/yx1"/>
                    </MainEarphoneInfo>
                </MainEarphoneWrapper>

            </MainWrapper>
        </MainContainer>
    )
}

export default HomeMain
