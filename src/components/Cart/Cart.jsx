import React from 'react'
import allproducts from '../Data/allproducts'



class Cart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        cartArray: this.allStorage()
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
        <div>
           {this.state.cartArray[0].id}
           {this.state.cartArray[0].quantity}
        </div>
    )

    }
}

export default Cart