import counterReducer from './counter';
import modalToggleReducer from './modalToggle';
import {combineReducers} from 'redux';


export const allReducer = combineReducers({
    counter : counterReducer,
    modalToggle : modalToggleReducer,
})

