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
            header: "עוגיות גרנולה טעימות במיוחד",
            description: "עוגיות מופלאות מרכיבים טבעיים בלבד.",
            moreDescription: "שיבולת שועל, סילאן, שוקולד מריר. כל הטוב שיש לטבע להציע...",
            loveIt: "תתכוננו להתאהב...",
            info: "עבור שמירה על פריכותן המקסימלית של העוגיות, רצוי לשמור אותן בהקפאה. בנוסף, שיבולת שועל טובה ביותר לבריאות, ויש לצרוך אותה בשעות הבוקר, עם פירות טריים. שילוב זה מקנה אנרגיה לאורך כל היום. שיבולת השועל עשירה באשלגן, ויחד עם הוויטמינים המצויים בפירות, מהווים תצרוכת מיטבית לגופנו. הקינמון שלנו, יוסיף את מנת הברזל רצויה, וכך תהנו מארוחת בוקר שהגוף שלכם יודה לכם עליה.",
            fixedPrice: 35,
            price: 35,
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

