import React from 'react'
import paypal from '../../pictures/baners/paypal.png'
import cards from '../../pictures/baners/cards.png'
import  {Link } from "react-router-dom";


class MiniCart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        cartArray: [],
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


    render() {

    return(

            <table style={{width: "400px"}} className="" >
                <thead style={{}}>
                <tr style={{paddingTop: "80px"}}>
                    <th  style={{fontWeight: "600", borderColor: "#cecece",}}><span className="ms-4">Product</span></th>
                    <th  style={{fontWeight: "600", borderColor: "#cecece"}} >Price</th>
                    <th  style={{fontWeight: "600", borderColor: "#cecece"}}><span>Quantity</span></th>
                    
                    <th  style={{fontWeight: "600", borderColor: "#cecece"}}>Total</th>
                </tr> 
                </thead>
                <tbody>
            {this.state.cartArray.map((element, index)=>{
                return  <tr style={{borderColor: "black"}}>
                    
                    <td style={{borderColor: "#cecece"}}>
                    <div className="flex d-flex flex-wrap align-items-center">

                    <Link to={`/product/${element.id}`} style={{textDecoration: "none", color: "#2b3239"}}><span style={{marginLeft: "10px"}}>{element.header}</span></Link>
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

                    <td colspan="4" style={{ color: "#2b3239", textAlign: "end"}}> <span style={{fontWeight: "600"}}>${this.calculateTotal("notexist")} Incl. taxes  </span><span style={{fontSize: "12px"}}> <br/> delivery not included</span></td>
                    </tr>

                </tbody>
            </table>
    )

    }
}

export default MiniCart