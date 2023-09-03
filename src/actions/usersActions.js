import axios from "axios";

import { GET_ALL_USERS } from "./types";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/user`,
        {
          withCredentials: true,
        }
      );

      dispatch({ type: GET_ALL_USERS, payload: response.data });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de tous les utilisateurs :",
        error
      );
      // Vous pouvez gérer les erreurs ici, par exemple, en dispatchant une action d'erreur
    }
  };
};
