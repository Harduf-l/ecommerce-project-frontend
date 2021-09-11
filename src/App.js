import './App.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { AuthProvider } from "../src/contexts/AuthContext"

import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import { Route, Switch } from "react-router-dom";


import Product from './components/Product/Product'

import React from 'react'
import Page404 from './components/Page404/Page404'
import Home2 from './components/Home/Home2'
import Signup from './components/Login/Signup'
import PrivateRoute from './components/Login/PrivateRoute'
import Dashboard from './components/Login/Dashboard'
import UpdateProfile from './components/Login/UpdateProfile'
import Login from './components/Login/Login'
import ForgotPassword from './components/Login/ForgotPassword'




import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Category from "./components/Category/Category"
import Members from "./components/Protected/Members"
import ProtectedRoute from "./components/Protected/Protected"
import Checkout from './components/Cart/Checkout'


class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        numberInCart: 0,
        isLogged: false,
      }

  }

  checkCart = () => {
    if ( localStorage.getItem("cart") == null || localStorage.getItem("cart") === [] ) {
      this.setState({numberInCart: 0})
  } else {
      let cart = JSON.parse(localStorage.getItem("cart")); 
      let number = 0;

      for (let i=0; i< cart.length; i++) {
        number = number + cart[i].quantity
      }

      this.setState({numberInCart: number})
  }

  }

  checkLogged = () => {
    if ( !localStorage.getItem("isLogged") ) {
      this.setState({isLogged: false})
  } else {
      this.setState({isLogged: true})
      }
  }
  

render() {
  return (
      <div id="htmldiv">
        <div id="bodydiv">
          <Header itemsInCart={this.state.numberInCart} logged={this.state.isLogged} checkCart={this.checkCart}/>
            <AuthProvider>
              <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/product/cookies" render={() => <Category num = {0}/>}/>
              <Route path="/product/spreads" render={() => <Category num = {1}/>}/>
              <Route path="/product/breads" render={() => <Category num = {2}/>}/>
              <Route path="/product/superfood" render={() => <Category num = {3}/>}/>
              <ProtectedRoute path="/membersZone" component={Members}/>
              <Route path="/cart" render={(props) => <Cart checkCart={this.checkCart} {...props}/>} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/product/:id" render={(props) => <Product checkCart={this.checkCart} {...props}/>} />
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/" component={Home2} />
              <Route component={Page404} />
              </Switch>
              </AuthProvider>

        </div>

        <div id="footerdiv">
          <Footer/>
        </div>
    </div>
  );
}
}

export default App;
