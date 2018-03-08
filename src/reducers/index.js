import { combineReducers } from 'redux';
import { LAUNCH,USER_AVAILABLE, USER_FOUND } from '../actions/';

const launchReducer=(state,action)=>{
    switch(action.type){
        case LAUNCH:
            return{
                ...state,
                loading:false
            }
        default:
            return {...state}
    }
}

const userReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
        case USER_AVAILABLE:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        default:
            return {...state}

    }
};

const contactReducer = (state, action) => {
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
    userReducer,
    contactReducer,
    launchReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;