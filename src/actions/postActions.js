import axios from "axios";
import { GET_ALL_POSTS } from "./types";

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
