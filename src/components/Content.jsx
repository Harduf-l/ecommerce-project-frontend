import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './Product'
import SearchDisplay from './SearchDisplay'
import CatalogForm from './CatalogForm'
import Header from './Header'
import React from 'react'



import cookie_granola1 from '../pictures/cookies/cookie1.jpg'
import cookie_granola2 from '../pictures/cookies/cookie2.jpg'
import cookie_granola3 from '../pictures/cookies/cookie3.jpg'

import cookie_chocolate1 from '../pictures/cookies/chocolate_cookie1.jpg'
import cookie_chocolate2 from '../pictures/cookies/chocolate_cookie2.jpg'
import cookie_chocolate3 from '../pictures/cookies/chocolate_cookie3.jpg'

import cookie_bliss1 from '../pictures/cookies/bliss_cookie1.jpg'
import cookie_bliss2 from '../pictures/cookies/bliss-cookie2.jpg'
import cookie_bliss3 from '../pictures/cookies/bliss-cookie3.jpg'

import cookie_lemon1 from '../pictures/cookies/lemon_cookie1.jpg'
import cookie_lemon2 from '../pictures/cookies/lemon-cookie2.jpg'
import cookie_lemon3 from '../pictures/cookies/lemon-cookie3.jpg'

import cookie_surprise1 from '../pictures/cookies/surprise_cookie1.jpg'
import cookie_surprise2 from '../pictures/cookies/surprise_cookie2.jpg'
import cookie_surprise3 from '../pictures/cookies/surprise_cookie3.jpg'

import cookie_coconut1 from '../pictures/cookies/coconute_cookie1.jpg'
import cookie_coconut2 from '../pictures/cookies/coconute_cookie2.jpg'
import cookie_coconut3 from '../pictures/cookies/coconute_cookie3.jpg'

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


import Catergory from './Category'


import Home from './Home'

class Content extends React.Component{

    constructor() {
        super()

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
            cookies: [{
            header: "Oats cookies",
            description: "wonderful cookies, natural ingrediends only.",
            moreDescription:   "oats, dates syrup, bitter sweet chocolat. everything nature can offer us.",
            loveIt: "you are going to fall in love...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 9,
            previousPrice: 13,
            price: 9,
            quantity: 1,
            pic1: cookie_granola1,
            pic2: cookie_granola2,
            pic3: cookie_granola3
            },
            {
            header: "Chocolate cookies",
            description: "chocolate cookies, for children and adults alike.",
            moreDescription:   "special texture that feel so smooth. only natural ingredients.",
            loveIt: "Those chocolate cookies will melt your heart...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 8,
            previousPrice: 13,
            price: 8,
            quantity: 1,
            pic1: cookie_chocolate1,
            pic2: cookie_chocolate2 ,
            pic3: cookie_chocolate3
            },
            {
            header: "Surprise cookies",
            description: "everyone likes surprises. don't tell us otherwise.",
            moreDescription:   "les us choose for you, a natural based cookies with an edge.",
            loveIt: "we are sure you are going to like it...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 8,
            previousPrice: 13,
            price: 10,
            quantity: 1,
            pic1: cookie_surprise1,
            pic2: cookie_surprise2,
            pic3: cookie_surprise3
            },
            {
            header: "Lemon cookies",
            description: "sophisticated yet delicate.",
            moreDescription:   "an airy cookie with pure lemon extract. very sour, beware.",
            loveIt: "cookies that feel so divine...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 8,
            previousPrice: 13,
            price: 12,
            quantity: 1,
            pic1: cookie_lemon1,
            pic2: cookie_lemon2,
            pic3: cookie_lemon3
            },
            {
            header: "Bliss cookies",
            description: "rasphery and vanilla, a mix made in heaven",
            moreDescription:   "special texture that feel so smooth. only natural ingredients.",
            loveIt: "Those blissful cookies are going to be your new favorite...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 8,
            previousPrice: 13,
            price: 11,
            quantity: 1,
            pic1: cookie_bliss1,
            pic2: cookie_bliss2,
            pic3: cookie_bliss3
            },
            {
            header: "Coconut cookies",
            description: "coconut cookies, try someting new.",
            moreDescription:   "smooth texture with whole pieces of coconut. only natural ingredients.",
            loveIt: "You will not forget them...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 8,
            previousPrice: 13,
            price: 7,
            quantity: 1,
            pic1: cookie_coconut1,
            pic2: cookie_coconut2,
            pic3: cookie_coconut3
            }
            ],
            filterWord: "",
            filteredCookie: [{
                header: "Oats cookies",
                description: "wonderful cookies, natural ingrediends only.",
                moreDescription:   "oats, dates syrup, bitter sweet chocolat. everything nature can offer us.",
                loveIt: "you are going to fall in love...",
                info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
                fixedPrice: 9,
                previousPrice: 13,
                price: 9,
                quantity: 1,
                pic1: cookie_granola1,
                pic2: cookie_granola2,
                pic3: cookie_granola3
                },
                {
                header: "Chocolate cookies",
                description: "chocolate cookies, for children and adults alike.",
                moreDescription:   "special texture that feel so smooth. only natural ingredients.",
                loveIt: "Those chocolate cookies will melt your heart...",
                info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
                fixedPrice: 8,
                previousPrice: 13,
                price: 8,
                quantity: 1,
                pic1: cookie_chocolate1,
                pic2: cookie_chocolate2 ,
                pic3: cookie_chocolate3
                },
                {
                header: "Surprise cookies",
                description: "everyone likes surprises. don't tell us otherwise.",
                moreDescription:   "les us choose for you, a natural based cookies with an edge.",
                loveIt: "we are sure you are going to like it...",
                info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
                fixedPrice: 8,
                previousPrice: 13,
                price: 8,
                quantity: 1,
                pic1: cookie_surprise1,
                pic2: cookie_surprise2,
                pic3: cookie_surprise3
                },
                {
                header: "Lemon cookies",
                description: "sophisticated yet delicate.",
                moreDescription:   "an airy cookie with pure lemon extract. very sour, beware.",
                loveIt: "cookies that feel so divine...",
                info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
                fixedPrice: 8,
                previousPrice: 13,
                price: 8,
                quantity: 1,
                pic1: cookie_lemon1,
                pic2: cookie_lemon2,
                pic3: cookie_lemon3
                },
                {
                header: "Bliss cookies",
                description: "rasphery and vanilla, a mix made in heaven",
                moreDescription:   "special texture that feel so smooth. only natural ingredients.",
                loveIt: "Those blissful cookies are going to be your new favorite...",
                info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
                fixedPrice: 8,
                previousPrice: 13,
                price: 8,
                quantity: 1,
                pic1: cookie_bliss1,
                pic2: cookie_bliss2,
                pic3: cookie_bliss3
                },
                {
                header: "Coconut cookies",
                description: "coconut cookies, try someting new.",
                moreDescription:   "smooth texture with whole pieces of coconut. only natural ingredients.",
                loveIt: "You will not forget them...",
                info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
                fixedPrice: 8,
                previousPrice: 13,
                price: 8,
                quantity: 1,
                pic1: cookie_coconut1,
                pic2: cookie_coconut2,
                pic3: cookie_coconut3
                }
                ]
        }


    }

    saveWordFilter = (e) => {
        let newWord = e.target.value
        let currentArray = this.state.cookies
        console.log(currentArray)
        let filteredArray = currentArray.filter(cookie => cookie.header.toLowerCase().includes(newWord))
        console.log(filteredArray)

        this.setState({filteredCookie: filteredArray })
    }

    filterbyPrice = (e) => {
    let currentArray = this.state.cookies
    if (e.target.id === "pricelower") {
        if (e.target.checked) {
            currentArray = currentArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
            this.setState({filteredCookie: currentArray })
        }   
    }
    else if (e.target.id === "pricehigher") {
        if (e.target.checked) {
            currentArray = currentArray.sort((a, b) => (b.price > a.price) ? 1 : -1)
            this.setState({filteredCookie: currentArray })
        }   
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
                <Header saveWord={this.saveWordFilter}/>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/cookies">
                    <Catergory info={this.state.categories[0]}/>
                </Route>
                <Route path="/catalog">
                    <CatalogForm filterbyPrice={this.filterbyPrice}/>
                    <div className="d-flex flex-wrap mt-3 justify-content-center">
                    {this.state.filteredCookie.map((cookie, index)=>{
                       return  <SearchDisplay myid={index} foodContent={cookie} plus={this.plus} minus={this.minus}  />
                    })}
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
                 <Product myid={0} foodContent={this.state.cookies[0]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/chocoloate-cookie">
                 <Product myid={1} foodContent={this.state.cookies[1]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/blissful-cookie">
                </Route>
                <Route path="/coconute-cookie">
                 <Product myid={5} foodContent={this.state.cookies[5]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/lemon-cookie">
                 <Product myid={3} foodContent={this.state.cookies[3]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/surpise-cookie">
                 <Product myid={2} foodContent={this.state.cookies[2]} plus={this.plus} minus={this.minus}/>
                </Route>
                <Route path="/" exact>
                    <Home/>
                </Route>
              </Switch>
          </Router>


        )


    }
       
   
}

export default Content 

