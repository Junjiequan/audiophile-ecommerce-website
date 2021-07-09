import React from 'react'
import CategoryHero from '../components/Hero/CategoryHero'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import CategoryMain from '../components/Main/CategoryMain'

const Headphones = () => {
    return (
        <>
        <CategoryHero pageTitle="headphones"/>
        <CategoryMain />
        <ProductList />
        <Banner />
        </>
    )
}

export default Headphones
