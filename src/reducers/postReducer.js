import { GET_ALL_POSTS } from "../actions/types";
import {
  LIKE_POST,
  UNLIKE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../actions/types";

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
    case LIKE_POST:
      const likedPostId = action.payload.postId;
      // Créez une nouvelle copie de allPosts avec les likers mis à jour
      const updatedAllPosts = state.allPosts.map((post) => {
        if (post._id === likedPostId) {
          // Créez une nouvelle copie du post avec les likers mis à jour
          return {
            ...post,
            likers: [...post.likers, action.payload.userId],
          };
        }
        return post;
      });
      return {
        ...state,
        allPosts: updatedAllPosts,
      };
    case UNLIKE_POST:
      const unlikedPostId = action.payload.postId;
      // Créez une nouvelle copie de allPosts avec les likers mis à jour
      const updatedUnlikedPosts = state.allPosts.map((post) => {
        if (post._id === unlikedPostId) {
          // Créez une nouvelle copie du post avec les likers mis à jour
          return {
            ...post,
            likers: post.likers.filter((id) => id !== action.payload.userId),
          };
        }
        return post;
      });
      return {
        ...state,
        allPosts: updatedUnlikedPosts,
      };
    case UPDATE_POST:
      const updatedPostId = action.payload.postId;
      // Créez une nouvelle copie de allPosts avec les posts(message) mis à jour
      const updatedPosts = state.allPosts.map((post) => {
        if (post._id === updatedPostId) {
          // Créez une nouvelle copie du post avec les posts(message) mis à jour
          return {
            ...post,
            message: action.payload.message,
          };
        }
        return post;
      });
      return {
        ...state,
        allPosts: updatedPosts,
      };
    case DELETE_POST:
      const deletedPostId = action.payload.postId;
      // Créez une nouvelle copie de allPosts avec les posts(message) mis à jour
      const deletedPosts = state.allPosts.filter((post) => {
        return post._id !== deletedPostId;
      });
      return {
        ...state,
        allPosts: deletedPosts,
      };
    default:
      return state;
  }
};

export default postReducer;
