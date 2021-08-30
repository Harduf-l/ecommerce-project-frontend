import React from 'react'

import  {Link } from "react-router-dom";
import paypal from '../../pictures/baners/paypal.png'
import cards from '../../pictures/baners/cards.png'


class Checkout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameInstructions: "",
            nameOK: false,
            lastNameInstructions: "",
            lastNameOK: false,
            emailInstructions: "",
            emailOK: false,
            phoneInstructions: "",
            phoneOK: false,


        }

    }

    checkFirstName = (e) => {
        console.log(e.target.value)
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({nameInstructions: "Enter a valid name"})
            this.setState({nameOK: false})
        } else {
            this.setState({nameInstructions: ""})
            this.setState({nameOK: true})
            localStorage.setItem("name", e.target.value)
        }
    }

    checkLastName = (e) => {
        console.log(e.target.value)
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({lastNameInstructions: "Enter a valid last name"})
            this.setState({lastNameOK: false})
        } else {
            this.setState({lastNameInstructions: ""})
            this.setState({lastNameOK: true})
            localStorage.setItem("lastname", e.target.value)
        }
    }

    checkEmail = (e) => {
        console.log(e.target.value)
        let pattern = /[a-zA-Z0-9-_.]+@[a-z]+.[a-z]{2,4}/gm 
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({emailInstructions: "Enter a valid E-mail"})
            this.setState({emailOK: false})
        } else {
            this.setState({emailInstructions: ""})
            this.setState({emailOK: true})
            localStorage.setItem("email", e.target.value)
        }
    }

    checkPhone = (e) => {
        console.log(e.target.value)
        let pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({phoneInstructions: "Enter a valid phone number"})
            this.setState({phoneOK: false})
        } else {
            this.setState({phoneInstructions: ""})
            this.setState({phoneOK: true})
            localStorage.setItem("phone", e.target.value)
        }
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
                
                    <input style={{padding: "6px"}} onBlur={(e) => this.checkFirstName(e)} placeholder="Name" type="text"/>
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.nameInstructions}</span>
                    <br/> 

                    <input style={{ padding: "6px"}} onBlur={(e) => this.checkLastName(e)} placeholder="Last name" type="text"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.lastNameInstructions}</span>
                    <br/>


                    <input style={{ padding: "6px"}}  onBlur={(e) => this.checkEmail(e)} placeholder="Email" type="email"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.emailInstructions}</span>
                    <br/>


                    <input style={{ padding: "6px"}}  onBlur={(e) => this.checkPhone(e)} placeholder="Mobile Phone" type="email"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.phoneInstructions}</span>
                    <br/>


                    <input style={{padding: "6px"}} type="checkbox"/> subscribe
                    
                    
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
                <br/>
                
                <button className="btn btn-secondary mt-4">Place order</button>
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