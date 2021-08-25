import React from 'react'
import allproducts from './allproducts'



class Cart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        valueInput: "",
        cartInput: 0 
    }
}

    render() {
    return(
        <div>
           {this.props.allStorage()}
        </div>
    )

    }
}

export default Cart