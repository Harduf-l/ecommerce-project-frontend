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

  const [orders, setOrders] = useState(false);

  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")

  axios
    .get(`${process.env.REACT_APP_API_URL}/orders/email/${currentUser.email}`)
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
    .post(`${process.env.REACT_APP_API_URL}/tickets`, newTicket )
    .then(()=> 
    {
      SetConfirmEmail("alert alert-success pt-3")
      SetBadEmail("alert alert-danger pt-3 d-none")
      setName("")
      setContent("")
      setSubject("")
    })
    .catch(()=> 
    {
    SetBadEmail("alert alert-danger pt-3")
    SetConfirmEmail("alert alert-success pt-3 d-none")
    }
    )

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
            <div className="w-100 text-center mt-2 pb-2">
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
                          <div className="table-responsive mt-2">
                          <table className="table smaller-phone-th">
                            <thead>
                              <tr style={{ paddingTop: "80px" }}>
                              <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                                  <span className="ms-1">Id</span>
                                </th>
                                <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                                  <span className="">Subtotal</span>
                                </th>
                                <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                                    Status
                                </th>
            
                                <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                                    Shipping
                                </th>
            
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((order) => {
                                return (
                                  <tr style={{ borderColor: "black" }}>
                                    <td
                                      style={{
                                        paddingTop: "30px",
                                        paddingBottom: "30px",
                                        borderColor: "#cecece",
                                      }}
                                    >
                                      {order.id}
                                    </td>

                                    <td
                                      style={{
                                        paddingTop: "30px",
                                        paddingBottom: "30px",
                                        borderColor: "#cecece",
                                      }}
                                    >
                                      ${order.orderSubTotal}
                                    </td>

                                    <td
                                      style={{
                                        paddingTop: "30px",
                                        paddingBottom: "30px",
                                        borderColor: "#cecece",
                                      }}
                                    >
                                      {order.status}
                                    </td>

                                    <td
                                      style={{
                                        paddingTop: "30px",
                                        paddingBottom: "30px",
                                        borderColor: "#cecece",
                                      }}
                                    >
                                      {order.deliveryType}
                                    </td>
                                 
                                  </tr>
                                );
                              })}
                            </tbody>
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
            An error occured while trying to send your message. 
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
