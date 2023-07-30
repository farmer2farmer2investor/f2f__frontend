import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getPost = (id) => API.get(`/post/${id}`);
export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);