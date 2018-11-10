import {SERVICES} from "../types/Types";

export const getServiceList = () => dispatch=>{
    fetch('/api/service/list')
        .then(response => response.json())
        .then(servicesList => dispatch({
            type : SERVICES,
            payload : servicesList
        }))
}
export default getServiceList