const initialState = {
    usersList: [],
    error: false,
    loading: false
};



const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'USERS_LOADING':
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'USERS_ERROR':
            return{
                ...state,
                loading: false,
                error: true
            };
        case 'USERS_SUCCESS':
            return{
                ...state,
                usersList: payload.users
            };
        default:
            return state;
    };
}

export default reducer;