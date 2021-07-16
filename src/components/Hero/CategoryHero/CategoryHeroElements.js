import Styled from 'styled-components'
import { SPACE,WIDTH,COLORS,DEVICE } from '../../../Constants'


export const CategoryHeroContainer = Styled.section`
    display:flex;
    justify-content:center;
    padding:${SPACE.container};
    background:${COLORS.black};
    transform:translateY(-23.9rem);
    @media screen and ${DEVICE.sm}{
        transform:translateY(-10.5rem);
    }
`
export const CategoryHeroWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    height:23.9rem;
    @media screen and ${DEVICE.sm}{
        height:10.6rem;
    }
`
export const CategoryHeroH1 = Styled.h1`
    color:${COLORS.white};
    margin-bottom:9.7rem;
    letter-spacing:.2rem;
    font-size:4rem;
    line-height:4.4rem;
    @media screen and ${DEVICE.sm}{
        font-size:2.8rem;
        line-height:3.8rem;
        margin-bottom:3.2rem;
    }
`