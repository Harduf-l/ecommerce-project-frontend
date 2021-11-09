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

export const auth = app.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

// export const signInWithGoogle = (myfunc) => {
//   auth.signInWithPopup(googleProvider).then((res) => {
//     return res.user
//   }).then((user) => {
//         console.log(user.email)
//         console.log(user.displayName)
//         let sign; 
//         axios
//         .get(`${process.env.REACT_APP_API_URL}/users/email/${user.email}`)
//         .then((json) =>
//           sign = typeof json.data 
//         ).then(() => {
//           console.log(sign)
//           if (sign === "string") {
//             let newUser = {
//               id: Date.now(),
//               name:  user.name,
//               email: user.email,
//               active: true,
//               orders: []
//             }
//             axios
//             .post(`${process.env.REACT_APP_API_URL}/users`, newUser)
//             .then ((json) => {
//               console.log()
//             }
//             )
//           }
//         })

//         localStorage.setItem("name", user.displayName)
//         myfunc()
//         window.location = '/dashboard'
//     })
//   .catch((error) => {
//     console.log(error.message)
//   })
// }


export const signInWithGoogle = (myfunc) => {

  let sign; 

  auth.signInWithPopup(googleProvider).then((res) => {
    return res.user})
    .then((user)=> {
      console.log(user.email)
      axios.get(`${process.env.REACT_APP_API_URL}/users/email/${user.email}`)
      .then((res) => 
        sign = typeof res.data
      ).then(() => {
        if (sign === "string") {
        let newUser = {
          id: Date.now(),
          name:  user.displayName,
          email: user.email,
          active: true,
          orders: []
        }

        axios.post(`${process.env.REACT_APP_API_URL}/users`, newUser)
      }

          localStorage.setItem("name", user.displayName)
          myfunc()
          window.location = '/dashboard'
      })
      .catch((err) => console.log(err))
    })
  

}