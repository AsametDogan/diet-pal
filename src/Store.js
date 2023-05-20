import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./stores/page";
import userReducer from "./stores/User";

export default configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
});
