import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: t,
};

const AuthenticationSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = AuthenticationSlice.actions;

export default AuthenticationSlice;
