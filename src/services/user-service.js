import {usersError, usersLoading, usersSuccess} from '../actions';

const _apiUrl = 'https://api.github.com';

export const getUsers = () => (dispatch) => {
dispatch(usersLoading);

fetch(`${_apiUrl}/search/users/`, {
    params: {
        location: "location:kiev",
        page: 1,
        per_page: 10
    }
})
.then(res => {
    return res.json()
})
.then(res =>{
    dispatch(usersSuccess(res))
}).catch(err => dispatch(usersError));
}





// export const fetchUsers = () => dispatch => {
//     dispatch({ type: USERS_REQUEST });
  
//     axios(apiUrl + "/search/users", {
//       params: {
//         q: "location:kiev",
//         page: 1,
//         per_page: 10
//       }
//     })
//       .then(res => {
//         const users = res.data.items;
//         return Promise.all(
//           users.map(user =>
//             axios(`${apiUrl}/users/${user.login}`).then(res => res.data)
//           )
//         );
//       })
//       .then(users => {
//         dispatch({
//           type: USERS_SUCCESS,
//           payload: { users }
//         });
//       })
//       .catch(err => dispatch({ type: USERS_ERROR }));
//   };