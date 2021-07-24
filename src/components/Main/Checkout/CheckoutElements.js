import Styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
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
    gap:3rem;
    @media screen and ${DEVICE.md}{
        flex-direction:column;
    }
`

////////////////////////////////////////////
        //Inputs component section
////////////////////////////////////////////

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
    cursor:pointer;
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
export const CashInfo = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:6.4rem;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;
        align-items:center;
        margin-bottom:4.5rem;
    }
`
export const CashP = Styled.p`
    display:flex;
    max-width:55.4rem;
    letter-spacing:-0.07px;
    margin-left:3.2rem;
    opacity:.6;
    @media screen and ${DEVICE.sm}{
        margin-left:0;
        text-align:center;
        margin-top:1rem;
    }
`


////////////////////////////////////////////
        //Summary component section
////////////////////////////////////////////

export const SummaryWrapper = Styled.div`
    display:flex;
    flex-direction:column;
    max-width:73rem;
    flex: 1 1 35rem;
    background:${COLORS.white};
    border-radius:8px;
    padding:3.2rem;
    height:fit-content;
`
export const SummaryTitle = Styled.h2``
export const ItemsWrapper = Styled.ul`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    justify-content:space-between;
    margin:2.2rem 0;
    max-height:60rem;
    padding-right:.1rem;
    overflow-y: auto;
    overflow-x: hidden;
    transition: padding ${TRANSITION.ease};
`
export const Item = Styled.li`
    display:flex;
    align-items:center;
    width:100%;
    margin:1rem;
`
export const ItemImg = Styled.img`
    object-fit:cover;
    max-width:100%;
    border-radius:8px;
`
export const ItemInfo = Styled.p`
    display:flex;
    width:100%;
    flex-direction:column;
    font-weight:700;
    margin:0 1.2rem;
    text-transform:uppercase;
    @media screen and ${DEVICE.sm}{
        margin:0 1rem;
    }
`
export const ItemPrice = Styled.span`
    opacity:.5;
`
export const ItemAmount = Styled.span`
    font-weight:700;
    opacity:.5;
`
export const PriceWrapper = Styled.ul`
    display:block;
    margin-bottom:3.2rem;
`
export const Price = Styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:.8rem;
    &:last-of-type{
        margin-top:2.2rem;
        margin-bottom:0;
    }
`
export const PriceDesc = Styled.span`
    opacity:.5;
`
export const PriceCost = Styled.span`
    font-weight:700;
    text-align:right;
    color:${props=>props['data-total']?`${COLORS.brownDark}`:''};
`
export const ContinueBtn = Styled.button`
    display:flex;
    max-width:28.4rem;
    width:100%;
    height:4.8rem;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.form? `${COLORS.brownLight}`: `${COLORS.black}`};
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
        background-color:${props=>props.form? `${COLORS.brownDark}`: `${COLORS.black}`};
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
    @media screen and ${DEVICE.md}{
        max-width:100%;
    }
`

////////////////////////////////////////////
        //SuccessModal component section
////////////////////////////////////////////

export const ModalContainer = Styled.div`
    position:fixed;
    z-index:999999;
    display:${props=>props['data-display']?'flex':'none'};
    justify-content:center;
    align-items:center;
    top:0;
    width:100%;
    height:100%;
    background:hsla(0,0%,0%,0.5);
    padding:0 2rem;
`
export const ModalWrapper = Styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:4.8rem;
    max-width:54rem;
    width:100%;
    background:${COLORS.white};
    border-radius:8px;
    height:fit-content;
    @media screen and ${DEVICE.sm}{
        max-width:100%;
        height:100vh;
        border-radius:0;
    }
`
export const ModalIcon = Styled.div`
    width:6.4rem;
    height:6.4rem;
    border-radius:100%;
    background:${COLORS.brownDark};
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:3rem;
    font-weight:700;
    color:${COLORS.white};
    margin-bottom:3.2rem;
    @media screen and ${DEVICE.sm}{
        margin-bottom:1.6rem;
    }
`
export const ModalH3 = Styled.p`
    font-size:3.2rem;
    line-height:3.6rem;
    letter-spacing:.1rem;
    font-weight:700;
    margin-bottom:2.4rem;
    @media screen and ${DEVICE.sm}{
        font-size:2rem;
        line-height:2.4rem;
        margin-bottom:1.2rem;
    }
`
export const ModalP = Styled.p`
    opacity:.5;
    margin-bottom:3.3rem;
    @media screen and ${DEVICE.sm}{
        margin-bottom:1.2rem;
    }
`
export const ModalInfo = Styled.div`
    display:flex;
    min-height:14rem;
    width:100%;
    margin:1.6rem 0;
    min-height:5rem;
    height:fit-content;
    @media screen and ${DEVICE.sm}{
        flex-direction:column;   
    }
`
export const ModalItemWrapper = Styled.ul`
    display:flex;
    flex-direction:column;
    padding:2.4rem;
    flex:1 1 60%;
    overflow-y: auto;
    overflow-x: hidden;
    transition: padding ${TRANSITION.ease};
    background:${COLORS.grayDark};
    border-radius:8px 0 0 8px;
    max-height:30rem;
    @media screen and ${DEVICE.sm}{
        border-radius:8px 8px 0 0;
    }
`
export const ModalItem = Styled.li`
    display:flex;
    align-items:center;
    &:not(:last-of-type){
        margin-bottom:1.6rem;
    }
`
export const ModalItemImg = Styled.img`
    object-fit:cover;
    max-width:100%;
`
export const ModalItemInfo = Styled.p`
    display:flex;
    width:100%;
    flex-direction:column;
    font-weight:700;
    margin:0 1.2rem;
    text-transform:uppercase;
    @media screen and ${DEVICE.sm}{
        margin:0 1rem;
    }
`
export const ModalItemPrice = Styled.span`
    opacity:.5;
`
export const ModalAmount = Styled.span`
    font-weight:700;
    opacity:.5;
`
export const ModalTotal = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    flex: 1 1 40%;
    border-radius:0 8px 8px 0;
    background:${COLORS.black};
    color:${COLORS.white};
    padding:0 0 2.4rem 3.2rem;
    text-transform:uppercase;
    @media screen and ${DEVICE.sm}{
        padding:1.7rem 0 1.7rem 3.2rem;
        border-radius:0 0 8px 8px;
    }
`
export const ModalTotalLabel = Styled.p`
    letter-spacing:.07rem;
    opacity:.5;
`
export const ModalTotalCost = Styled.span`
    font-weight:700;
`

export const ModalButton = Styled(LinkR)`
    display:flex;
    width:100%;
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
    @media screen and ${DEVICE.md}{
        max-width:100%;
    }
`