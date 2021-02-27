import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = '?key=123'
const URL = 'http://reduxblog.herokuapp.com/api'

export const fetchPosts = () => {
    const response = axios.get(`${URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: response
    }
}