import { PayPalButton } from "react-paypal-button-v2";
import React from 'react'



class Paypal extends React.Component {

  render() {
    return (
      <div style={{marginTop: "30px"}}>
      <PayPalButton
        amount={localStorage.getItem("price")}
        onSuccess={(details, data) => {
          console.log("Transaction completed by " + details.payer.name.given_name);
        }}
      />
      </div>
    );
  }
}


export default Paypal




