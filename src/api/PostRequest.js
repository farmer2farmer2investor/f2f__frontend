import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getPost = (id) => API.get(`/post/${id}`);
export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`/post/${id}/like`, {userId: userId});
export const userPosts = (id) => API.get(`/post/${id}/posts`);