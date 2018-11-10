import {MULTI_CREATE_ACCOUNT} from "../types/Types";

export const multiCreateAccount = (accountList) => dispatch => {
    console.log('logging the list of accounts to the backend ', accountList);
    fetch('/api/account/upload', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(accountList)
    }).then(res => res.json())
        .then(accounts => dispatch({
            type : MULTI_CREATE_ACCOUNT,
            payload : accounts
        })).catch(error => console.log('error ->>> reasoin why we cant send',error))
}
export default multiCreateAccount