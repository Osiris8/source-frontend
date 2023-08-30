import axios from "axios";
// userActions.js
import { GET_USER } from "./types"; // Importez le type d'action
import { GET_USER_PROFILE } from "./types";

// Action creator pour mettre à jour l'état de l'utilisateur
export const getUser = (userId) => {
  return {
    type: GET_USER,
    payload: userId, // Utilisez userId comme payload
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}api/user/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch({ type: GET_USER_PROFILE, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
