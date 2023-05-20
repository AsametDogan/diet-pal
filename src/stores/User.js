import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "user",
      surname: "surname",
      email: "mail",
      phone: "phone",
      gender: "",
      weight: 0,
      height: 0,
      age: 0,
      diseases: "",
      goals: "",
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
