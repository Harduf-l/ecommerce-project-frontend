import React from 'react'
import paypal from '../../pictures/baners/paypal.png'
import cards from '../../pictures/baners/cards.png'

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

    render() {

    return(
        <div className="row" style={{margin: "0 auto"}}>

        <div className="col-lg-4 col-l-12" style={{margin: "0 auto", marginTop: "50px"}}>
        <table className="table smaller-phone-th" >
            <thead>
            <tr>
                <th>product</th>
                <th>quantity</th>
                <th>price</th>
                <th>subtotal</th>
            </tr> 
            </thead>
            <tbody>
           {this.state.cartArray.map((element, index)=>{
            return  <tr >
                <td >{element.header}</td>

                <td >
                <span className="ms-2" style={{color: "black",  cursor: "pointer", borderRadius: "50%", fontSize: "10px", }} onClick={this.minus}> <i className="fas fa-minus"></i> </span> 
                 <span className="ps-2 pe-2">{element.quantity} </span>
                  <span  style={{color: "black",  cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingRight: "3px"}} onClick={this.plus}> <i className="fas fa-plus"></i> </span> 
                </td>
                <td >{element.price}</td>
                <td >{element.price * element.quantity }</td>
                </tr>
        })}
            </tbody>
        </table>

        <div>
        <input type="text" style={{width: "100px", paddingBottom: "5px"}}/> 
        <button className="ms-2 btn-light  btn btn-sm" style={{backgroundColor: "#d3d3d3"}}>i have a coupon!</button>
        </div>
        <div style={{margin: "0 auto", textAlign: "end"}}>
        <button style={{backgroundColor: "#e64723", color: "white"}} className="btn btn-light btn-lg mt-4">Place order</button>
        </div>
        </div>

        <div className="col-lg-4"  style={{backgroundColor: "#f0f0f0", paddingTop: "40px", textAlign: "center"}}>
        <p>choose payment method</p>
        <img src={cards} style={{width: "250px"}}/>
        <img src={paypal} style={{width: "250px"}}/>
        </div>

        </div>
    )

    }
}

export default Cart