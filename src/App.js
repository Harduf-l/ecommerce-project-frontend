import './App.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import { Route, Switch } from "react-router-dom";


import Product from './components/Product/Product'

import React from 'react'
import Page404 from './components/Page404/Page404'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Category from "./components/Category/Category"
import Members from "./components/Protected/Members"
import ProtectedRoute from "./components/Protected/Protected"


function App() {
  return (
      <div id="htmldiv">
        <div id="bodydiv">
          <Header/>
  
              <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/cookies" render={() => <Category num = {0}/>}/>
              <Route path="/spreads" render={() => <Category num = {1}/>}/>
              <Route path="/breads" render={() => <Category num = {2}/>}/>
              <Route path="/superfood" render={() => <Category num = {3}/>}/>
              <ProtectedRoute path="/membersZone" component={Members}/>
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/product/:id" component={Product} />
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/" component={Home} />
              <Route component={Page404} />
              </Switch>
        </div>

        <div id="footerdiv">
          <Footer/>
        </div>
    </div>
  );
}

export default App;
