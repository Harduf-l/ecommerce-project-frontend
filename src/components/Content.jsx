import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Product from './Product'
import SearchDisplay from './SearchDisplay'
import CatalogForm from './CatalogForm'
import React from 'react'
import Page404 from './Page404'
import Catergory from './Category'
import Home from './Home'
import Login from './Login'
import Cart from './Cart'
import About from './About'

import allproducts from './allproducts'

import cookie_granola1 from '../pictures/cookies/cookie1.jpg'
import cookie_chocolate1 from '../pictures/cookies/chocolate_cookie1.jpg'
import cookie_bliss1 from '../pictures/cookies/bliss_cookie1.jpg'
import cookie_lemon1 from '../pictures/cookies/lemon_cookie1.jpg'
import cookie_surprise1 from '../pictures/cookies/surprise_cookie1.jpg'
import cookie_coconut1 from '../pictures/cookies/coconute_cookie1.jpg'

import walnut_butter1 from '../pictures/butters/walnut-butter1.jpg'
import peanut_spread1 from '../pictures/butters/peanut-spread1.jpg'
import nut_spread1 from '../pictures/butters/nut-spread1.jpg'
import pistachio_buuter from '../pictures/butters/pistachio-buuter.jpg'
import cashew_butter from '../pictures/butters/cashew-butter.jpg'
import chocolate_butter from '../pictures/butters/chocolate-butter.jpg'

import bread1 from '../pictures/bread/baguette.jpg'
import bread2 from '../pictures/bread/spelt-bread.jpg'
import bread3 from '../pictures/bread/sprouted-bread.jpg'
import bread4 from '../pictures/bread/whole-wheat-bread.jpg'
import bread5 from '../pictures/bread/french-bread.jpg'
import bread6 from '../pictures/bread/white.jpg'

import berries from '../pictures/superfood/berries.jpg'
import cacao_seeds from '../pictures/superfood/cacao-seeds.jpg'
import chia from '../pictures/superfood/chia.png'
import goji_berry from '../pictures/superfood/goji-berry.jpg'
import maca_powder from '../pictures/superfood/maca-powder.jpg'
import spirulina from '../pictures/superfood/Spirulina.jpg'



class Content extends React.Component{

    constructor() {
        super()

        let allMyProducts =  [...allproducts.cookies, ...allproducts.spreads, ...allproducts.breads, ...allproducts.superfood]

        allMyProducts =allMyProducts.sort((a, b) => {
            let fa = a.header.toLowerCase(),
                fb = b.header.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        
        this.state = {
            categories: [{
                mypictures: [ cookie_granola1, cookie_chocolate1, cookie_bliss1, cookie_coconut1, cookie_lemon1,cookie_surprise1],
                links: ["/granole-cookie", "/chocoloate-cookie", "/blissful-cookie", "/coconute-cookie", "/lemon-cookie", "/surpise-cookie"],
                infotext: ["granola cookies", "chocolate cookies", "blissful cookies", "coconute cookies", "lemon cookies", "surprise cookies"]
            },
            {
                mypictures: [ walnut_butter1, chocolate_butter, nut_spread1, pistachio_buuter, cashew_butter, peanut_spread1 ],
                links: ["/walnut-butter", "/chocolate-butter" , "/nut-butter", "/pistachio-butter", "/cashew-butter", "/peanut-butter"],
                infotext: ["walnut butter", "chocolate butter", "nut butter", "pistachop butter", "cashew butter",  "peanut butter"]
            },
            {
                mypictures: [bread1,bread2,bread3,bread4,bread5,bread6 ],
                links: ["/baguette", "/seeds-bread" , "/spelt-bread", "/rye-bread", "/french-bread", "/white-bread"],
                infotext: ["baguette", "seeds bread", "spelt bread", "rye bread", "french bread", "white bread"]
            },
            {
                mypictures: [berries,cacao_seeds,chia,goji_berry,maca_powder,spirulina ],
                links: ["/berries", "/cacao-seeds" , "/chia-seeds", "/goji-berry", "/maca-powder", "/spirulina"],
                infotext: ["berries", "cacao seeds", "chia seeds", "goji berry", "maca powder", "spirulina"]
            }
        
            ],
            allProducts:  allMyProducts,
            filteredProducts: allMyProducts,
            categoryOn: "",
            price: false, 
            pricelowest: false,
            pricehighest: false, 
            vaganOn: false,
            lowcarbOn: false,
        }
    }



    backFilteredByCategory() {
        
        switch(this.state.categoryOn) {
            case "cookies":
                return allproducts.cookies; 
            case "spreads":
                return allproducts.spreads; 
            case "superfood":
                return allproducts.superfood
            case "breads":
                return allproducts.breads
            default:
                break; 
            }
    }

    saveWordFilter = (e) => {
        let newWord = e.target.value
        let currentArray = this.state.allProducts

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }
       
        let filteredArray = currentArray.filter(cookie => cookie.header.toLowerCase().includes(newWord))
        this.setState({filteredProducts: filteredArray })
    }

    filterbyPrice = (e) => {
    let currentArray = this.state.allProducts

    if (this.state.categoryOn) {
        currentArray = this.backFilteredByCategory()
    }

    if (e.target.id === "pricelower") {
            currentArray = currentArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
            this.setState({filteredProducts: currentArray })
     
    }
    else if (e.target.id === "pricehigher") {
            currentArray = currentArray.sort((a, b) => (b.price > a.price) ? 1 : -1)
            this.setState({filteredProducts: currentArray })
          
    }

    }

    
    
    functionfilterByPriceRange(currentArray, check) {
    
        if (check === "highest") {
            currentArray = currentArray.filter(product =>  product.price <= this.state.pricehighest)
        }
        else if (check === "lowest") {
            currentArray = currentArray.filter(product => product.price >= this.state.pricelowest)
        }
        return currentArray
        }

        
        
    filterbyPriceRange = (e) => {
         let currentArray = [...this.state.allProducts]
         let numberEntered = +e.target.value 

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }

        if(e.target.id === "lowest" && this.state.pricehighest) {
            currentArray = this.functionfilterByPriceRange(currentArray, "highest")
        } else if (e.target.id === "highest" && this.state.pricehighest) {
            currentArray = this.functionfilterByPriceRange(currentArray, "lowest")
        }

        if (e.target.id === "lowest") {
            currentArray =  currentArray.filter(product => product.price >= numberEntered)
            this.setState({pricelowest: numberEntered})
         
        } else if (e.target.id === "highest") {
            currentArray = currentArray.filter(product =>  product.price <= numberEntered)
            this.setState({pricehighest: numberEntered})
        }

        this.setState({filteredProducts: currentArray })

    }

    filterbySpecialPeople = (e) => {

        let currentArray = this.state.allProducts

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }
       
        if (e.target.value === "vegan") {
            if (e.target.checked) {
                currentArray = currentArray.filter(product => product.vegan === true)
                this.setState({filteredProducts: currentArray })
                this.setState({vaganOn: true})
            } else {
                this.setState({vaganOn: false})
            }
        } else if (e.target.value === "lowcarb") {
            if (e.target.checked) {
            currentArray = currentArray.filter(product => product.lowcarb === true)
            this.setState({filteredProducts: currentArray }) 
            this.setState({lowcarbOn: true})
            }else {
                this.setState({lowcarbOn: false})
            }
        } 

        this.setState({filteredProducts: currentArray }) 

    }


    filterbyCategory = (e) => {
        let currentArray = this.state.allProducts

        switch(e.target.id) {
            case "cookies":
                currentArray = allproducts.cookies
                this.setState({filteredProducts: currentArray })
                this.setState({categoryOn: "cookies"})
              break;
            case "all":
                currentArray = this.state.allProducts
                this.setState({filteredProducts: currentArray })
                this.setState({categoryOn: false})
              break;
            case "spreads":
                currentArray = allproducts.spreads
                this.setState({filteredProducts: currentArray })
                this.setState({categoryOn: "spreads"})
              break;
            case "superfood":
                currentArray = allproducts.superfood
                this.setState({filteredProducts: currentArray })
                this.setState({categoryOn: "superfood"})
              break;
            case "breads":
                currentArray = allproducts.breads
                this.setState({filteredProducts: currentArray })
                this.setState({categoryOn: "breads"})
              break;
            default:
                break; 
            }
    }

    plus = (index) => {
        let myCookieArray = this.state.cookies
        myCookieArray[index].quantity = myCookieArray[index].quantity + 1
        this.setState({cookies: myCookieArray})
    }

    minus = (index) => {
        let myCookieArray = this.state.cookies
        if (myCookieArray[index].quantity > 1) {
            myCookieArray[index].quantity = myCookieArray[index].quantity-1
            this.setState({cookies: myCookieArray})
        }    
    }

    render() {

        
        return (
            
            <Router>
        <div>

        <nav class="navbar navbar-expand-lg navbar-light" style={{borderBottom: "#eaedf2 2px solid", fontSize: "16px"}}>
            <div class="container-fluid">
            <Link className="navbar-brand ms-2" to="/">
            <span><i style={{fontSize: "50px", color: "#e64723"}}class="fas fa-spa"></i></span>
            </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item text-center">
                    <Link className="nav-link"  aria-current="page" to="/">
                    Home page
                    </Link>
                    </li>
                    <li class="nav-item text-center">
                    <Link className="nav-link"  aria-current="page" to="/about">
                    about
                    </Link>
                    </li>
                    <li class="nav-item text-center" >
                    <Link className="nav-link"  aria-current="page" to="/login">
                    login/register
                    </Link>
                    </li>
                    <li class="nav-item text-center">
                    <Link className="nav-link" to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li class="nav-item">
                    <Link className="nav-link" to="/cookies">
                    cookies
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/spreads">
                        spreads
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/breads">
                    breads
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/superfoods">
                    superfoods
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/catalog">
                    catalog
                    </Link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="i would like to buy..." aria-label="Search"/>
                    <Link to="/search"><button class="btn btn-outline-success me-2" type="submit">search</button></Link>
                    </form>
                </div>
            </div>
            </nav>

              <Switch>
                  
                <Route path="/cookies">
                    <Catergory info={this.state.categories[0]}/>
                </Route>
                <Route path="/catalog">
                <div class="row">
                    <div className="col-lg-3 col-12">
                    <CatalogForm filterbyCategory={this.filterbyCategory} filterbySpecialPeople={this.filterbySpecialPeople} filterbyPrice={this.filterbyPrice} filterbyPriceRange={this.filterbyPriceRange} saveWord={this.saveWordFilter}/>
                    </div>

                    <div className="col-lg-9 col-12  d-flex flex-wrap mt-3 justify-content-center">
                    {this.state.filteredProducts.map((cookie, index)=>{
                       return  <SearchDisplay myid={index} foodContent={cookie} />
                    })}
                    </div>
                </div>
             
                </Route>
                <Route path="/spreads">
                    <Catergory info={this.state.categories[1]}/>
                </Route>
                <Route path="/breads">
                    <Catergory info={this.state.categories[2]}/>
                </Route>
                <Route path="/superfoods">
                    <Catergory info={this.state.categories[3]}/>
                </Route>
                <Route path="/granole-cookie">
                 <Product myid={0} foodContent={allproducts.cookies[0]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/chocoloate-cookie">
                 <Product myid={1} foodContent={allproducts.cookies[1]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/blissful-cookie">
                <Product myid={5} foodContent={allproducts.cookies[4]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/coconute-cookie">
                 <Product myid={5} foodContent={allproducts.cookies[5]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/lemon-cookie">
                 <Product myid={3} foodContent={allproducts.cookies[3]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/surpise-cookie">
                 <Product myid={2} foodContent={allproducts.cookies[2]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/walnut-butter">
                 <Product myid={2} foodContent={allproducts.spreads[0]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/chocolate-butter">
                 <Product myid={2} foodContent={allproducts.spreads[5]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/nut-butter">
                 <Product myid={2} foodContent={allproducts.spreads[2]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/pistachio-butter">
                 <Product myid={2} foodContent={allproducts.spreads[3]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/cashew-butter">
                 <Product myid={2} foodContent={allproducts.spreads[4]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/peanut-butter">
                 <Product myid={2} foodContent={allproducts.spreads[1]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/cart" exact>
                    <Cart/>
                </Route>
                <Route component={Page404}/>
              </Switch>
              </div>
          </Router>

        )
    }
       
}

export default Content 