import { GET_ALL_POSTS } from "../actions/types";

const initialState = {
  allPosts: [], // Initialiser le tableau des posts comme vide
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload, // Mettez à jour le tableau des posts avec les données reçues
      };
    default:
      return state;
  }
};

export default postReducer;
