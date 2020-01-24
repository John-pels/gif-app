import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';

 const store = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}

export default store;
