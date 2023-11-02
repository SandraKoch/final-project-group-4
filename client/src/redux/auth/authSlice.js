import { register, signin, setAuthHeader } from "./operations";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refreshToken(state) {
      setAuthHeader(state.token);
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [signin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    //     [logOut.fulfilled](state) {
    //       state.user = { name: null, email: null };
    //       state.token = null;
    //       state.isLoggedIn = false;
    //     },
    //     [getUserData.fulfilled](state, action) {
    //       // state.user = action.payload.user;
    //       // state.token = action.payload.token;
    //       state.isLoggedIn = true;
    //     },
  },
});

export const { refreshToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
