import React from 'react'
import paypal from '../../pictures/baners/paypal.png'
import cards from '../../pictures/baners/cards.png'
import  {Link } from "react-router-dom";


class Cart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        cartArray: this.allStorage(),
        sumMoney: 0,
    }

}

allStorage = () => {
    let cart = []

    if ( localStorage.getItem("cart") == null) {
        cart = []; 
    } else {
        cart = JSON.parse(localStorage.getItem("cart")); 
    }

    return cart; 
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


    render() {

    return(



        <div className="row" style={{margin: "0 auto", marginTop: "30px"}}>

        <div className="col-lg-6 col-12">
            <table className="table smaller-phone-th" >
                <thead style={{}}>
                <tr style={{paddingTop: "80px"}}>
                    <th style={{}}><span className="ms-4">Product</span></th>
                    <th style={{ }} >Price</th>
                    <th style={{ }}><span>Quantity</span></th>
                    
                    <th style={{ }}>Subtotal</th>
                </tr> 
                </thead>
                <tbody>
            {this.state.cartArray.map((element, index)=>{
                return  <tr style={{borderColor: "black"}}>
                    
                    <td >
                    <div className="flex d-flex flex-wrap align-items-center">
                    <img style={{height: "80px", width: "70px", objectFit: "cover"}} src={element.pic1}/> 
                    <span style={{marginLeft: "10px"}}>{element.header}</span>
                    </div>
                    </td>

                    <td style={{paddingTop: "30px", paddingBottom: "30px"}}>{element.price}$</td>
                    <td style={{paddingTop: "30px", paddingBottom: "30px"}}>
                    
                    <span className="ms-2" style={{color: "#2e4e14", fontWeight: "bold", cursor: "pointer", borderRadius: "50%", fontSize: "10px", }} onClick={() => this.minus(index)}> <i className="fas fa-minus"></i> </span> 
                    <span className="ps-2 pe-2">{this.state.cartArray[index].quantity} </span>
                    <span  style={{color: "#2e4e14",  fontWeight: "bold", cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingRight: "3px"}} onClick={() => this.plus(index)}> <i className="fas fa-plus"></i> </span> 
                        
                    </td>
                    
                    <td style={{paddingTop: "30px", paddingBottom: "30px"}}>
                    <div className="flex d-flex justify-content-between">
                    {element.price * element.quantity }$
                    <button className="dltbtn" onClick={() => this.remove(index)}><i class="fas fa-times"></i></button>
                    </div>
                    </td>
                    
                    </tr>
            })}
                </tbody>
            </table>


            <div className="flex d-flex flex-wrap justify-content-between">

            <div>
            <input type="text" style={{width: "100px", paddingBottom: "5px"}}/> 
            <button className="ms-2 btn-light  btn btn-sm" style={{backgroundColor: "#d3d3d3"}}>i have a coupon!</button>
            </div>

            <div>
            <Link to="/catalog" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "underline"}}>go back shopping</span></Link>
            </div>

            </div>
            <div style={{margin: "0 auto", textAlign: "end"}}>
            <button style={{backgroundColor: "#e64723", color: "white"}} className="btn btn-light btn-lg mt-4">Place order</button>
            </div>
            </div>



            <div className="col-lg-6 col-12">
                <h2 style={{textAlign: "center"}}> payment method</h2>
                <div style={{textAlign: "end"}}>
                <img style={{height: "50px"}} src={cards}/>
                <img style={{height: "50px"}} src={paypal}/>
                </div>
            </div>


          </div>



    )

    }
}

export default Cart