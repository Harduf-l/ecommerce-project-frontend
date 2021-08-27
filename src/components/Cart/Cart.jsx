import React from 'react'
import paypal from '../../pictures/baners/paypal.png'
import cards from '../../pictures/baners/cards.png'
import  {Link } from "react-router-dom";


class Cart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        cartArray: [],
        discount: false,
        couponEntered: "",
        couponState: "",
    }

}

componentDidMount()  {

    let cart = []

    if ( localStorage.getItem("cart") == null) {
        cart = []; 
    } else {
        cart = JSON.parse(localStorage.getItem("cart")); 
    }

    this.setState({cartArray: cart})

}

    minus = (index) => {
    console.log(index)
    let currentArray = [...this.state.cartArray]

    if  (currentArray[index].quantity > 1) {
    currentArray[index].quantity = currentArray[index].quantity -1
    }
   
    
    localStorage.setItem("cart", JSON.stringify(currentArray)); 
    this.setState({cartArray: currentArray})
    }


    plus = (index) => {
    console.log(index)
    let currentArray = [...this.state.cartArray]

    currentArray[index].quantity = currentArray[index].quantity +1
    
    localStorage.setItem("cart", JSON.stringify(currentArray)); 
    this.setState({cartArray: currentArray})

    }

    
    remove = (index) => {
        let currentArray = [...this.state.cartArray]
    
        currentArray.splice(index, 1)
        
        localStorage.setItem("cart", JSON.stringify(currentArray)); 
        this.setState({cartArray: currentArray})
    
        }


    calculateTotal = (sign) => {
    let currentArray = [...this.state.cartArray]
    let sum = 0; 

    for (let i=0; i<currentArray.length; i++) {
        sum = sum + (currentArray[i].price * currentArray[i].quantity)
    }

    if (sign === "exist") {
        return sum - sum/10     
    }


    return sum; 

    }

    insertWord = (e) => {
        let currWord = e.target.value
        this.setState({couponEntered: currWord})
    }


    verifyCoupon = () => {

    if (this.state.couponEntered === "10OFF")  {
    this.setState({discount: true})
    this.setState({couponState: ""})
    } else {
        this.setState({couponState: "Enter a valid discount code"})
    }

    document.getElementById("couponInput").value = ""
    }

    render() {

    return(



        <div className="row" style={{margin: "0 auto", marginTop: "30px"}}>

        <div className="col-lg-6 col-12">
            <table className="table smaller-phone-th" >
                <thead style={{}}>
                <tr style={{paddingTop: "80px"}}>
                    <th  style={{fontWeight: "normal", borderColor: "#cecece",}}><span className="ms-4">Product</span></th>
                    <th  style={{fontWeight: "normal", borderColor: "#cecece"}} >Price</th>
                    <th  style={{fontWeight: "normal", borderColor: "#cecece"}}><span>Quantity</span></th>
                    
                    <th  style={{fontWeight: "normal", borderColor: "#cecece"}}>Total</th>
                </tr> 
                </thead>
                <tbody>
            {this.state.cartArray.map((element, index)=>{
                return  <tr style={{borderColor: "black"}}>
                    
                    <td style={{borderColor: "#cecece"}}>
                    <div className="flex d-flex flex-wrap align-items-center">


                    <Link to={`/product/${element.id}`} style={{textDecoration: "none", color: "#2b3239"}}>
                    <img style={{ borderRadius: "20%", height: "80px", width: "70px", objectFit: "cover"}} src={element.pic1} alt={"food product"}/> 
                    </Link>


                    <span style={{marginLeft: "10px"}}>{element.header}</span>
                    </div>
                    </td>

                    <td style={{paddingTop: "30px", paddingBottom: "30px", borderColor: "#cecece"}}>${element.price}</td>
                    <td style={{paddingTop: "30px", paddingBottom: "30px", borderColor: "#cecece"}}>
                    
                    <span className="ms-2 signToRemove" style={{color: "white", backgroundColor: "#2e4e14", fontWeight: "bold", cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingLeft: "2px"}} onClick={() => this.minus(index)}> <i className="fas fa-minus"></i> </span> 
                    <span className="ps-2 pe-2">{this.state.cartArray[index].quantity} </span>
                    <span  className="ps-1 signToRemove" style={{color: "white",backgroundColor: "#2e4e14",  fontWeight: "bold", cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingRight: "3px"}} onClick={() => this.plus(index)}> <i className="fas fa-plus"></i> </span> 
                        
                    </td>
                    
                    <td style={{paddingTop: "30px", paddingBottom: "30px", borderColor: "#cecece"}}>
                    <div className="flex d-flex justify-content-between">
                    ${element.price * element.quantity }
                    <button className="dltbtn" onClick={() => this.remove(index)}><i class="fas fa-times"></i></button>
                    </div>
                    </td>
                    
                    </tr>
            })}
                        <tr>
                        {this.state.discount &&
                            <td colspan="4" style={{ color: "#2e4e14", textAlign: "end"}}>
                            Subtotal: <span style={{textDecoration: "line-through"}}> ${this.calculateTotal("notexist")}</span> {this.calculateTotal("exist")} Incl. taxes
                            </td> }
                        {!this.state.discount &&
                            <td colspan="4" style={{ color: "#2e4e14", textAlign: "end"}}>
                            Subtotal: ${this.calculateTotal("notexist")} Incl. taxes
                            </td> }
                            
                            
                            </tr>
                </tbody>
            </table>


            <div className="flex d-flex flex-wrap justify-content-between">

            <div>
            <input onChange={(e) => this.insertWord(e)} type="text" id="couponInput" style={{width: "100px", paddingBottom: "5px"}}/> 
            <button onClick={this.verifyCoupon} className="ms-2 btn-secondary  btn btn-sm">I have a coupon</button>
            <div style={{color: "red", fontSize: "14px", marginTop: "4px"}}>{this.state.couponState}</div>
            </div>

            <div>
            <Link to="/catalog" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "underline"}}>Go back shopping</span></Link>
            </div>

            </div>
            </div>



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


                {/* <div style={{textAlign: "end"}}>
                <img style={{height: "50px"}} src={cards}/>
                <img style={{height: "50px"}} src={paypal}/>
                </div> */}





            </div>


          </div>



    )

    }
}

export default Cart