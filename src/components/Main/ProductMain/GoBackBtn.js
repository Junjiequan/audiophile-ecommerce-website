import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Button
} from './ProductMainElements'

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
