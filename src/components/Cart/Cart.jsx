import React from 'react'
import allproducts from '../Data/allproducts'



class Cart extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { 
        valueInput: "",
        cartInput: 0 
    }

}

allStorage = () => {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.unshift([keys[i], localStorage.getItem(keys[i]) ]);
    }

    return values;
}

    render() {
    return(
        <div>
           {this.props.allStorage}
        </div>
    )

    }
}

export default Cart