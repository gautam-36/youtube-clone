import { composeWithDevTools } from "redux-devtools-extension"
import { applyMiddleware, combineReducers } from "redux"
import {createStore} from "redux"
import thunk from "redux-thunk"

import {authReducer} from './reducers/auth.reducer' 

const  rootReducer = combineReducers({
    auth:authReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))
export default store