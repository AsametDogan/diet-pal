import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "user",
      email: "mail",
    },

    isLogged: true,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.type = "";
    },
    setLoggedIn: (state) => {
      state.isLogged = true;
    },
  },
});

export const { login, logout, setUserType, setLoggedIn } = user.actions;
export default user.reducer;
