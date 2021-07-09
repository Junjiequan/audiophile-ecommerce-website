import React from 'react'
import CategoryHero from '../components/Hero/CategoryHero'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import CategoryMain from '../components/Main/CategoryMain'

const Speakers = () => {
    return (
        <>
        <CategoryHero pageTitle="Speakers"/>
        <CategoryMain />
        <ProductList />
        <Banner />
        </>
    )
}

export default Speakers
