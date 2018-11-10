import {NEW_ACCOUNT} from "../types/Types";

const createAccount = (newAccount) => dispatch => {

    console.log('logging the data to the backend ', newAccount);
    fetch('/api/account/add', {
        method : 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newAccount)
    }).then(res => res.json())
        .then(account => dispatch({
            type: NEW_ACCOUNT,
            payload : account
        })).catch(error => console.log('error ->>> reasoin why we cant send new Account',error.statusText))
}
export default createAccount
