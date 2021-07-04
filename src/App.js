import React from 'react'
import { Switch,Route } from 'react-router-dom'
import  GlobalStyle  from './GlobalStyle'
import Header from './components/Header/'
import Footer from './components/Footer/'
import Home from './pages/Home'
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {
  Aos.init();
  return (
      <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
      </>
  )
}

export default App
