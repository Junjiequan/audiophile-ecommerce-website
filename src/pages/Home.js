import React from 'react'
import Hero from '../components/Hero/HomeHero'
import HomeMain from '../components/Main/HomeMain'
import Banner from '../components/Banner'
import ProductNav from '../components/ProductNav'


const Home = () => {
    return (
        <main>
        <Hero />
        <ProductNav/>
        <HomeMain />
        <Banner />
        </main>
    )
}

export default Home
