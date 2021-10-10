import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import axios from "axios";

export default function Dashboard(props) {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()


  const [orders, setOrders] = useState([]);
  
  axios.get(`http://localhost:5000/orders/email/${currentUser.email}`)
  .then((json) => setOrders(json.data))


  async function handleLogout() {
    setError("")

    try {
      await logout()
      localStorage.removeItem("name")
      history.push("/login")
      props.myfunc()
    } catch {
      setError("Failed to log out")
    }
  }


  
  return (
    <>
  <div className="row">
    <Card className="col-lg-5 col-md-8 mt-5" style={{margin: "0 auto"}}>
    <h2 style={{color: "#555555"}} className="text-center mb-4 pt-3">Your Orders</h2>
    {orders.length >=1 &&
          <div>
            <table>
              <thead>
                <th style={{width: "170px"}}>id</th>
                <th style={{width: "130px"}}>subtotal</th>
                <th style={{width: "200px"}}>status</th>
                <th style={{width: "170px"}}>delivery</th>
              </thead>
        {orders.map(order => {
          return (
            <tr>
        <td style={{width: "170px"}}>{order.id}</td>
        <td style={{width: "130px"}}>{order.orderSubTotal}</td>
        <td style={{width: "200px"}}>{order.status}</td>
        <td style={{width: "170px"}}>{order.deliveryType}</td>
          </tr>
           )
      }) 
        } 
        </table>
        </div> }
        {
          orders.length === 0 &&
          <div>
            Ready for your first order? <br/><br/>
            <Link to="/catalog">go shopping</Link>
          </div>
        }
      </Card>


      <Card className="col-lg-5 col-md-8 mt-5" style={{margin: "0 auto"}}>
        <Card.Body>
          <h2 style={{color: "#555555"}} className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Name:</strong> {currentUser.displayName}
          <div style={{height: "10px"}}></div>
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
        <div className="w-100 text-center mt-2 pb-5">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </Card>
    </div>
    </>
  )
}