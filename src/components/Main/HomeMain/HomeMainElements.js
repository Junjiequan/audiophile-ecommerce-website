import Styled from 'styled-components'
import { SPACE, WIDTH, COLORS, FONT, TRANSITION } from '../../../Constants'
import speakerBg from '../../../assets/home/desktop/pattern-circles.svg'


export const MainContainer=Styled.div`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    margin:20rem 0;
`
export const MainWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`
export const MainSpeakerWrapper = Styled.div`
    margin-top:16.8rem;
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
`
export const MainSpeakerImg = Styled.div`
    z-index:1;
    position:absolute;
    background:url(${props => props.bg});
    background-repeat:no-repeat;
    background-size:contain;
    left:9.5rem;bottom:-11rem;
    max-width:38rem;
    width:100%;
    height:100%;
`
export const MainSpeakerInfo = Styled.div`
    z-index:2;
    max-width:34.9rem;
`
export const MainSpeakerH1 = Styled.h2`
    ${FONT.mainProductTitle};
    color:${COLORS.white};
    margin-bottom:2.4rem;
`
export const MainSpeakerDesc = Styled.p`
    opacity:.75;
    font-weight:100;
    font-size:1.5rem;
    color:${COLORS.white};
    margin-bottom:6.5rem;
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
    background-image:url(${props=> props.bgSrc});
    background-repeat:no-repeat;
    background-size:cover;
`
export const MainH3 = Styled.h3`
    margin-bottom:3.2rem;
`
export const MainEarphoneWrapper = Styled.div`
    margin-top:4.8rem;
    display:flex;
    justify-content:space-between;
    width:100%;
    height:100%;
`
export const MainEarphoneImg = Styled.img`
    max-width:54rem;
    width:100%;
    border-radius:8px;
    min-height:32rem;
    object-fit:cover;
    margin-bottom:2.4rem;
`
export const MainEarphoneInfo = Styled.div`
    background:${COLORS.grayDark};
    max-width:54rem;
    width:100%;
    border-radius:8px;
    max-height:32rem;
    padding:9.5rem;
`