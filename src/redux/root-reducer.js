// comes from the redux library
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer.jsx';


// user: is the key and goes to the userReducer
// export this as the default value
export default combineReducers({
    user: userReducer
})