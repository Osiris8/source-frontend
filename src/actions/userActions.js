import axios from "axios";
// userActions.js
import { GET_USER } from "./types"; // Importez le type d'action
import { GET_USER_PROFILE } from "./types";
import { UPLOAD_PICTURE } from "./types";

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

// Action creator
export const uploadPicture = (data, userId) => {
  return (dispatch) => {
    return axios
      .put(
        `${process.env.REACT_APP_BASE_URL}api/user/uploadProfile/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // Ajout de cette ligne
        }
      )
      .then((res) => {
        dispatch({ type: UPLOAD_PICTURE, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        console.log("ça ne passe pas");
      });
  };
};
