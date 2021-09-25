import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from "react-router-dom";

let Paypal = (props) => {
     const history = useHistory();
    

    return(
        <div style={{marginTop: "30px"}}>
        <PayPalButton
        amount={localStorage.getItem("price")}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          console.log("Transaction completed by " + details.payer.name.given_name);
          window.paypal = data;       
          history.push("/ordercompleted");
          
        }}
      />
      </div>
    )
}


export default Paypal




