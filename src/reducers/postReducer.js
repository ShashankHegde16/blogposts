import { FETCH_POSTS } from '../actions';
import _ from 'lodash'
export const postReducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, ..._.mapKeys(action.payload.data, 'id') }
        default:
            return state;
    }

}