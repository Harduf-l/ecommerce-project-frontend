import './App.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Switch } from "react-router-dom";


import Product from './components/Product'

import React from 'react'
import Page404 from './components/Page404'

import Home from './components/Home'
import Login from './components/Login'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import Category from "./components/Category"

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
