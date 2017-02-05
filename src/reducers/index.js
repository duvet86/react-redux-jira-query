import { combineReducers } from 'redux';
import jiraQuery from './jiraQuery';

const appReducer = combineReducers({
    jiraQuery
});

export default appReducer;