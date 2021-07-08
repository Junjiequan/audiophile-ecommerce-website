import React from 'react'
import Hero from '../components/Hero'
import HomeMain from '../components/Main/HomeMain'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'


const Home = () => {
    return (
        <>
        <Hero />
        <ProductList/>
        <HomeMain />
        <Banner />
        </>
    )
}

export default Home
