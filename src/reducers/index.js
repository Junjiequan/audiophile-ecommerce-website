import counterReducer from './counter';
import modalToggleReducer from './modalToggle';
import productsReducer from './products';
import {combineReducers} from 'redux';


export const allReducer = combineReducers({
    counter : counterReducer,
    modalToggle : modalToggleReducer,
    products : productsReducer
})

