import {CHANGE_ITEMS} from './types'


export const changeItems = () =>{
let number; 

    if ( localStorage.getItem("cart") == null || localStorage.getItem("cart") === [] ) {
        number = 0
    } else {
        let cart = JSON.parse(localStorage.getItem("cart")); 
        number = 0;
  
        for (let i=0; i< cart.length; i++) {
          number = number + cart[i].quantity
        }
    }
    return {
        type: CHANGE_ITEMS,
        quantity: number
    }
}