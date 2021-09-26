import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from "react-router-dom";
import React from 'react'


// let Paypal = (props) => {
//      const history = useHistory();
    

//     return(
//         <div style={{marginTop: "30px"}}>
//         <PayPalButton
//         amount={localStorage.getItem("price")}
//         // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
//         onSuccess={(details, data) => {
//           console.log("Transaction completed by " + details.payer.name.given_name);
//           window.paypal = data;       
//           history.push("/ordercompleted");
          
//         }}
//       />
//       </div>
//     )
// }

// export default Paypal

class Paypal extends React.Component {

  render() {
    return (
      <div style={{marginTop: "30px"}}>
      <PayPalButton
        amount={localStorage.getItem("price")}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
        //  window.paypal = data;       
        //  console.log(data)
        //   this.props.moveToEnd()


          // OPTIONAL: Call your server to save the transaction
          // return fetch("/paypal-transaction-complete", {
          //   method: "post",
          //   body: JSON.stringify({
          //     orderID: data.orderID
          //   })
          // });
        }}
      />
      </div>
    );
  }
}


export default Paypal




