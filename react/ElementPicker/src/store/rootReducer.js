import { combineReducers } from 'redux';
import { componentsReducer } from './components/reducer';

const rootReducer = combineReducers ({
   components : componentsReducer,
});

export default rootReducer;
