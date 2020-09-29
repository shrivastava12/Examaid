import {combineReducers} from 'redux';
import questionReducer from './questionReducer';
import syllabusReducer from './syllabusReducer';

export default combineReducers({
    questionReducer:questionReducer,
    syllabusReducer:syllabusReducer,
})