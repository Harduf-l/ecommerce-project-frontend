import firebase from 'firebase/app';
import "firebase/auth"



const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
})


export const auth = app.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = (myfunc) => {
  auth.signInWithPopup(googleProvider).then((res) => {
    return res.user
  }).then((user) => {
        localStorage.setItem("name", user.displayName)
        myfunc()
        window.location = '/dashboard'
    })
  .catch((error) => {
    console.log(error.message)
  })
}
