import thunk from 'redux-thunk'
import {createStore , applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/index'


//the initial state of the application
const initialState = {}

// the middleware that connect the store to the reducers
const middleware = [thunk]


// the stkre
const store = createStore(rootReducer,
                          initialState,
                          compose(
                            applyMiddleware(...middleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                        )
                      );
export default store