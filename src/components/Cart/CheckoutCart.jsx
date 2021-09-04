import React from 'react'
import  {Link } from "react-router-dom";


class CheckoutCart extends React.Component {

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


    moveCheckout = () => {
        if (this.state.delivery) {
            this.setState({deliveryRequired: ""})
        this.props.history.push("/checkout")
        }
        this.setState({deliveryRequired: "Please choose a shipping method"})

    }

    render() {

    return(

        <div class="table-responsive justify-content-center flex d-flex pt-2">
            <table className="table smaller-phone-th"  style={{width: "450px"}}>
                <thead style={{display: "block"}}>
                <tr>
                    <th   style={{fontWeight: "500", borderColor: "#cecece", width: "150px"}}><span className="ms-2">Product</span></th>
                    <th   style={{fontWeight: "500", borderColor: "#cecece",}}><span className="ms-4"></span></th>
                    <th   style={{fontWeight: "500", borderColor: "#cecece",}}><span className="ms-4"></span></th>
                    <th   style={{fontWeight: "500", borderColor: "#cecece",}}><span className="ms-4"></span></th>
                    <th  style={{fontWeight: "500", borderColor: "#cecece"}} >Price</th>
                    <th  style={{fontWeight: "500", borderColor: "#cecece"}}><span>Qty</span></th>
                    
                    <th  style={{fontWeight: "500", borderColor: "#cecece"}}>Total</th>
                </tr> 
                </thead>
                <tbody style={{'height': '160px', 'overflowY':'scroll', 'display': 'block'}}>
            {this.state.cartArray.map((element, index)=>{
                return  <tr style={{borderColor: "black"}}>
                    
                    <td style={{borderColor: "#cecece", width: "280px"}}>
                    <div className="flex d-flex flex-wrap align-items-center">


                    <Link to={`/product/${element.id}`} style={{textDecoration: "none", color: "#2b3239"}}>
                    <img style={{ borderRadius: "20%", height: "60px", width: "60px", objectFit: "cover"}} src={element.pic1} alt={"food product"}/> 
                    </Link>


                    <span className="align-self-center" style={{marginLeft: "10px"}}>{element.header}</span>
                    </div>
                    </td>

                    <td style={{paddingTop: "30px", paddingBottom: "30px", borderColor: "#cecece"}}>${element.price}</td>
                    <td style={{paddingTop: "30px", paddingBottom: "30px", borderColor: "#cecece", width: "50px"}}>

                    <span className="ps-2 pe-2">{this.state.cartArray[index].quantity} </span>

                        
                    </td>
                    
                    <td style={{paddingTop: "30px", paddingBottom: "30px", borderColor: "#cecece"}}>
                    <div className="flex d-flex justify-content-between">
                    ${element.price * element.quantity }
                    </div>
                    </td>
                    
                    </tr>
            })}

                </tbody>
            </table>
            </div>



    )

    }
}

export default CheckoutCart