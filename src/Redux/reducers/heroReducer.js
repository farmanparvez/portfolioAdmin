import { createSlice } from "@reduxjs/toolkit";
import { createHeroDetails, getHeroDetails } from "../actions/heroAction";

const heroReducer = createSlice({
  name: "hero",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: false,
    heroDetails: [],
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
      .addCase(createHeroDetails.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(createHeroDetails.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message
        console.log(actions.payload)
      })
      .addCase(createHeroDetails.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(getHeroDetails.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getHeroDetails.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.heroDetails = actions.payload.details
        // console.log(actions.payload)
      })
      .addCase(getHeroDetails.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })

  },
});

export const { reset } = heroReducer.actions;
export default heroReducer.reducer;
