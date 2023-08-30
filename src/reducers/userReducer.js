// reducers/userReducer.js

import { GET_USER_PROFILE } from "../actions/types";

const initialState = {
  userProfile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
