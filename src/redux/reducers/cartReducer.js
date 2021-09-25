import {CHANGE_ITEMS} from '../actions/types';


const initialState = {
    quantity: 0
}


export default function(state = initialState , action) {
    switch (action.type) {
        case CHANGE_ITEMS:
            return {
                ...state,
                quantity: action.quantity,
            }
        default:
            return state;
    }
}
