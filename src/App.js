import React from 'react'
import { Switch,Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import  GlobalStyle  from './GlobalStyle'
import Header from './components/Header/'
import Footer from './components/Footer/'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {
  Aos.init();
  return (
      <>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/headphones">
          <Headphones />
        </Route>
        <Route exact path="/speakers">
          <Speakers />
        </Route>
        <Route exact path="/earphones">
          <Earphones />
        </Route>
      </Switch>
      <Footer />
      </>
  )
}

export default App
