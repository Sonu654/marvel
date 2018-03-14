import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { LAUNCH, USER_AVAILABLE, USER_FOUND, DEMO_USER_SET, MERGE_USER } from '../actions/';
import demo from '../demo.json';
import Data from '../users.json';
import { Actions } from 'react-native-router-flux';
let defaultState = { loading: true, data: [], mergeuser: [], user: [] };
const launchReducer = (state = defaultState, action) => {
    AsyncStorage.setItem("demo", JSON.stringify(demo));
    AsyncStorage.setItem("users", JSON.stringify(Data));

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
    switch (action.type) {
        case USER_AVAILABLE:
            console.log("action.data: ", action.data);
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
    console.log("demo action: ", action);
    switch (action.type) {
        case DEMO_USER_SET:
            console.log(typeof (action.data));
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case MERGE_USER:
            return {
                ...state,
                mergeuser: action.data,
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