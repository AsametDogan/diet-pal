import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Ebru Nur",
      surname: "Uslu",
      email: "ebruebg@gmail.com",
      phone: "05070268105",
      gender: "",
      weight: 0,
      height: 0,
      age: 0,
      diseases: "",
      goals: "",
    },

    isLogged: false,
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
