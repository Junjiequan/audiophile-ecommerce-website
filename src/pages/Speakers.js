import React from 'react'
import CategoryHero from '../components/Hero/CategoryHero'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import CategoryMain from '../components/Main/CategoryMain'
import {SPEAKERS} from '../data/CategoryData'


const Speakers = () => {
    return (
        <>
        <CategoryHero pageTitle="Earphones"/>
        <CategoryMain data={SPEAKERS} />
        <ProductList />
        <Banner />
        </>
    )
}

export default Speakers
