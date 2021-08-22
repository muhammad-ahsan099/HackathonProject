

import { LOGIN, LOGOUT , CHECK_USER } from "../actions/AuthAction";

// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
    isUserLoggedIn: false,
    user: null,
}


function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN: {
            // if user login than what?
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
            };
        }

        case LOGOUT: {
            // if user login than what?
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            };
        }


        case CHECK_USER: {
            // if user login than what?
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload.user,
                user: action.payload.userData
            };
        }


        default:
            return state;
    }
}

export default AuthReducer;
