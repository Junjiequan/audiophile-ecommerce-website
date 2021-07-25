import React from 'react'
import CategoryHero from '../../components/Hero/CategoryHero'
import Banner from '../../components/Banner'
import ProductNav from '../../components/ProductNav'
import CategoryMain from '../../components/Main/CategoryMain'
import { EARPHONES } from '../../data/CategoryData'


const Earphones = () => {
    return (
        <main>
        <CategoryHero pageTitle="Earphones"/>
        <CategoryMain data={EARPHONES} />
        <ProductNav />
        <Banner />
        </main>
    )
}

export default Earphones
