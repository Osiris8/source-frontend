import axios from "axios";
// userActions.js
import { GET_USER } from "./types"; // Importez le type d'action
import { GET_USER_PROFILE } from "./types";
import { UPLOAD_PICTURE } from "./types";
import { UPDATE_USER_BIOGRAPHY } from "./types";

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
  return async (dispatch) => {
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

export const updateUserBiographySuccess = (updatedUser) => ({
  type: UPDATE_USER_BIOGRAPHY,
  payload: updatedUser,
});

// Thunk to update user biography
export const updateUserBiography = (data, userId) => {
  return async (dispatch) => {
    try {
      // Envoyez la demande de mise à jour au serveur
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}api/user/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Si vous avez besoin d'authentification
        }
      );

      // Une fois la mise à jour effectuée avec succès, envoyez l'action Redux
      dispatch(updateUserBiographySuccess(response.data));
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la biographie :", error);
      // Vous pouvez gérer les erreurs ici, par exemple, en dispatchant une action d'erreur
    }
  };
};
