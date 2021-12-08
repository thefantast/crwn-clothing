const INITIAL_STATE = {

    currentUser: null
}

// when state is not defined it will get the information from INITAL_State
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            // return a new Object {} = a sign for a new Object
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;        
    }

}

export default userReducer;