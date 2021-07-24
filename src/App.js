import React from 'react'
import { Switch,Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import  GlobalStyle  from './GlobalStyle'
import Header from './components/Header/'
import Footer from './components/Footer/'
import Home from './pages/Home'
import Headphones from './pages/Category/Headphones'
import Speakers from './pages/Category/Speakers'
import Earphones from './pages/Category/Earphones'
import ProductDetail from './pages/ProductDetail'
import CartModal from './components/CartModal'
import CheckoutPage from './pages/CheckoutPage';
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
  Aos.init({
    once:true
  });

  return (
      <>
      <GlobalStyle />
      <ScrollToTop  />
      <CartModal/>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/headphones" component={Headphones} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/earphones" component={Earphones} />
        <Route path="/product_detail/:id"  component={ProductDetail} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
      
      <Footer />
      </>
      
  )
}

export default App
