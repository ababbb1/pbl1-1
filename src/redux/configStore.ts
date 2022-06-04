import { createStore, combineReducers, applyMiddleware } from "redux"
import myDict from "./modules/myDict"
import thunk from "redux-thunk"

const rootReducer = combineReducers({myDict})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store