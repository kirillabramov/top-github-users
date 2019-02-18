export const usersLoading = () => ({type: 'USERS_LOADING'});
export const usersSuccess = (res) => {
    return(
        {
            type: 'USERS_SUCCESS',
            payload: res
        }
    )
};
export const usersError = () => ({type: 'USERS_ERROR'});