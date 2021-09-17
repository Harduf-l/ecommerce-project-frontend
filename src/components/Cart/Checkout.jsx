import React from 'react'
import  {Link } from "react-router-dom";

import CheckoutCart from './CheckoutCart'
import Paypal from './Paypal'

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

            countyInstructions: "",
            countryOK: false,
            countryClass: "regularInput",

            cityInstructions: "",
            cityOK: false,
            cityClass: "regularInput",

            zipInstructions: "",
            zipOK: false,
            zipClass: "regularInput",

            addressInstructions: "", 
            addressOK: false,
            addressClass: "regularInput",


            endProcess: false, 

        }

    }

    allValid = () => {
        if (this.state.nameOK && 
        this.state.emailOK &&
        this.state.lastNameOK &&
        this.state.phoneOK &&
        this.state.zipOK &&
        this.state.cityOK &&
        this.state.addressOK &&
        this.state.countryOK 
         ) {
            console.log("order is placed")
            this.setState({endProcess: true})
        } else {
            if (!this.state.nameOK) {
                this.setState({nameInstructions: "Enter a valid first name"})
                this.setState({nameClass: "badInput"})
            }

            if (!this.state.emailOK) {
                this.setState({emailInstructions: "Enter a valid E-mail"})
                this.setState({emailClass: "badInput"})
            }
            if (!this.state.lastNameOK) {
                this.setState({lastNameInstructions: "Enter a valid last name"})
                this.setState({lastNameClass: "badInput"})
            }
            if (!this.state.phoneOK) {
                this.setState({phoneInstructions: "Enter a valid phone number"})
                this.setState({phoneClass: "badInput"})
            }
            if (!this.state.zipOK) {
                this.setState({zipInstructions: "Enter a valid zip code - 6 digits"})
                this.setState({zipClass: "badInput"})
            }
            if (!this.state.cityOK) {
                this.setState({cityInstructions: "Enter a valid city name"})
                this.setState({cityClass: "badInput"})
            }
            if (!this.state.countryOK) {
                this.setState({countyInstructions: "Enter a valid country name"})
                this.setState({countryClass: "badInput"})
            }
            if (!this.state.addressOK) {
                this.setState({addressInstructions: "Enter a valid address"})
                this.setState({addressClass: "badInput"})
            }

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
                    this.setState({nameInstructions: ""})
                    this.setState({nameOK: true})
                    localStorage.setItem("firstname", e.target.value)
                    this.setState({nameClass: "goodInput"})
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

    checkAddress = (e) => {
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({addressInstructions: "Enter a valid city name"})
            this.setState({addressOK: false})
            this.setState({addressClass: "badInput"})
        } else {
            this.setState({addressInstructions: ""})
            this.setState({addressOK: true})
            localStorage.setItem("address", e.target.value)
            this.setState({addressClass: "goodInput"})
        }
    }


    calculateTotal = () => {

        let result = localStorage.getItem("price"); 
        return result; 
    
        }


    render() {

            
     return (

        <div className="container">
            
        <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "50px"}}>Checkout</h2></span>
  

  <div className="row">
        <div className="col-lg-7 col-12">

            <p style={{ fontSize: "20px"}}>Shipping address</p>

            <div className="row">
                <div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <input className={this.state.nameClass} onBlur={(e) => this.checkFirstName(e)} id="firstname" placeholder="Name" value={(localStorage.getItem("namelogged")) && localStorage.getItem("namelogged")} type="text"/>
                    <div className="errorMsg">{this.state.nameInstructions}</div>
                </div>

                <div className="col-lg-6 col-12">
                    <input  className={this.state.lastNameClass}  onBlur={(e) => this.checkLastName(e)} id="lastname" placeholder="Last name" type="text"/> 
                    <div className="errorMsg">{this.state.lastNameInstructions}</div>
                </div>
            </div>



                <div className="row">

                    <div className="col-lg-6 col-12">
                        <input className={this.state.zipClass} onBlur={(e) => this.checkzip(e)}  placeholder="Zip / Postcode" type="text"/> 
                        <div className="errorMsg">{this.state.zipInstructions}</div>
                    </div>

                    <div  className="col-lg-6 col-12">
                        <input className={this.state.countryClass}  onBlur={(e) => this.checkcountry(e)} placeholder="Country" type="text"/> 
                        <div className="errorMsg">{this.state.countyInstructions}</div>
                    </div>
               
                </div>

                <input className={this.state.emailClass}   onBlur={(e) => this.checkEmail(e)} placeholder="Email" type="email"/> 
               
               <div className="errorMsg">{this.state.emailInstructions}</div>
          

                <input className={this.state.phoneClass}  onBlur={(e) => this.checkPhone(e)} placeholder="Mobile Phone" type="text"/> 
               
               <div className="errorMsg">{this.state.phoneInstructions}</div>


                    <input className={this.state.cityClass}   onBlur={(e) => this.checkcity(e)} placeholder="City / Suburb" type="text"/> 
                    <div className="errorMsg">{this.state.cityInstructions}</div>

                    <input className={this.state.addressClass}   onBlur={(e) => this.checkAddress(e)} placeholder="Full address" type="text"/> 
                    <div className="errorMsg">{this.state.addressInstructions}</div>
               

                    <input style={{padding: "6px", marginTop: "20px"}} type="checkbox"/> Subscribe
               </div>

            </div>


        </div>
  

        <div className="col-lg-5 col-12 pt-md-5 pt-5 pt-lg-0 ps-4" style={{backgroundColor: "#f3f3f3"}}>

            <div className="col-12">
                <CheckoutCart/>
            </div>

            <div style={{color: "#474747", fontWeight: "470", marginTop: "40px"}}>

                <div className="flex d-flex justify-content-between" style={{borderBottom: "1px solid #f3f3f3", paddingBottom: "8px"}}>
                <div>Items total</div> <div> ${(this.calculateTotal() -localStorage.getItem("deliveryPrice")).toFixed(1) } </div>

                </div>

                <div className="flex d-flex justify-content-between mt-2" style={{borderBottom: "1px solid #f3f3f3", paddingBottom: "8px"}}>
                <div>Shipping</div> <div>${localStorage.getItem("deliveryPrice")}</div>
                </div>

            </div>
                <div  className="flex d-flex justify-content-between mt-3"> 
                <div style={{fontWeight: "500", fontSize: "17px"}}>TOTAL FOR YOUR ORDER</div> <div className="ms-1"> ${this.calculateTotal()}</div>
                </div>
                <div className= "flex d-flex justify-content-between">
                <button onClick={this.allValid} className="btn btn-light btn-lg mt-4" style={{backgroundColor: "#8fa663", color: "white"}}>Place order</button>
                <Link className="align-self-end" to="/cart" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "underline"}}>Go back to shopping cart</span></Link>
                </div>
            
{/*   
            <div className="mt-4 flex d-flex justify-content-between">
            <img src={paypal} style={{width: "160px"}} alt={"paypal"}/>
            <img src={cards} style={{width: "160px"}} alt={"creditCard"}/>
            </div> */}

            {this.state.endProcess && 
            <Paypal/> }

        </div>
    </div>

    </div>
        

        )
    }
}



export default Checkout; 
