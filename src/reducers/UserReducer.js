// storing the data of users in search

const userReducer = (state = { userData: null, loading: false, error: false }, action ) => {
    switch (action.type) {
        case "USER_RETRIEVE_START":
            return { ...state, loading: true, error: false };
        case "USER_RETRIEVE_SUCCESS":
            return { ...state, userData: action.data, loading: false, error: false };
        case "USER_RETRIEVE_FAIL":
            return { ...state, loading: false, error: true };
        default: 
            return state;
    }
};

export default userReducer;