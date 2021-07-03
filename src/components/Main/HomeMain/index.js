import React from 'react'
import {
    MainContainer,
    MainWrapper
} from './HomeMainElements'
import ProductList from '../../ProductList/'


const HomeMain = () => {
    return (
        <MainContainer>
            <MainWrapper>
                <ProductList />
            </MainWrapper>
        </MainContainer>
    )
}

export default HomeMain
