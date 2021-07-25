import React from 'react'
import CategoryHero from '../../components/Hero/CategoryHero'
import Banner from '../../components/Banner'
import ProductNav from '../../components/ProductNav'
import CategoryMain from '../../components/Main/CategoryMain'
import {HEADPHONES} from '../../data/CategoryData'


const Headphones = () => {
    return (
        <main>
        <CategoryHero pageTitle="headphones"/>
        <CategoryMain data={HEADPHONES} />
        <ProductNav />
        <Banner />
        </main>
    )
}

export default Headphones
