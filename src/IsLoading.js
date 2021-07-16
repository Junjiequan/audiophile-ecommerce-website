import React from 'react'
import Styled from 'styled-components'
import FadeLoader from 'react-spinners/FadeLoader'

const IsLoading = () => {
    const Container = Styled.div`
        display:flex;
        z-index:9999;
        width:100%;
        transform:translateY(7rem);
        height:80vh;
        justify-content:center;
        align-items:center;
    `
    return (
        <Container>
            <FadeLoader color={"rgba(216, 125, 74, 1.0)"} speedMultiplier={1} />
        </Container>
    )
}

export default IsLoading
