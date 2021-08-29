import React from 'react'

import dataCategory from '../Data/dataCategory'
import  {Link } from "react-router-dom";

class Checkout extends React.Component {

    constructor(props) {
        super(props)

    }


    render() {

            
     return (
        <div className="col-lg-6 col-12" style={{backgroundColor: "#f2f5f3"}}>
                
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
        </div>

    </div>
        )
    }
}



export default Checkout; 