import { combineReducers } from 'redux';
import simple from './simple';
import minutes from './minutes';

export default combineReducers({
    simple,
    minutes
});