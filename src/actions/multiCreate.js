import {MULTI_CREATE_SERVICE} from "../types/Types";

const multiCreate = (services) => dispatch => {
    console.log('logging the list  to the backend ', services);
    fetch('/api/service/upload', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(services)
    }).then(res => res.json())
        .then(service => dispatch({
            type : MULTI_CREATE_SERVICE,
            payload : service
        })).catch(error => console.log('error ->>> reasoin why we cant send',error))
}
export default multiCreate