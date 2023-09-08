import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import usersReducer from "../reducers/usersReducer";
import postReducer from "../reducers/postReducer";
export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    posts: postReducer,
    // Autres reducers si vous en avez
  },
});
