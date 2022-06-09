import { USER_DATA_SUCCESS } from "../types";

export const setUserData = (userData: object) => {
    return dispatch => {
        dispatch({type: USER_DATA_SUCCESS, payload: userData})
    }
}
