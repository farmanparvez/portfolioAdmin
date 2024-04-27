import { createSlice } from "@reduxjs/toolkit";
import {
  createSkills,
  getSkills,
  editSkillDetails,
  deleteskill,
} from "../actions/skillsActions";

const skillsReducer = createSlice({
  name: "skills",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: false,
    skills: [],
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
      .addCase(createSkills.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(createSkills.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message;
        state.isVisible = false
        // state.user = actions.payload
      })
      .addCase(createSkills.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(editSkillDetails.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(editSkillDetails.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message;
        state.isVisible = false
        // state.user = actions.payload
      })
      .addCase(editSkillDetails.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(deleteskill.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(deleteskill.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = actions.payload.message;
        // state.user = actions.payload
      })
      .addCase(deleteskill.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      })
      .addCase(getSkills.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getSkills.fulfilled, (state, actions) => {
        state.isLoading = false;
        // state.isSuccess = true;
        state.skills = actions.payload;
        // console.log(actions.payload)
      })
      .addCase(getSkills.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = actions.payload;
      });
  },
});

export const { setModalState, reset } = skillsReducer.actions;
export default skillsReducer.reducer;
