// userReducer.js
import { GET_ALL_USERS } from "../actions/types";

const initialState = {
  allUsers: [], // Ajoutez un tableau pour stocker les données de tous les utilisateurs
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
