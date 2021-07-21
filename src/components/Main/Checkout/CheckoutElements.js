import Styled from 'styled-components'
import { WIDTH,SPACE,COLORS,TRANSITION,DEVICE,FONT } from '../../../Constants';


export const CheckoutContainer = Styled.main`
    padding:${SPACE.container};
    display:flex;
    justify-content:center;
    margin-bottom:14.1rem;
`

export const CheckoutWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
    height:100%;
`
export const CheckoutContent = Styled.div`
    display:flex;
    justify-content:space-between;
`
