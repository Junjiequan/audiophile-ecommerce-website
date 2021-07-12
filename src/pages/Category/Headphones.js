import React from 'react'
import CategoryHero from '../../components/Hero/CategoryHero'
import Banner from '../../components/Banner'
import ProductNav from '../../components/ProductNav'
import CategoryMain from '../../components/Main/CategoryMain'
import {HEADPHONES} from '../../data/CategoryData'


const Headphones = () => {
    return (
        <>
        <CategoryHero pageTitle="headphones"/>
        <CategoryMain data={HEADPHONES} />
        <ProductNav />
        <Banner />
        </>
    )
}

export default Headphones
