import { CREATE, DELETE, GET_POST, UPDATE_POST } from "../actionType";
import { fetchData, createPost, updatePost, deletePost } from "../../api/index";
// import axios from "axios";
// console.log(api);
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchData();

    dispatch({ type: GET_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePosts = (id, post) => async (dispatch) => {
  try {
    console.log(id, post);
    const { data } = await updatePost(id, post);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePosts = (id) => async (dispatch) => {
  try {
    console.log(id);
    await deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
