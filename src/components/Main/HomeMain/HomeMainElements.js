import Styled from 'styled-components'
import { SPACE, WIDTH } from '../../../Constants'

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