import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PrivateRoute({ component: Component, myfunc, ...rest }) {
  const { currentUser } = useAuth()
  
  console.log("babababba" + currentUser)
    
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component myfunc={myfunc} {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}