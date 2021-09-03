import React from 'react'
import  {Link } from "react-router-dom";


class Cart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        cartArray: [],
        discount: false,
        couponEntered: "",
        couponState: "",
        finalPrice: "",
        delivery: false,
        deliveryRequired: "",

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
    this.props.checkCart()
    }


    plus = (index) => {
    console.log(index)
    let currentArray = [...this.state.cartArray]

    currentArray[index].quantity = currentArray[index].quantity +1
    
    localStorage.setItem("cart", JSON.stringify(currentArray)); 
    this.setState({cartArray: currentArray})
    this.props.checkCart()

    }

    
    remove = (index) => {
        let currentArray = [...this.state.cartArray]
    
        currentArray.splice(index, 1)
        
        localStorage.setItem("cart", JSON.stringify(currentArray)); 
        this.setState({cartArray: currentArray})
        this.props.checkCart()
    
        }


    calculateTotal = (sign) => {
    let currentArray = [...this.state.cartArray]
    let sum = 0; 

    for (let i=0; i<currentArray.length; i++) {
        sum = sum + (currentArray[i].price * currentArray[i].quantity)
    }

    if (sign === "exist") {
       sum = sum - sum/10     
    }

    if (this.state.delivery) {
        let deliveryFee = this.state.delivery
        deliveryFee = +deliveryFee
        sum = sum + deliveryFee
    }

    localStorage.setItem("price", sum); 
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

    addDeliveryFee = (e) => {
        console.log(e.target.value)

        switch(e.target.value) {
            case "express":
                this.setState({deliveryRequired: ""})
                this.setState({delivery: 15})
              break;
            case "air":
                this.setState({deliveryRequired: ""})
                this.setState({delivery: 12})
              break;
            case "sea":
                this.setState({deliveryRequired: ""})
                this.setState({delivery: 9})
                 break;
            case "default":
                    this.setState({deliveryRequired: "Please choose a shipping method"})
                    this.setState({delivery: false})
                     break;
            default:
                break; 
          }
    }

    moveCheckout = () => {
        if (this.state.delivery) {
            this.setState({deliveryRequired: ""})
        this.props.history.push("/checkout")
        }
        this.setState({deliveryRequired: "Please choose a shipping method"})

    }

    render() {

    return(

        <div>

<span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Cart</h2></span>

        <div className="row justify-content-center" style={{margin: "0 auto", marginTop: "30px"}}>

        <div className="col-lg-5 col-12 mb-lg-0 mb-5">
            <table className="table smaller-phone-th" >
                <thead >
                <tr style={{paddingTop: "80px"}}>
                    <th  style={{fontWeight: "600", borderColor: "#cecece",}}><span className="ms-4">Product</span></th>
                    <th  style={{fontWeight: "600", borderColor: "#cecece"}} >Price</th>
                    <th  style={{fontWeight: "600", borderColor: "#cecece"}}><span>Quantity</span></th>
                    
                    <th  style={{fontWeight: "600", borderColor: "#cecece"}}>Total</th>
                </tr> 
                </thead>
                <tbody >
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

                </tbody>
            </table>


            <div className="flex d-flex flex-wrap justify-content-between">

            <div>
            <input onChange={(e) => this.insertWord(e)} type="text" id="couponInput" style={{width: "100px", paddingBottom: "5px"}}/> 
            <button onClick={this.verifyCoupon} className="ms-2 btn-secondary  btn btn-sm">Apply coupon</button>
            <div style={{color: "red", fontSize: "14px", marginTop: "4px"}}>{this.state.couponState}</div>
            </div>

            <div>
            <Link to="/catalog" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "underline"}}>Go back shopping</span></Link>
            </div>

            </div>
            </div>


            <div className="col-lg-5 col-12 ps-4 pt-2 " style={{backgroundColor: "#f2f5f3"}}>
                <h4 className="pb-2" style={{color: "#2b3239", fontWeight: "470"}}>Cart total</h4>
                {this.state.discount &&
                            <span style={{fontWeight: "600"}}><span style={{textDecoration: "line-through"}}> ${this.calculateTotal("notexist")}</span> ${this.calculateTotal("exist")} Incl. taxes</span> }
                    
                        {!this.state.discount &&
                            <span style={{fontWeight: "600"}}>${this.calculateTotal("notexist")} Incl. taxes</span>}

                <br/>
                <br/>
                <select onChange={(e)=>this.addDeliveryFee(e)} name="delivery" id="delivery">
                <option value="default">Select delivery option</option>
                <option value="express">Express 1-2 days - $15</option>
                <option value="air">By air 10-14 days - $12</option>
                <option value="sea">By sea 21-28 days - $9</option>
                </select>
                <p style={{color: "#e61a23", marginTop: "5px"}}>{this.state.deliveryRequired}</p>
                <div className="flex d-flex justify-content-end flex-wrap pt-5">
                
                <button onClick={this.moveCheckout} className="btn btn-light" style={{backgroundColor: "#8fa663", color: "white", fontWeight: "490"}}>Proceed to checkout</button>

                </div>
            </div>

          </div>

          </div>

    )

    }
}

export default Cart