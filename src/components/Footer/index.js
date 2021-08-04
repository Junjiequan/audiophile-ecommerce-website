import React from 'react'
import Logo from '../../assets/shared/desktop/logo.svg'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinks,
    FooterLogo,
    LogoImg,
    FooterNav,
    FooterNavLink,
    FooterInfo,
    FooterEnder,
    FooterSign,
    Sign,
    FooterIcons,
    FooterIcon
} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinks>
                    <FooterLogo to="/">
                        <LogoImg src={Logo} alt="audiophile logo" />
                    </FooterLogo>
                    <FooterNav>
                        <FooterNavLink to="/" exact={true} aria-label="link to home" data-active="active">home</FooterNavLink>
                        <FooterNavLink to="/headphones" exact={true} aria-label="link to headphones" data-active="active">headphones</FooterNavLink>
                        <FooterNavLink to="/speakers" exact={true} aria-label="link to speakers" data-active="active">speakers</FooterNavLink>
                        <FooterNavLink to="/earphones" exact={true} aria-label="link to earphones" data-active="active">earphones</FooterNavLink>
                    </FooterNav>
                </FooterLinks>
                <FooterInfo>
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists 
                    who are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                </FooterInfo>
                <FooterEnder>
                    <FooterSign>
                        Challenge By 
                        <a href="https://www.frontendmentor.io/challenges" aria-label="to front end mentor page" rel="nofollow noopener noreferrer"> Front end mentor</a>
                        Coded By
                        <Sign href="https://www.jayyy.site/" aria-label="to Jay's portfolio website" rel="nofollow noopener noreferrer"> Jay 💪</Sign>
                    </FooterSign>
                    <FooterIcons>
                        <FooterIcon href="#" rel="noopener noreferrer nofollow" aria-label="direct to facebook page"><FaFacebookSquare /></FooterIcon>
                        <FooterIcon href="#" rel="noopener noreferrer nofollow" aria-label="direct to instagram page"><FaInstagram /></FooterIcon>
                        <FooterIcon href="#" rel="noopener noreferrer nofollow" aria-label="direct to twitter page"><FaTwitter /></FooterIcon>
                    </FooterIcons>
                </FooterEnder>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
