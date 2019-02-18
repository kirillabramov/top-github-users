const initialState = {
    usersList: [],
    error: false
};



const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'USERS_ERROR':
            return{
                ...state,
                loading: false,
                error: true
            };
        case 'USERS_SUCCESS':
            return{
                ...state,
                usersList: payload
            };
        default:
            return state;
    }
}

export default reducer;