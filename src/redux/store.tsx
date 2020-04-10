import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import galleryReducer from './galleryReducer';
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers ({
	galleryPage: galleryReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.store = store;

export default store;