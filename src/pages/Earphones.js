import React from 'react'
import CategoryHero from '../components/Hero/CategoryHero'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import CategoryMain from '../components/Main/CategoryMain'
import { EARPHONES } from '../data/CategoryData'


const Earphones = () => {
    return (
        <>
        <CategoryHero pageTitle="Earphones"/>
        <CategoryMain data={EARPHONES} />
        <ProductList />
        <Banner />
        </>
    )
}

export default Earphones
