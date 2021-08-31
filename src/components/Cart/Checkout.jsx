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
            nameClass: "regularInput",

            lastNameInstructions: "",
            lastNameOK: false,
            lastNameClass: "regularInput",

            emailInstructions: "",
            emailOK: false,
            emailClass: "regularInput",

            phoneInstructions: "",
            phoneOK: false,
            phoneClass: "regularInput",

            nameInstructions2: "",
            nameOK2: false,
            nameClass2: "regularInput",

            lastNameInstructions2: "",
            lastNameOK2: false,
            lastNameClass2: "regularInput",

            countyInstructions: "",
            countryOK: false,
            countryClass: "regularInput",

            cityInstructions: "",
            cityOK: false,
            cityClass: "regularInput",

            zipInstructions: "",
            zipOK: false,
            zipClass: "regularInput",

        }

    }

    allValid = () => {
        if (this.state.nameOK && 
        this.state.emailOK &&
        this.state.lastNameOK &&
        this.state.phoneOK &&
        this.state.zipOK &&
        this.state.cityOK &&
        this.state.countryOK &&
        this.state.lastNameOK2 &&
        this.state.nameOK2 ) {
            console.log("order is placed")
        } else {
            console.log("something is not valid")
            console.log("name " + this.state.nameOK)
            console.log("email " +  this.state.emailOK)
            console.log("lastname " + this.state.lastNameOK)
            console.log("phone " + this.state.phoneOK)
            console.log("zip " + this.state.zipOK)
            console.log("city " +  this.state.cityOK)
            console.log("country " + this.state.countryOK)
            console.log("lastname2 " + this.state.lastNameOK2)
            console.log("name2 " + this.state.nameOK2)
        }

     }

    checkFirstName = (e) => {
        
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)


        switch(e.target.id) {
            case "firstname":
                if (!result) {
                    this.setState({nameInstructions: "Enter a valid first name"})
                    this.setState({nameOK: false})
                    this.setState({nameClass: "badInput"})
                } else {
                    this.setState({nameOK: ""})
                    this.setState({nameOK: true})
                    localStorage.setItem("firstname", e.target.value)
                    this.setState({nameClass: "goodInput"})
                }
              break;
            case "firstname2":
                if (!result) {
                    this.setState({nameInstructions2: "Enter a valid first name"})
                    this.setState({nameOK2: false})
                    this.setState({nameClass2: "badInput"})
                } else {
                    this.setState({nameInstructions2: ""})
                    this.setState({nameOK2: true})
                    localStorage.setItem("lastname2", e.target.value)
                    this.setState({nameClass2: "goodInput"})
                }
              break;
            default:
                break; 
          }
    }

    checkLastName = (e) => {

        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)

        switch(e.target.id) {
            case "lastname":
                if (!result) {
                    this.setState({lastNameInstructions: "Enter a valid last name"})
                    this.setState({lastNameOK: false})
                    this.setState({lastNameClass: "badInput"})
                } else {
                    this.setState({lastNameInstructions: ""})
                    this.setState({lastNameOK: true})
                    localStorage.setItem("lastname", e.target.value)
                    this.setState({lastNameClass: "goodInput"})
                }
              break;
            case "lastname2":
                if (!result) {
                    this.setState({lastNameInstructions2: "Enter a valid last name"})
                    this.setState({lastNameOK2: false})
                    this.setState({lastNameClass2: "badInput"})
                } else {
                    this.setState({lastNameInstructions2: ""})
                    this.setState({lastNameOK2: true})
                    localStorage.setItem("lastname2", e.target.value)
                    this.setState({lastNameClass2: "goodInput"})
                }
              break;
            default:
                break; 
          }


    }

    checkEmail = (e) => {
      
        let pattern = /[a-zA-Z0-9-_.]+@[a-z]+.[a-z]{2,4}/gm 
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({emailInstructions: "Enter a valid E-mail"})
            this.setState({emailOK: false})
            this.setState({emailClass: "badInput"})
        } else {
            this.setState({emailInstructions: ""})
            this.setState({emailOK: true})
            localStorage.setItem("email", e.target.value)
            this.setState({emailClass: "goodInput"})
        }
    }

    checkPhone = (e) => {
      
        let pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({phoneInstructions: "Enter a valid phone number"})
            this.setState({phoneOK: false})
            this.setState({phoneClass: "badInput"})
        } else {
            this.setState({phoneInstructions: ""})
            this.setState({phoneOK: true})
            localStorage.setItem("phone", e.target.value)
            this.setState({phoneClass: "goodInput"})
        }
    }

    checkcountry = (e) => {
        
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({countyInstructions: "Enter a valid country name"})
            this.setState({countryOK: false})
            this.setState({countryClass: "badInput"})
        } else {
            this.setState({countyInstructions: ""})
            this.setState({countryOK: true})
            localStorage.setItem("country", e.target.value)
            this.setState({countryClass: "goodInput"})
        }
    }


    checkcity = (e) => {
      
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({cityInstructions: "Enter a valid city name"})
            this.setState({cityOK: false})
            this.setState({cityClass: "badInput"})
        } else {
            this.setState({cityInstructions: ""})
            this.setState({cityOK: true})
            localStorage.setItem("city", e.target.value)
            this.setState({cityClass: "goodInput"})
        }
    }

    checkzip = (e) => {
      
        let pattern = /\b\d{6}\b/g
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({zipInstructions: "Enter a valid zip code - 6 digits"})
            this.setState({zipOK: false})
            this.setState({zipClass: "badInput"})
        } else {
            this.setState({zipInstructions: ""})
            this.setState({zipOK: true})
            localStorage.setItem("zip", e.target.value)
            this.setState({zipClass: "goodInput"})
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
                
                    <input className={this.state.nameClass} onBlur={(e) => this.checkFirstName(e)} id="firstname" placeholder="Name" type="text"/>
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.nameInstructions}</span>
                    <br/> 

                    <input  className={this.state.lastNameClass}  onBlur={(e) => this.checkLastName(e)} id="lastname" placeholder="Last name" type="text"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.lastNameInstructions}</span>
                    <br/>


                    <input className={this.state.emailClass}   onBlur={(e) => this.checkEmail(e)} placeholder="Email" type="email"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.emailInstructions}</span>
                    <br/>


                    <input className={this.state.phoneClass}  onBlur={(e) => this.checkPhone(e)} placeholder="Mobile Phone" type="email"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.phoneInstructions}</span>
                    <br/>


                    <input style={{padding: "6px"}} type="checkbox"/> subscribe
                    
                    
                </form>
            </div>
        
            <div>
                <p style={{ backgroundColor: "#f2f5f3"}}>Delivery Address:</p>
                <form>
                <input className={this.state.nameClass2} onBlur={(e) => this.checkFirstName(e)} id="firstname2" placeholder="Name" type="text"/>
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.nameInstructions2}</span>
                    <br/> 

                    <input  className={this.state.lastNameClass2}  onBlur={(e) => this.checkLastName(e)} id="lastname2" placeholder="Last name" type="text"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.lastNameInstructions2}</span>
                    <br/>

                    <input className={this.state.countryClass}  onBlur={(e) => this.checkcountry(e)} placeholder="Country" type="email"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.countyInstructions}</span>
                    <br/>


                    <input className={this.state.cityClass}   onBlur={(e) => this.checkcity(e)} placeholder="City / Suburb" type="email"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.cityInstructions}</span>
                    <br/>

                    <input className={this.state.zipClass} onBlur={(e) => this.checkzip(e)}  placeholder="Zip / Postcode" type="text"/> 
                    <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.zipInstructions}</span>
                    <br/>

                </form>
            </div>

            <div>
                <p>Total: ${localStorage.getItem("price")}</p>
                <input type="text" style={{margin: "10px 0px", padding: "6px"}} placeholder="credit card number"/>
                <br/>
                <input type="text" style={{margin: "10px 0px", padding: "6px"}} placeholder="*** digits"/>
                <br/>
                
                <button onClick={this.allValid} className="btn btn-secondary mt-4">Place order</button>
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