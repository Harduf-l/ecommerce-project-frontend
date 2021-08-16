import Cookies from './Cookies'
import React from 'react'

class Content extends React.Component{

    constructor() {
        super()
        this.state = {
            cookies: [{
            header: "עוגיות גרנולה טעימות במיוחד!",
            description: "עוגיות מופלאות מרכיבים טבעיים בלבד.",
            moreDescription: "שיבולת שועל, סילאן, שוקולד מריר. כל הטוב שיש לטבע להציע...",
            loveIt: "תתכוננו להתאהב...",
            price: '35',
            quantity: 1,
            pic1: "https://www.livewellbakeoften.com/wp-content/uploads/2020/09/Apple-Oatmeal-Cookies-7-new.jpg",
            pic2: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_696,h_870/f_jpg,q_auto:eco,w_1500,c_fill,g_auto,ar_1:1/k%2FPhoto%2FRecipes%2F2020-12-jesse's-cookie-club-overnight-oat-cookies%2F2020-12-14_ATK39523",
            pic3: "https://www.kitchensanctuary.com/wp-content/uploads/2014/10/Banana-Oat-Cookies-square-FS-1.jpg"
            }]
        }
    }

    plus = (index) => {
        let myCookieArray = this.state.cookies
        myCookieArray[index].quantity = myCookieArray[index].quantity + 1
        this.setState({cookies: myCookieArray})
    }

    minus = (index) => {
        let myCookieArray = this.state.cookies
        if (myCookieArray[index].quantity > 0) {
            myCookieArray[index].quantity = myCookieArray[index].quantity-1
            this.setState({cookies: myCookieArray})
        }    
    }

    render() {

        return (
            <div>
            {this.state.cookies.map((cookie, index)=>{
               return  <Cookies myid={index} foodContent={cookie} plus={this.plus} minus={this.minus}/>
            })}
           </div>
        )


    }
       
   
}

export default Content 

