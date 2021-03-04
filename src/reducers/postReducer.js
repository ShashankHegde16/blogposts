import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash'
export const postReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, ..._.mapKeys(action.payload.data, 'id') };
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}