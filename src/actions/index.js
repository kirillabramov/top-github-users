import axios from 'axios';

const ROOT_URL = 'https://api.github.com';

export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERROR = 'USERS_ERROR';


export function fetchUsers() {

    
    const url = `${ROOT_URL}/search/users?client_id=4aea63de3ecde17e762d&client_secret=ac7e612631d941c98e956ee883faf06c894cd358`;

    const request = axios(url,{
        params: {
            q: "location:kiev",
            page: 1,
            per_page: 10
          }
        })
        .then( res => {
            return Promise.all(
                res.data.items.map(item => {
                    return axios(`${ROOT_URL}/users/${item.login}?client_id=4aea63de3ecde17e762d&client_secret=ac7e612631d941c98e956ee883faf06c894cd358`).then(res => res.data)
                }
                )
            )
        })
        .catch(err => {
            return {
                type: USERS_ERROR
            }
        });
    return {
        type: USERS_SUCCESS,
        payload: request
    }
}