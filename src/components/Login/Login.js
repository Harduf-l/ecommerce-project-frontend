  
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import googlePic from '../../pictures/baners/google.png'

import { signInWithGoogle } from "../../firebase";

export default function Login(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function googleAndDirect() {
      try {
        signInWithGoogle(props.checkUserName)
      }catch {
        setError("Failed to log in")
      }
     
      history.push("/dashboard")
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)

      history.push("/dashboard")
      props.checkUserName()
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="col-lg-5 col-md-8 mt-5" style={{margin: "0 auto"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>

            <div className="login-buttons">
              <Button variant="light" style={{backgroundColor: "#dfdfed"}} className="w-100 mt-3"  onClick={googleAndDirect}>
                <div className="d-flex">
              <img  height={25} src={googlePic} alt="google icon"/>
              <div style={{margin: "0 auto"}}> Continue with Google</div>
              </div>
            </Button>
          </div>

          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}