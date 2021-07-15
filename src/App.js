import React from 'react'
import { Switch,Route,useLocation } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import  GlobalStyle  from './GlobalStyle'
import Header from './components/Header/'
import Footer from './components/Footer/'
import Home from './pages/Home'
import Headphones from './pages/Category/Headphones'
import Speakers from './pages/Category/Speakers'
import Earphones from './pages/Category/Earphones'
import ProductDetail from './pages/ProductDetail'
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
  Aos.init();
  const location = useLocation();
  return (
      <>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/headphones" component={Headphones} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/earphones" component={Earphones} />
        {/* /product_detail/${CREATE CURRENT PAGE} : Probably will work this way? will give it a try after off work tomorrow */}
        <Route path="/product_detail/:id" component={ProductDetail} />
      </Switch>
      <Footer />
      </>
      
  )
}

export default App
