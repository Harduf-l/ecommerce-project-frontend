import React, {useState} from 'react'
import  {Link } from "react-router-dom";

import CheckoutCart from './CheckoutCart'
import Paypal from './Paypal'

import { connect } from 'react-redux'
import axios from "axios";
import { changeItems } from "../../redux/actions/cartActions";
import { useAuth } from "../../contexts/AuthContext"


let Checkout = (props) => {

    const { currentUser } = useAuth()
    let firebaseEmail = "";

    if (currentUser) {
    firebaseEmail = currentUser.email
    }


    const [nameInstructions, setNameInstructions] = useState("");
    const [nameOK, setNameOK] = useState(false);
    const [nameClass, setNameClass] = useState("regularInput");

    
    const [lastNameInstructions, setLastNameInstructions] = useState("");
    const [lastNameOK, setLastNameOK] = useState(false);
    const [lastNameClass, setLastNameClass] = useState("regularInput");

    const [emailInstructions, setEmailInstructions] = useState("");
    const [emailOK, setEmailOK] = useState(false);
    const [emailClass, setEmailClass] = useState("regularInput");

    const [phoneInstructions, setPhoneInstructions] = useState("");
    const [phoneOK, setPhoneOK] = useState(false);
    const [phoneClass, setPhoneClass] = useState("regularInput");

    const [countryInstructions, setCountryInstructions] = useState("");
    const [countryOK, setCountryOK] = useState(false);
    const [countryClass, setCountryClass] = useState("regularInput");

    const [cityInstructions, setCityInstructions] = useState("");
    const [cityOK, setCityOK] = useState(false);
    const [cityClass, setCityClass] = useState("regularInput");

    const [zipInstructions, setZipInstructions] = useState("");
    const [zipOK, setZipOK] = useState(false);
    const [zipClass, setZipClass] = useState("regularInput");

    
    const [addressInstructions, setAdressInstructions] = useState("");
    const [addressOK, setAdressOK] = useState(false);
    const [addressClass, setAdressClass] = useState("regularInput");

    const [endProcess, setEndProcess] = useState(false);
    

    let allValid = () => {
        if (nameOK && 
        emailOK &&
        lastNameOK &&
        phoneOK &&
        zipOK &&
        cityOK &&
        addressOK &&
        countryOK 
         ) {
            console.log("order is placed")
            setEndProcess(true)

            let cart = JSON.parse(localStorage.getItem("cart"))
            let finalPrice = +(localStorage.getItem("price")); 
            let deliveryChosen = (localStorage.getItem("deliveryMethod")); 

            let orderId =  Date.now()

            let newOrder = {
                "orderSubTotal": finalPrice,
                "status": "payment accepted",
                "deliveryType": deliveryChosen,
                "products": cart,
                "id": orderId,
                "firebaseEmail": firebaseEmail
              };

            axios.post("http://localhost:5000/orders", newOrder).then((res) => {
                document.getElementById("zipcodeField").value=""

                document.getElementById("firstNameField").value=""
                document.getElementById("lastNameField").value=""
                document.getElementById("countryField").value=""

                document.getElementById("emailField").value=""
                document.getElementById("phoneField").value=""
                document.getElementById("cityField").value=""
                document.getElementById("adressField").value=""
                localStorage.removeItem("cart")


                setNameClass("regularInput")
                setLastNameClass("regularInput")
                setEmailClass("regularInput")
                setPhoneClass("regularInput")
                setCityClass("regularInput")
                setCountryClass("regularInput")
                setZipClass("regularInput")
                setAdressClass("regularInput")

                props.changeItems();
                props.history.push('/')
              });

              if (currentUser) {

              axios
              .get(`http://localhost:5000/users/email/${firebaseEmail}`)
              .then((json) => {
                return json.data.orders
              }).then((ordersAbove) => {

                let newArrayOfOrders = []

                if (ordersAbove.length >= 1) {
                    newArrayOfOrders = [...ordersAbove]
                }
                  let newOrder =
                  {
                      id: orderId
                  }

                  newArrayOfOrders.push(newOrder)


                  let newUser = {
                      orders: newArrayOfOrders
                  }
                  axios.put(`http://localhost:5000/users/email/${firebaseEmail}`, newUser)

              })
            }


        } else {
            if (!nameOK) {
                setNameInstructions("Enter a valid first name")
                setNameClass("badInput")
            }

            if (!emailOK) {
                setEmailInstructions("Enter a valid first E-mail")
                setEmailClass("badInput")
            }
            if (!lastNameOK) {
                setLastNameInstructions("Enter a valid last name")
                setLastNameClass("badInput")
            }
            if (!phoneOK) {
                setPhoneInstructions("Enter a valid phone number")
                setPhoneClass("badInput")
            }
            if (!zipOK) {
                setZipInstructions("Enter a valid zip code - 6 digits")
                setZipClass("badInput")
                
            }
            if (!cityOK) {
                setCityInstructions("Enter a valid city name")
                setCityClass("badInput")

            }
            if (!countryOK) {
                setCountryInstructions("Enter a valid country name")
                setCountryClass("badInput")
            }
            if (!addressOK) {
                setAdressInstructions("Enter a valid address")
                setAdressClass("badInput")

            }

        }

     }

    let checkFirstName = (e) => {
        
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)

                if (!result) {
                    setNameInstructions("Enter a valid first name")
                    setNameOK(false)
                    setNameClass("badInput")
                } else {
                    setNameInstructions("")
                    setNameOK(true)
                    setNameClass("goodInput")

                    localStorage.setItem("firstname", e.target.value)
                }
    }

    let checkLastName = (e) => {

        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)

                if (!result) {

                    setLastNameInstructions("Enter a valid last name")
                    setLastNameOK(false)
                    setLastNameClass("badInput")
                } else {
                    setLastNameInstructions("")
                    setLastNameOK(true)
                    setLastNameClass("goodInput")

                    localStorage.setItem("lastname", e.target.value)
                }

    }

    let checkEmail = (e) => {
      
        let pattern = /[a-zA-Z0-9-_.]+@[a-z]+.[a-z]{2,4}/gm 
        let result = pattern.test(e.target.value)
        if (!result) {
            setEmailInstructions("Enter a valid E-mail")
            setEmailOK(false)
            setEmailClass("badInput")

        } else {
            setEmailInstructions("")
            setEmailOK(true)
            setEmailClass("goodInput")
            localStorage.setItem("email", e.target.value)
        }
    }

    let checkPhone = (e) => {
      
        let pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
        let result = pattern.test(e.target.value)
        if (!result) {
            setPhoneInstructions("Enter a valid phone number")
            setPhoneOK(false)
            setPhoneClass("badInput")
        } else {

            setPhoneInstructions("")
            setPhoneOK(true)
            setPhoneClass("goodInput")
            localStorage.setItem("phone", e.target.value)
        }
    }

    let checkcountry = (e) => {
        
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {

            setCountryInstructions("Enter a valid country name")
            setCountryOK(false)
            setCountryClass("badInput")
        } else {

            setCountryInstructions("")
            setCountryOK(true)
            setCountryClass("goodInput")
            localStorage.setItem("country", e.target.value)

        }
    }


    let checkcity = (e) => {
      
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {

            setCityInstructions("Enter a valid city name")
            setCityOK(false)
            setCityClass("badInput")

        } else {
            
            setCityInstructions("")
            setCityOK(true)
            setCityClass("goodInput")
            localStorage.setItem("city", e.target.value)
        }
    }

    let checkzip = (e) => {
      
        let pattern = /\b\d{6}\b/g
        let result = pattern.test(e.target.value)
        if (!result) {

            setZipInstructions("Enter a valid zip code - 6 digits")
            setZipOK(false)
            setZipClass("badInput")
        } else {
            
            setZipInstructions("")
            setZipOK(true)
            setZipClass("goodInput")

            localStorage.setItem("zip", e.target.value)
 
        }
    }

    let checkAddress = (e) => {
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {

            setAdressInstructions("Enter a valid city name")
            setAdressOK(false)
            setAdressClass("badInput")

        } else {

            setAdressInstructions("")
            setAdressOK(true)
            setAdressClass("goodInput")
            localStorage.setItem("address", e.target.value)
        }
    }


    let calculateTotal = () => {

        let result = localStorage.getItem("price"); 
        return result; 
    
        }

    let moveToEnd = () => {
        this.props.history.push('/')
    }



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
                    <input id="firstNameField" className={nameClass} onBlur={(e) => checkFirstName(e)}  placeholder="Name" type="text"/>
                    <div className="errorMsg">{nameInstructions}</div>
                </div>

                <div className="col-lg-6 col-12">
                    <input id="lastNameField" className={lastNameClass}  onBlur={(e) => checkLastName(e)}  placeholder="Last name" type="text"/> 
                    <div className="errorMsg">{lastNameInstructions}</div>
                </div>
            </div>



                <div className="row">

                    <div className="col-lg-6 col-12">
                        <input id="zipcodeField" className={zipClass} onBlur={(e) => checkzip(e)}  placeholder="Zip / Postcode" type="text"/> 
                        <div className="errorMsg">{zipInstructions}</div>
                    </div>

                    <div  className="col-lg-6 col-12">
                        <input id="countryField" className={countryClass}  onBlur={(e) => checkcountry(e)} placeholder="Country" type="text"/> 
                        <div className="errorMsg">{countryInstructions}</div>
                    </div>
               
                </div>

                <input id="emailField" className={emailClass}   onBlur={(e) => checkEmail(e)} placeholder="Email" type="email"/> 
               
               <div className="errorMsg">{emailInstructions}</div>
          

                <input  id="phoneField" className={phoneClass}  onBlur={(e) => checkPhone(e)} placeholder="Mobile Phone" type="text"/> 
               
               <div className="errorMsg">{phoneInstructions}</div>


                    <input  id="cityField" className={cityClass}   onBlur={(e) => checkcity(e)} placeholder="City / Suburb" type="text"/> 
                    <div className="errorMsg">{cityInstructions}</div>

                    <input id="adressField" className={addressClass}   onBlur={(e) => checkAddress(e)} placeholder="Full address" type="text"/> 
                    <div className="errorMsg">{addressInstructions}</div>
               

                    <input id="checkboxField" style={{padding: "6px", marginTop: "20px"}} type="checkbox"/> Subscribe
               </div>

            </div>


        </div>
  

        <div className="col-lg-5 col-12 pt-md-5 pt-5 pt-lg-0 ps-4" style={{backgroundColor: "#f3f3f3"}}>

            <div className="col-12">
                <CheckoutCart/>
            </div>

            <div style={{color: "#474747", fontWeight: "470", marginTop: "40px"}}>

                <div className="flex d-flex justify-content-between" style={{borderBottom: "1px solid #f3f3f3", paddingBottom: "8px"}}>
                <div>Items total</div> <div> ${(calculateTotal() -localStorage.getItem("deliveryPrice")).toFixed(1) } </div>

                </div>

                <div className="flex d-flex justify-content-between mt-2" style={{borderBottom: "1px solid #f3f3f3", paddingBottom: "8px"}}>
                <div>Shipping</div> <div>${localStorage.getItem("deliveryPrice")}</div>
                </div>

            </div>
                <div  className="flex d-flex justify-content-between mt-3"> 
                <div style={{fontWeight: "500", fontSize: "17px"}}>TOTAL FOR YOUR ORDER</div> <div className="ms-1"> ${calculateTotal()}</div>
                </div>
                <div className= "flex d-flex justify-content-between">
                <button onClick={allValid} className="btn btn-light btn-lg mt-4" style={{backgroundColor: "#8fa663", color: "white"}}>Place order</button>
                <Link className="align-self-end" to="/cart" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "underline"}}>Go back to shopping cart</span></Link>
                </div>
            


             <Paypal moveToEnd={moveToEnd} active={endProcess}/> 

             <div>
             </div>

        </div>
    </div>

    </div>
        
        )
}


  const mapStateToProps = (state) => ({
    reduxCart: state.cart.reduxCart,
  });
  
  export default connect(mapStateToProps, { changeItems })(Checkout);
