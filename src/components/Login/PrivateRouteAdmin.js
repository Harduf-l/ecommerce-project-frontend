import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PrivateRouteAdmin({ component: Component, myfunc, ...rest }) {
  const { currentUser } = useAuth()
    console.log(currentUser)
  // if (currentUser) {
  // console.log(currentUser.displayName)
  // console.log(currentUser.email)
  // }
    if (!currentUser) {
        return  <Redirect to="/login" />
    }

  return (
    <Route
      {...rest}
      render={props => {
        return (currentUser.email === process.env.REACT_APP_EMAIL) ? <Component myfunc={myfunc} {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}