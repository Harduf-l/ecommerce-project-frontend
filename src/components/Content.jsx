import Cookies from './Cookies'
import React from 'react'
import cookie1 from '../pictures/cookie1.jpg'
import cookie2 from '../pictures/cookie2.jpg'
import cookie3 from '../pictures/cookie3.jpg'

class Content extends React.Component{

    constructor() {
        super()
        this.state = {
            cookies: [{
            header: "Oats cookies",
            description: "wonderful cookies, natural ingrediends only.",
            moreDescription:   "oats, dates syrup, bitter sweet chocolat. everything nature can offer us.",
            loveIt: "you are going to fall in love...",
            info: "In order to keep cookies fresh as possible, please keep them in the refrigerator. as well, please notice oats are best eaten with fruits, in order to supply your body everything it needs. a perfect breakfast is suitable for athlets, meditators, and people all over the world. respect your body, you will not regret it. with us, you can be sure you nourish it well.",
            fixedPrice: 9,
            price: 9,
            quantity: 1,
            pic1: cookie1,
            pic2: cookie2,
            pic3: cookie3
            }]
        }
    }

    plus = (index) => {
        let myCookieArray = this.state.cookies
        myCookieArray[index].quantity = myCookieArray[index].quantity + 1
        myCookieArray[index].price =  myCookieArray[index].fixedPrice *  myCookieArray[index].quantity
        this.setState({cookies: myCookieArray})
    }

    minus = (index) => {
        let myCookieArray = this.state.cookies
        if (myCookieArray[index].quantity > 1) {
            myCookieArray[index].quantity = myCookieArray[index].quantity-1
            myCookieArray[index].price =  myCookieArray[index].fixedPrice *  myCookieArray[index].quantity
            this.setState({cookies: myCookieArray})
        }    
    }

    render() {

        return (
            <div>
            {this.state.cookies.map((cookie, index)=>{
               return  <Cookies key={index} myid={index} foodContent={cookie} plus={this.plus} minus={this.minus}/>
            })}
           </div>
        )


    }
       
   
}

export default Content 

