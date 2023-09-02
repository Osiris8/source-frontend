import {
  GET_USER_PROFILE,
  UPLOAD_PICTURE,
  UPDATE_USER_BIOGRAPHY,
} from "../actions/types";

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
    case UPLOAD_PICTURE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case UPDATE_USER_BIOGRAPHY:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
