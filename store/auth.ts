import { createSlice } from "@reduxjs/toolkit";

type authSliceType = {
  currentUser: [];
  isAuthenticated: boolean;
  toggleLogin: boolean;
  error: string;
  loading: boolean;
};
const AuthInitialState: authSliceType = {
  currentUser: [],
  isAuthenticated: false,
  toggleLogin: false,
  error: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthInitialState,
  reducers: {
    login(state, { payload }) {
      state.currentUser = payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.currentUser = [];
      state.isAuthenticated = false;
    },

    handleLoginModal(state, { payload }) {
      console.log(payload);
      state.toggleLogin = payload;
    },
    setLoading(state, { payload }) {
      console.log("pay", payload);
      state.loading = payload;
    },
  },
});

export const { login, logout, handleLoginModal, setLoading } =
  authSlice.actions;
export default authSlice.reducer;
