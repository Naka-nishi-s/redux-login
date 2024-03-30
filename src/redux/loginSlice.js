import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginState",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
