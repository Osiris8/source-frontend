import axios from "axios";
import { GET_ALL_POSTS } from "./types";
import { LIKE_POST, UNLIKE_POST } from "./types";
import { UPDATE_POST } from "./types";
import { DELETE_POST } from "./types";
import { ADD_COMMENT } from "./types";
import { EDIT_COMMENT } from "./types";
import { DELETE_COMMENT } from "./types";
import { ADD_POST } from "./types";

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/post`,
        {
          withCredentials: true,
        }
      );
      // Si la requête réussit, dispatchez l'action avec les données reçues
      dispatch({ type: GET_ALL_POSTS, payload: response.data });
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des posts :",
        error
      );
      // Vous pouvez gérer les erreurs ici, par exemple, en dispatchant une action d'erreur
    }
  };
};

// Action pour aimer un post
export const likePost = (postId, userId) => {
  return async (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_BASE_URL}api/post/like/` + postId,
      data: { id: userId },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: LIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikePost = (postId, userId) => {
  return async (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_BASE_URL}api/post/unlike/` + postId,
      data: { id: userId },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePost = (postId, message) => {
  return async (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_BASE_URL}api/post/` + postId,
      data: { message },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { postId, message } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_BASE_URL}api/post/` + postId,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (postId, commenterId, commenterPseudo, comment) => {
  return async (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_BASE_URL}api/post/comment/` + postId,
      data: { commenterId, commenterPseudo, comment },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { postId, comment } });
      })
      .catch((err) => console.log(err));
  };
};

export const editComment = (postId, commentId, comment) => {
  return async (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_BASE_URL}api/post/editcomment/` + postId,
      data: { commentId, comment },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({
          type: EDIT_COMMENT,
          payload: { postId, commentId, comment },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (postId, commentId) => {
  return async (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_BASE_URL}api/post/deletecomment/` + postId,
      data: { commentId },
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return async (dispatch) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}api/post`,
      data: data,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
