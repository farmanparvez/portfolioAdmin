import { createSlice } from "@reduxjs/toolkit";
import {
  createWorkDetails,
  getWorkDetails,
  editWorkDetails,
  deleteWork,
} from "../actions/workActions";

const workReducer = createSlice({
  name: "work",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
    workDetails: [],
    isVisible: null,
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
    },
    setModalState: (state, actions) => {
      state.isVisible = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWorkDetails.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(createWorkDetails.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message;
        state.isVisible = false;
        console.log(actions.payload);
      })
      .addCase(createWorkDetails.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(editWorkDetails.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(editWorkDetails.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message;
        state.isVisible = false;
      })
      .addCase(editWorkDetails.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(deleteWork.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(deleteWork.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message;
        state.isVisible = false;
      })
      .addCase(deleteWork.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(getWorkDetails.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getWorkDetails.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.workDetails = actions.payload.work;
      })
      .addCase(getWorkDetails.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      });
  },
});

export const { reset, setModalState } = workReducer.actions;
export default workReducer.reducer;
