import axios from "axios";

const url = "http://localhost:5000/posts";

export const createPost = (newPost) => axios.post(url, newPost);
export const fetchData = () => axios.get(url);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
