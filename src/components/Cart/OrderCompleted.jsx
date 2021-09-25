// import React from 'react'
// import {connect} from 'react-redux';
// import {changeItems} from '../../redux/actions/cartActions'


let OrderCompleted = () => {
    console.log(window.paypal)
    let paypal = window.paypal
    return(
        <div>
<span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Your order details</h2></span>

        <div style={{ width: "400px", margin: "0 auto"}}>
            <div className="d-flex justify-content-between p-3" style={{backgroundColor: "#f2f5f3"}}>
        <div style={{fontWeight: "bold"}}>Order id</div><div> {paypal.orderID} </div>
            </div>

            <div className="d-flex justify-content-between mt-2 p-3" style={{backgroundColor: "#f2f5f3"}}>
        <div style={{fontWeight: "bold"}}>Payer id</div><div> {paypal.payerID} </div>
            </div>

        <div style={{marginTop: "60px"}}>A receipt was sent to your email account.</div>
        </div>

    </div>
    )
}

export default OrderCompleted


// class OrderCompleted extends React.Component {

//     constructor(props) {
//         super()
//     }

//     componentDidMount() {
//         window.scrollTo(0, 0) 
//         localStorage.setItem("cart", [])
//         this.props.changeItems()
//     }

//     render() {

//         let paypal = window.paypal
//     return(
//         <div>
// <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Your order details</h2></span>

//         <div style={{ width: "400px", margin: "0 auto"}}>
//             <div className="d-flex justify-content-between p-3" style={{backgroundColor: "#f2f5f3"}}>
//         <div style={{fontWeight: "bold"}}>Order id</div><div> {paypal.orderID} </div>
//             </div>

//             <div className="d-flex justify-content-between mt-2 p-3" style={{backgroundColor: "#f2f5f3"}}>
//         <div style={{fontWeight: "bold"}}>Payer id</div><div> {paypal.payerID} </div>
//             </div>

//         <div style={{marginTop: "60px"}}>A receipt was sent to your email account.</div>
//         </div>

//     </div>
//     )
//     }
// }

// export default OrderCompleted


// const mapStateToProps = state => ({
// })

// export default connect(mapStateToProps, {changeItems})(OrderCompleted)





