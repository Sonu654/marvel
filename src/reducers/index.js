import { combineReducers } from 'redux';
import { LAUNCH, USER_AVAILABLE, USER_FOUND, DEMO_USER_SET } from '../actions/';
let defaultState = { loading: true };
const launchReducer = (state = defaultState, action) => {
    console.log("launch");
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

const userReducer = (state = defaultState, action) => {
    console.log("user Reducer");
    switch (action.type) {
        case USER_AVAILABLE:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        default:
            return { ...state }

    }
};

const contactReducer = (state = defaultState, action) => {
    console.log("contact");
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

const demoUserReducer = (state = defaultState, action) => {
    console.log("demo action: ",action);
    switch (action.type) {
        case DEMO_USER_SET:
            return {
                ...state,
                data:action.data,
                loading:false
            };
        default:
            return { ...state }
    }
}

const rootReducer = combineReducers(
    {
    launchReducer,
    userReducer,
    contactReducer,
    demoUserReducer

    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;