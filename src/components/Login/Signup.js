import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import googlePic from '../../pictures/baners/google.png'
import { signInWithGoogle } from "../../firebase";

export default function Signup(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

 function googleAndDirect() {

  signInWithGoogle(props.checkUserName)
    
   
}

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } else if (passwordRef.current.value.length <= 4) {
      return setError("Password must contain 6 characters")
    }

    try {
      setError("")
      setLoading(true)
      localStorage.setItem("name", nameRef.current.value) 
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      history.push("/dashboard")
      props.checkUserName()
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
       <Card className="col-lg-5 col-md-8 mt-5" style={{margin: "0 auto"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef}  required />
            </Form.Group>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>

            <div className="login-buttons">
              <Button variant="light" style={{backgroundColor: "#dfdfed"}} className="w-100 mt-3"   onClick={googleAndDirect}>
                <div className="d-flex">
              <img  height={25} src={googlePic} alt="google icon"/>
              <div style={{margin: "0 auto"}}> Continue with Google</div>
              </div>
            </Button>
          </div>

          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}