import { createSlice } from "@reduxjs/toolkit";
import { getAbout, createAbout, editAboutDetails, deleteAbout } from "../actions/aboutAction";

const aboutReducer = createSlice({
    name:'about',
    initialState:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        isMessage: false,
        about: []
    },
    reducers: {
        reset: (state) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = false;
          state.isMessage = false;
        },
        setModalState: (state, actions) => {
          state.isVisible = actions.payload;
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(createAbout.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(createAbout.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isVisible = false
            state.isMessage = actions.payload.message
          })
          .addCase(createAbout.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(editAboutDetails.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(editAboutDetails.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isVisible = false
            state.isMessage = actions.payload.message;
            // state.user = actions.payload
          })
          .addCase(editAboutDetails.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(deleteAbout.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(deleteAbout.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isMessage = actions.payload;
            // state.user = actions.payload
          })
          .addCase(deleteAbout.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(getAbout.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(getAbout.fulfilled, (state, actions) => {
            state.isLoading = false;
            // state.isSuccess = true;
            state.about = actions.payload
          })
          .addCase(getAbout.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
      },
})

export const { reset, setModalState } = aboutReducer.actions;
export default aboutReducer.reducer