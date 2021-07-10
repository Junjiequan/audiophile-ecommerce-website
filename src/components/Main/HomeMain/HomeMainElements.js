import Styled from 'styled-components'
import { SPACE,WIDTH,COLORS,FONT,TRANSITION,DEVICE } from '../../../Constants'
import speakerBg from '../../../assets/home/desktop/pattern-circles.svg'
import speakerBgSM from '../../../assets/home/mobile/pattern-circles.svg'
import speakerZX7ImgMD from '../../../assets/home/tablet/image-speaker-zx7.jpg'
import speakerZX7ImgSM from '../../../assets/home/mobile/image-speaker-zx7.jpg'


export const MainContainer=Styled.div`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    position:relative;
`
export const MainWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    position:relative;
`
export const MainSpeakerWrapper = Styled.div`
    width:100%;
    min-height:56rem;
    display:flex;
    border-radius:8px;
    background:${COLORS.brownDark};
    background-image: url(${speakerBg});
    background-size:84%;
    background-position:-100% 10%;
    background-repeat:no-repeat;
    padding:9.5rem;
    position:relative;
    justify-content:flex-end;
    align-items:center;
    overflow:hidden;
    transition:all ${TRANSITION.ease};
    @media screen and ${DEVICE.md}{
        padding:0 2rem;
        justify-content:flex-start;
        flex-direction:column;
        background-position:center -12rem;
    }
    @media screen and ${DEVICE.sm}{
        background-image: url(${speakerBgSM});
        background-size:170%;
    }
`
export const MainSpeakerImg = Styled.div`
    z-index:1;
    position:absolute;
    background:url(${props => props.imageSrc});
    background-repeat:no-repeat;
    background-size:contain;
    left:9.5rem;bottom:-11rem;
    max-width:38rem;
    width:100%;
    height:100%;
    @media screen and ${DEVICE.md}{
        position:relative;
        top:0; left:0; bottom:0;
        display:flex;
        height:22rem;
        background-position:center;
        margin-top:5.2rem;
    }
    @media screen and ${DEVICE.sm}{
        height:20rem;
    }
`
export const MainSpeakerInfo = Styled.div`
    z-index:2;
    max-width:34.9rem;
    @media screen and ${DEVICE.md}{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:6.4rem auto;
        text-align:center;
    }
    @media screen and ${DEVICE.sm}{
        max-width:25.8rem;
    }
`
export const MainSpeakerH1 = Styled.h2`
    ${FONT.mainProductTitle};
    color:${COLORS.white};
    margin-bottom:2.4rem;
    @media screen and ${DEVICE.sm}{
        font-size:3.6rem;
        line-height:4rem;
    }
`
export const MainSpeakerDesc = Styled.p`
    opacity:.8;
    font-weight:200;
    font-size:1.5rem;
    color:${COLORS.white};
    margin-bottom:6.5rem;
    @media screen and ${DEVICE.md}{
        margin-bottom:4rem;
    }
`

export const MainSpeakerSecWrapper = Styled.div`
    margin-top:4.8rem;
    border-radius:8px;
    width:100%;
    min-height:32rem;
    padding:9.5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    background-image:url(${props=> props.imageSrc});
    background-repeat:no-repeat;
    background-size:cover;
    @media screen and ${DEVICE.md}{
        padding:6.2rem;
        background-image:url(${speakerZX7ImgMD});
    }
    @media screen and ${DEVICE.sm}{
        padding:2.4rem;
        background-image:url(${speakerZX7ImgSM});
        background-position:-.8rem;
    }
`
export const MainH3 = Styled.h3`
    margin-bottom:3.2rem;
`
export const MainEarphoneWrapper = Styled.div`
    margin-top:4.8rem ;
    display:flex;
    justify-content:space-between;
    max-width:100%;
    max-height:32rem;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
    }
`
export const MainEarphoneImg = Styled.img`
    object-fit:cover;
    width:50%;
    height:32rem;
    border-radius:8px;
    margin-right:3rem;
    @media screen and ${DEVICE.sm}{
        width:100%;
        margin:0 0 2.4rem;
        min-height:20rem;
    }
`
export const MainEarphoneInfo = Styled.div`
    background:${COLORS.grayDark};
    width:100%;
    border-radius:8px;
    max-height:100%;
    padding-left:8%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and ${DEVICE.sm}{
        min-height:20rem;
    }
`