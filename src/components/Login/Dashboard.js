import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";



export default function Dashboard(props) {
  const [error, setError] = useState("");

  const [confirmEmailSent, SetConfirmEmail] = useState("alert alert-success pt-3 d-none")
  const [badEmailSent,  SetBadEmail] = useState("alert alert-danger pt-3 d-none")

  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const myStyle = { border: "1px #2b3239 solid", color: "#2b3239" };

  const [orders, setOrders] = useState(false);

  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")

  axios
    .get(`http://localhost:5000/orders/email/${currentUser.email}`)
    .then((json) => setOrders(json.data));

  async function handleLogout() {
    setError("");

    try {
      await logout();
      localStorage.removeItem("name");
      history.push("/login");
      props.myfunc();
    } catch {
      setError("Failed to log out");
    }
  }

   let sendEmail = (e) => {
    e.preventDefault()

    let newTicket = {
      id: Date.now(),
      email: currentUser.email,
      name: name,
      content: content,
      subject: subject,
      status: "pending"
    }

    axios
    .post(`http://localhost:5000/tickets`, newTicket )
    .then(()=> 
    {
      SetConfirmEmail("alert alert-success pt-3")
      setName("")
      setContent("")
      setSubject("")
    })
    .catch(()=> SetBadEmail("alert alert-danger pt-3"))

  }


  return (
    <>
      <div className="row justify-content-center">

        <div className="col-lg-5 col-md-8 mt-5">
          <Card style={{ margin: "0 auto" }}>
            <Card.Body>
              <h2 style={{ color: "#555555" }} className="text-center mb-4">
                Profile
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Name:</strong> {currentUser.displayName}
              <div style={{ height: "10px" }}></div>
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

          <Card className="mt-5" style={{ margin: "0 auto" }}>
            <h2 style={{ color: "#555555" }} className="text-center mb-4 pt-3">
              Your Orders
            </h2>
            {orders.length >= 1 && (
              <div>
                <table
                  style={{ border: "1px #2b3239 solid", color: "#2b3239" }}
                >
                  <thead style={myStyle}>
                    <th
                      style={{
                        width: "170px",
                        border: "1px #2b3239 solid",
                        paddingLeft: "10px",
                      }}
                    >
                      Id
                    </th>
                    <th
                      style={{
                        width: "130px",
                        border: "1px #2b3239 solid",
                        paddingLeft: "10px",
                      }}
                    >
                      Subtotal
                    </th>
                    <th
                      style={{
                        width: "280px",
                        border: "1px #2b3239 solid",
                        paddingLeft: "10px",
                      }}
                    >
                      Status
                    </th>
                    <th
                      style={{
                        width: "120px",
                        border: "1px #2b3239 solid",
                        paddingLeft: "10px",
                      }}
                    >
                      Delivery
                    </th>
                  </thead>
                  {orders.map((order) => {
                    return (
                      <tr>
                        <td
                          style={{
                            width: "170px",
                            border: "1px #2b3239 solid",
                            paddingLeft: "10px",
                          }}
                        >
                          {order.id}
                        </td>
                        <td
                          style={{
                            width: "130px",
                            border: "1px #2b3239 solid",
                            paddingLeft: "10px",
                          }}
                        >
                          ${order.orderSubTotal}
                        </td>
                        <td
                          style={{
                            width: "280px",
                            border: "1px #2b3239 solid",
                            paddingLeft: "10px",
                          }}
                        >
                          {order.status}
                        </td>
                        <td
                          style={{
                            width: "120px",
                            border: "1px #2b3239 solid",
                            paddingLeft: "10px",
                          }}
                        >
                          {order.deliveryType}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}
            {orders !== false && orders.length === 0 && (
              <div>
                Ready for your first order? <br />
                <br />
                <Link to="/catalog">go shopping</Link>
              </div>
            )}
          </Card>
        </div>

        <div className="col-lg-5 col-md-8 mt-5">
          <h2 style={{ color: "#555555" }} className="text-center mb-4">
            How can we help you?
          </h2>

          <form
            className="col-lg-9 col-11 col-md-8"
            style={{ margin: "0 auto" }}
            onSubmit={(e)=> sendEmail(e)}
          >

          <div className={confirmEmailSent}>
            A confirmation mail was sent to your email account. 
          </div>
          
          <div className={badEmailSent}>
            An error occured while trying to send you an email. 
          </div>
          

            <input
             onChange={(e)=> setName(e.target.value)}
              className="regularInput2"
              id="firstname"
              placeholder="Name"
              type="text"
              value={name? name : ""}
            />
            <div className="errorMsg"></div>

            <input value={subject? subject : ""} onChange={(e)=> setSubject(e.target.value)} className="regularInput2" placeholder="Subject" />
            <div className="errorMsg"></div>

            <textarea
            value={content? content : ""}
              onChange={(e)=> setContent(e.target.value)}
              maxlength="300"
              style={{ width: "100%", padding: "6px" }}
              placeholder="How can we help you?"
              rows="5"
            />

            <div style={{ textAlign: "center" }}>
              <button
                style={{ marginTop: "30px" }}
                className="btn btn-lg btn-secondary"
              >
                Submit
              </button>


            </div>
          </form>
        </div>

      </div>
    </>
  );
}
