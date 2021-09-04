// AbLw6TQF_OhhBibsEmg4aJKqiTPGjUX3mF1kF4ACQfAJ3OQ7imM-UlGYb15ob3FbJTocZ4GPeG4BWkWK

import { PayPalButton } from "react-paypal-button-v2";


let Paypal = () => {

    return(
        <div style={{marginTop: "30px"}}>
        <PayPalButton
        amount={localStorage.getItem("price")}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
      </div>
    )
}

export default Paypal