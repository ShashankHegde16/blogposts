import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'CREATE_POST';



const API_KEY = '?key=dotasha1621'
const URL = 'http://reduxblog.herokuapp.com/api'

export const fetchPosts = () => {
    const response = axios.get(`${URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: response
    }
}

export const createPost = (formValues, callback) => {
    const response = axios.post(`${URL}/posts${API_KEY}`, formValues)
        .then(() => callback());
    return {
        type: CREATE_POST,
        payload: response
    }
}

export const fetchPost = (id) => {
    const response = axios.get(`${URL}/posts/${id}/${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: response
    }
}

export const deletePost = (id, callback) => {
    axios.delete(`${URL}/posts/${id}/${API_KEY}`).then(() => callback());
    return {
        type: DELETE_POST,
        payload: id
    }
}