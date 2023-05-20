import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "page",
  initialState: {
    page: "home",
  },

  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = page.actions;
export default page.reducer;
