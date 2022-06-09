import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import { SIGNOUT_USER_SUCCESSFUL } from '../types';

const appReducer = combineReducers({
    auth: AuthReducer,
})

const rootReducer = (state: any, action: any) => {
    if (action.type === SIGNOUT_USER_SUCCESSFUL) {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  
  export default rootReducer;