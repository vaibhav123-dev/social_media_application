import { CREATE, DELETE, GET_POST, UPDATE_POST } from "../actionType";

// const initialState = {
//   posts: [],
// };
export default (posts = [], { type, payload }) => {
  switch (type) {
    case CREATE:
      return [...posts, payload];
    case GET_POST:
      return payload;
    case UPDATE_POST:
      return posts.map((post) => (post._id === payload._id ? payload : post));

    case DELETE:
      return posts.filter((post) => post._id !== payload);

    default:
      return posts;
  }
};
