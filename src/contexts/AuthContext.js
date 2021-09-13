import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      return result.user.updateProfile({
        displayName: localStorage.getItem("name")
      })
    }).catch(function(error) {
      console.log(error);
    });

  }

  function login(email, password) {

    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.displayName )
        localStorage.setItem("name", user.displayName)
      } else {
        console.log("error")
        localStorage.removeItem("name")
      }
    })

    return auth.signInWithEmailAndPassword(email, password)

  }

  function logout() {
    localStorage.removeItem("name")
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}