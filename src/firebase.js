import firebase from 'firebase/app';
import "firebase/auth"
import axios from "axios";


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

export const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,


};

export const firebaseConfigAdmin = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY_ADMIN,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_ADMIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_ADMIN,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_ADMIN,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_ADMIN,

  appId: process.env.REACT_APP_FIREBASE_APP_ID_ADMIN,


};

export const auth = app.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = (myfunc) => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
    return res.user
  }).then((user) => {
        console.log(user.email)
        console.log(user.displayName)

        let sign; 

        axios
        .get(`http://localhost:5000/users/email/${user.email}`)
        .then((json) =>
          sign = typeof json.data 
        ).then(() => {
          if (sign === "string") {
            let newUser = {
              id: Date.now(),
              name:  user.displayName,
              email: user.email,
              active: true,
              orders: []
            }
            axios
            .post("http://localhost:5000/users", newUser)
            .then ((json) => {
              console.log(json)
            }
            )
          }
        })

        localStorage.setItem("name", user.displayName)
        myfunc()
        window.location = '/dashboard'
    })
  .catch((error) => {
    console.log(error.message)
  })
}

