import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { reducer as FormReducer } from 'redux-form'

export default combineReducers({
    posts: postReducer,
    form: FormReducer
})