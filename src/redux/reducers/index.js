import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { createHashHistory } from 'history';
import {
    adminReducer,

} from 'react-admin';

const history = createHashHistory()

export default combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
    auth: authReducer,
    cart: cartReducer
});