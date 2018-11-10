import {SERVICES,ACCOUNTS, NEW_SERVICE,NEW_ACCOUNT,MULTI_CREATE_SERVICE, MULTI_CREATE_ACCOUNT} from '../types/Types.js'

  const initState = {

      accountList : [],
      serviceList : [],
      newService : {},
      newAccount : {},
      multiInsertSuccess : {},
      serviceNames:[],
      multiAccountInsertSuccess: {}
  }

export default (state = initState, action) => {
    console.log('reducer data- AccountList ', action.payload);
    switch (action.type) {
    case ACCOUNTS:
      return {
        ...state,
        accountList:action.payload
      }
    case NEW_ACCOUNT:
      console.log('new account' , action.payload);
      return{
        ...state,
        newAccount : action.payload
      }
    case MULTI_CREATE_ACCOUNT : 
      console.log('reached multiple insert account reducer',  action.payload);
      return{
        ...state,
        multiAccountInsertSuccess: action.payload
      }

      // **======SERVICES REDUCERS  *********************************++++++++++++++++++++++++++*+**/
    case SERVICES:
    //  console.log('reducer data servicesList' , action.payload);
      return{
        ...state,
        serviceList:action.payload
      }
    case NEW_SERVICE:
     console.log('reached an action ', action.payload);
        return{
          ...state,
          newService: action.payload
        }
    case MULTI_CREATE_SERVICE:
    console.log('multiInsertSuccess message reducer', action.payload);
        return{
          ...state,
          multiInsertSuccess :action.payload
        }
    default :
        return state;
  }
}
