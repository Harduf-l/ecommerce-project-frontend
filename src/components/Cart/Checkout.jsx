import React from 'react'

import  {Link } from "react-router-dom";
import paypal from '../../pictures/baners/paypal.png'
import cards from '../../pictures/baners/cards.png'


class Checkout extends React.Component {

    constructor(props) {
        super(props)

    }


    render() {

            
     return (
        <div>
            {console.log(localStorage.getItem("price"))}
        <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Checkout</h2></span>

        <div className="col-12" style={{backgroundColor: "#f2f5f3"}}>
        <div className="flex d-flex flex-wrap justify-content-around pt-3">
            <div>
                <p style={{backgroundColor: "#f2f5f3"}}>Billing Address:</p>
                <form>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Name" type="text"/>
                    <br/> 
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Last name" type="text"/> 
                    <br/>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Email" type="email"/> 
                    <br/>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Mobile Phone" type="email"/> 
                    <br/>
                    <input style={{margin: "10px 0px", padding: "6px"}} type="checkbox"/> subscribe
                    
                    
                </form>
            </div>
        
            <div>
                <p style={{ backgroundColor: "#f2f5f3"}}>Delivery Address:</p>
                <form>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Name" type="text"/> 
                    <br/> 
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Last name" type="text"/> 
                    <br/>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Country" type="email"/> 
                    <br/>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="City / Suburb" type="email"/> 
                    <br/>
                    <input style={{margin: "10px 0px", padding: "6px"}} placeholder="Zip / Postcode" type="email"/> 
                </form>
            </div>

            <div>
                <p>Total: ${localStorage.getItem("price")}</p>
                <input type="text" style={{margin: "10px 0px", padding: "6px"}} placeholder="credit card number"/>
                <br/>
                <input type="text" style={{margin: "10px 0px", padding: "6px"}} placeholder="*** digits"/>
                <div className="flex d-flex justify-content-between pt-5">
            <img src={paypal} style={{width: "160px"}} />
            <img src={cards} style={{width: "160px"}}/>
                </div>
            <br/>
            <Link to="/cart" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "underline"}}>Go back to shopping cart</span></Link>
    
            </div>
        </div>

    </div>

    </div>
        )
    }
}



export default Checkout; 