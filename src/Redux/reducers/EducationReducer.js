import { createSlice } from "@reduxjs/toolkit";
import { createEducation, getEducation, editEducationDetails, deleteEducation } from "../actions/educationActions";

const educationReducer = createSlice({
    name:'education',
    initialState:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        isMessage: false,
        education: []
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
          .addCase(createEducation.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(createEducation.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isVisible = false
            // state.user = actions.payload
          })
          .addCase(createEducation.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(editEducationDetails.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(editEducationDetails.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isVisible = false

            // state.user = actions.payload
          })
          .addCase(editEducationDetails.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(deleteEducation.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(deleteEducation.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.isSuccess = true;
            // state.user = actions.payload
          })
          .addCase(deleteEducation.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
          .addCase(getEducation.pending, (state, actions) => {
            state.isLoading = true;
          })
          .addCase(getEducation.fulfilled, (state, actions) => {
            state.isLoading = false;
            // state.isSuccess = true;
            state.education = actions.payload
          })
          .addCase(getEducation.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            state.isMessage = actions.payload;
          })
      },
})

export const { reset, setModalState } = educationReducer.actions;
export default educationReducer.reducer