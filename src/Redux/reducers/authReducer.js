import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../actions/authActions";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: false,
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = actions.payload
        console.log(actions.payload)
      })
      .addCase(login.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(logout.fulfilled, (state, actions) => {
          state.user = null
      })
  },
});

export const { reset } = authReducer.actions;
export default authReducer.reducer;
