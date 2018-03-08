import { combineReducers } from 'redux';
import { LAUNCH, USER_AVAILABLE, USER_FOUND } from '../actions/';
let defaultState = {loading: true};
const launchReducer = (state=defaultState, action) => {
    console.log("launchReducer type : ",action.type,"...State : ",state);
    switch (action.type) {
        case LAUNCH:
            return {
                ...state,
                loading: false
            }
        default:
            return { ...state }
    }
}

const userReducer = (state=defaultState, action) => {
    console.log("userReducer type : ",action.type,"...State : ",state);
    switch (action.type) {
        case USER_AVAILABLE:
            return {
                state:state,
                data: action.data,
                loading: false,
            }
        default:
            return { ...state }

    }
};

const contactReducer = (state=defaultState, action) => {
    console.log("contactReducer type : ",action.type,"...State : ",state);
    switch (action.type) {
        case USER_FOUND:
            return {
                ...state,
                isContactInfo: true,
                data: action.data,
                loading: false
            };
        default:
            return { ...state }
    }
}


const rootReducer = combineReducers({
    launchReducer,
    userReducer,
    contactReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;