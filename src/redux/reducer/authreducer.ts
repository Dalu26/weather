import {  
    USER_DATA_SUCCESS, 
    USER_DATA_FAIL,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESSFUL,
    SIGNOUT_USER_FAIL
} from "../types";

const INITIAL_STATE = {
    userData: {},
    loading: false,
    error: []
}

export default (state = INITIAL_STATE, action: any ) => {
    switch (action.type) {
        case USER_DATA_SUCCESS: 
            return { ...state, userData: action.payload };
        case USER_DATA_FAIL: 
            return { ...state, error: action.payload };
        case SIGNOUT_USER:
            return { ...state, loading: true, error: [] };
        case SIGNOUT_USER_SUCCESSFUL:
            return { ...state, loading: false };
        case SIGNOUT_USER_FAIL:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}