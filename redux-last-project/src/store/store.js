import {configureStore} from '@reduxjs/toolkit';
import rootReducer from "../reducers/index";
import {createLogger} from "redux-logger/src";
const logger=createLogger()
const middleware=[logger]
const store=configureStore({
    reducer:rootReducer,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;


