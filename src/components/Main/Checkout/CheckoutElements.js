import Styled from 'styled-components'
import { WIDTH,SPACE,COLORS,TRANSITION,DEVICE } from '../../../Constants';


export const CheckoutContainer = Styled.main`
    padding:${SPACE.container};
    display:flex;
    justify-content:center;
    padding-bottom:14.1rem;
    background:${COLORS.grayDark};
`

export const CheckoutWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width:100%;
`
export const CheckoutForm = Styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`

//Inputs components styling


export const Form = Styled.form`
    display:flex;
    flex-direction:column;
    background:${COLORS.white};
    border-radius:8px;
    max-width:73rem;
    min-width:23rem;
    width:100%;
    padding:4.8rem;
    @media screen and ${DEVICE.sm}{
        padding:2.4rem;
    }
`
export const FormTitle = Styled.h1`
    font-size:3.2rem;
    line-height:3.6rem;
    letter-spacing:.11rem;
    margin-bottom:4.1rem;
    @media screen and ${DEVICE.sm}{
        font-size:2.8rem;
        margin-bottom:3.2rem;
    }
`
export const FormGroupTitle = Styled.p`
    text-transform:uppercase;
    font-weight:700;
    letter-spacing:0.1rem;
    color:${COLORS.brownDark};
    font-size:1.3rem;
    margin-bottom:1.6rem;
    line-height:2.5rem;
`
export const FormGroup = Styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom:2.5rem;
`
export const FormLabel = Styled.label`
    display:flex;
    flex-direction:column;
    width:${props=>props['data-address']? '100%' : '48%'};
    position:relative;
    @media screen and ${DEVICE.sm}{
        width:100%;
    }
`
export const FormSpan = Styled.span`
    font-size:1.2rem;
    font-weight:700;
`
export const FormInput = Styled.input`
    margin:.9rem 0 2.4rem;
    height:5.6rem;
    padding:0 2.4rem;
    border-radius:8px;
    border:1px solid ${COLORS.grayMid};
    font-size:1.4rem;
    font-weight:700;
    line-height:1.9rem;
    letter-spacing:-.25px;
    &::placeholder{
        opacity:.4;
    }
    &:focus{
        border:1px solid ${COLORS.brownDark};
    }
    &:focus-visible{
        outline:0;
    }
`
export const Error = Styled.span`
    pointer-events:none;
    position:absolute;
    right:0;
    top:0;
    color:#CD2C2C;
    font-size:1.2rem;

`

export const RadioGroupWrapper = Styled.div`
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
export const RadioGroup = Styled.div`
    width:48%;
    @media screen and ${DEVICE.sm}{
        margin-top:1.7rem;
        width:100%;
    }
`

export const RadioLabel = Styled.label`
    display:flex;
    align-items:center;
    width:100%;
    box-shadow:${props=>props['data-checked']? `inset 0px 0px 0px 2px ${COLORS.brownDark}`: `inset 0px 0px 0px 1px ${COLORS.grayMid} `};
    border-radius:8px;
    height:5.6rem;
    padding:0 2.4rem;
    margin-bottom:1.6rem;
    font-size:1.4rem;
    font-weight:700;
    cursor:pointer;
    transition:all ${TRANSITION.ease};
    &:hover{
        box-shadow:inset 0px 0px 0px 2px ${COLORS.brownDark}; 
    }
`
export const Radio = Styled.input.attrs({type:'radio'})`
    margin-right:1.6rem;
    width:20px;
    height:20px;
    position:relative;
    opacity:0.4;
    &:checked{
        opacity:1;
    }
    &:checked:before{
        display:flex;
        justify-content:center;
        align-items:center;
        margin:auto;
        content:"";
        position:absolute;
        width: 100%;
        height: 100%;
        box-shadow:inset 0px 0px 0px 1px ${COLORS.grayMid};
        background:white;
        border-radius: 100%;
        left:0;right:0;top: 0; bottom:0;
    }
    &:checked:after{
        display:flex;
        justify-content:center;
        align-items:center;
        margin:auto;
        content:"";
        position:absolute;
        width: 12px;
        height: 12px;
        background:${COLORS.brownDark};
        border-radius:100%;
        left: 0;right:0;top: 0; bottom:0;
    }
`
export const RadioSpan = Styled.span`
    user-select:none;
`








export const ContinueBtn = Styled.button`
    display:flex;
    border:1px solid red;
    /* width:100%; */
    width:28.4rem;
    height:4.8rem;
    justify-content:center;
    align-items:center;
    background-color:${COLORS.brownLight};
    color:${COLORS.white};
    text-transform:uppercase;
    letter-spacing:.1rem;
    font-size:1.3rem;
    font-weight:700;
    cursor:pointer;
    transition: background-color ${TRANSITION.ease};
    position:relative;
    &:before{
        content:'';
        position:absolute;
        height:100%;
        width:100%;
        bottom:0;
        display:flex;
        justify-content:center;
        align-items:center;
        white-space: nowrap;
        background-size:100% 100%;
        background-color:${COLORS.brownDark};
        transition:height ${TRANSITION.ease};
    }
    &:after{
        position:absolute;
        content:attr(data-text);
    }
    &:hover:before{
        height:0;
    }
    &:focus-visible:before{
        height:0;
    }
    &:active{
        top:2px;
    }
`