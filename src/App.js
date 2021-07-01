import React from 'react'
import { Switch,Route } from 'react-router-dom'
import  GlobalStyle  from './GlobalStyle'
import Header from './components/Header/'
import Footer from './components/Footer/'

const App = () => {
  return (
      <>
      <GlobalStyle />
      <Header />

      <Footer />
      </>
  )
}

export default App
