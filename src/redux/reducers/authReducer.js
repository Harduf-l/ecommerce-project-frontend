import {SIGN_UP, LOG_IN, LOG_OUT, LOGIN_FAILED ,LOADING} from '../actions/types'

const initialState = {
    currentUser: null,
    isAutherised: false,
    error: '',
}

export default function(state = initialState , action) {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                
            }

        case LOG_IN:
            return {
                ...state,
               
            }

        case LOG_OUT:
            return {
                ...state,
              
            }
        
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }
}