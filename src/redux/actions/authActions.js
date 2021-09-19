import {SIGN_UP, LOG_IN, LOG_OUT , LOGIN_FAILED ,LOADING} from './types'
import {auth} from '../../firebase'

export const signUp = (email,pass) => dispatch =>{
    
}

export const logIn = (email,pass) => dispatch => {
   console.log('in login action')
//    console.log(email, pass)
   auth.signInWithEmailAndPassword(email, pass).then((user)=>{
    console.log(user)
   }).catch((e) => {
    // console.log(e.message.split('Firebase:')[1])
    dispatch({
        type:LOGIN_FAILED,
        payload: e.message.split('Firebase:')[1]
    })
   })
}

export const logOut = uid => dispatch => {
   
}

export const setLoading = () =>{
    return {
        type:LOADING
    }
}