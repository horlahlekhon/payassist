import {NEW_SERVICE} from "../types/Types";

 const createService = (newService) => dispatch => {
    console.log('logging the data to the backend ', newService);
    fetch('/api/service/add', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(newService)
    }).then(res => res.json())
        .then(service => dispatch({
                type : NEW_SERVICE,
                payload : service
            })

        ).catch(error => console.log('error ->>> reasoin why we cant send',error))
}
export default createService