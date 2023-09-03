import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import usersReducer from "../reducers/usersReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    // Autres reducers si vous en avez
  },
});
