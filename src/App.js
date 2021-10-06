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
import AdminsPortal from './components/AdminsPortal/AdminsPortal'
import Favorites from './components/Favorites/Favorites'


import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Category from "./components/Category/Category"
import Members from "./components/Protected/Members"
import Checkout from './components/Cart/Checkout'
// import OrderCompleted from './components/Cart/OrderCompleted'
import { auth } from "../src/firebase"

class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        isLogged: false,
        userName: false,
        numOfFav: 0,
  }

}

  numOfFav = () => {
    this.setState({numOfFav: this.state.numOfFav+1})
  }



  checkUserName = () => {

    return auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({userName: user.displayName}) 
      } else {
        this.setState({userName: false}) 
      }
    })

  }
  
  componentDidMount() {
    this.checkUserName()
  }
  

render() {
  return (
      <div id="htmldiv">
        <div id="bodydiv">

          <Header itemsInCart={this.state.numberInCart} numOfFav={this.state.numOfFav} userName={this.state.userName} logged={this.state.isLogged} />

            <AuthProvider>
              <Switch>
              <Route exact path="/" component={Home2} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/categories/cookies" render={() => <Category name = "cookies"/>}/>
              <Route path="/categories/spreads" render={() => <Category name = "spreads"/>}/>
              <Route path="/categories/breads" render={() => <Category name = "breads"/>}/>
              <Route path="/categories/superfood" render={() => <Category name = "superfood"/>}/>
              
              {/* <Route path="/ordercompleted" component={OrderCompleted} /> */}
              <Route path="/cart" render={(props) => <Cart  {...props}/>} />    
              
              <PrivateRoute path="/favorites" component={Favorites} myfunc={this.checkUserName}/>

              <PrivateRoute path="/membersZone" component={Members} myfunc={this.checkUserName}/>
              <PrivateRoute path="/adminsPortal" component={AdminsPortal} myfunc={this.checkUserName}/>
              
              <PrivateRoute path="/dashboard" component={Dashboard} myfunc={this.checkUserName} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} myfunc={this.checkUserName} />
              <Route path="/signup"  render={(props) => <Signup checkUserName={this.checkUserName} {...props}/>} />
              <Route path="/login"  render={(props) => <Login checkUserName={this.checkUserName} {...props}/>} />
              <Route path="/forgot-password" component={ForgotPassword} />

              <Route path="/product/:id" render={(props) => <Product  numOfFav={this.numOfFav} {...props}/>} />
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/checkout" component={Checkout} />
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
