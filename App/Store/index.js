import { combineReducers, createStore, applyMiddleware, } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from "redux-logger/src";

import authReducer from './Reducer/AuthReducer';
import appReducer from './Reducer/AppReducer';

// import AuthEpic from './Epics/Auth';


const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    authReducer,
    appReducer
});
//
//
// export const rootEpic = combineEpics(
//     AuthEpic.signUp
// );
//
// const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    // epicMiddleware
    loggerMiddleware);

export let store = createStore(
    rootReducer,
    createStoreWithMiddleware
);

