import React from 'react'

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
        <div style={{width: "600px", margin: "0 auto", marginTop: "50px"}}>
        <table className="table" >
            <thead>
            <tr>
                <th>product</th>
                <th>quantity</th>
                <th>price for unit</th>
                <th>total price</th>
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

        <div style={{margin: "0 auto", textAlign: "end"}}>
        <div>{this.state.sumMoney}</div>
        <button style={{backgroundColor: "#e64723", color: "white"}} className="btn btn-lg mt-4">Place order</button>
        </div>

        </div>
    )

    }
}

export default Cart