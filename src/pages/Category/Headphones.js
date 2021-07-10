import React from 'react'
import CategoryHero from '../../components/Hero/CategoryHero'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import CategoryMain from '../../components/Main/CategoryMain'
import {HEADPHONES} from '../../data/CategoryData'


const Headphones = () => {
    return (
        <>
        <CategoryHero pageTitle="headphones"/>
        <CategoryMain data={HEADPHONES} />
        <ProductList />
        <Banner />
        </>
    )
}

export default Headphones
