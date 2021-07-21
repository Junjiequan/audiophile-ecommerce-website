import React from 'react';
import { useHistory } from 'react-router-dom';
import {COLORS,TRANSITION} from '../Constants';
import Styled from 'styled-components';

const Button = Styled.button`
    cursor:pointer;
    display:block;
    width:5.7rem;
    margin:7.9rem 0 5.6rem;
    position:relative;
    color:hsla(0,0%,0%,.7);
    &::after{
        position:absolute;
        content:'';
        width:0;
        left:0;bottom:0;
        height:2px;
        background:${COLORS.brownDark};
        transition:width ${TRANSITION.ease};
    }
    &:hover:after{
        width:100%;
    }
`

const GoBackBtn = () => {

    const history = useHistory();
    const goBack = () =>{
        history.goBack();
    };

    return (
        <>
        <Button onClick={goBack}>Go Back</Button>
        </>
    )
}

export default GoBackBtn
