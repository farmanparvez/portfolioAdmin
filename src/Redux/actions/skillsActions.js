import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSkillsAPI, getSkillsAPI, editskillDetailsAPI, deleteskillDetailsAPI } from "../../service/skillsAPI";

export const getSkills = createAsyncThunk(
  "skills/getSkills",
  async (_, thunkAPI) => {
    try {
      const res = await getSkillsAPI();
      // console.log(res)

      return res?.skills;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSkills = createAsyncThunk(
  "skills/AdminSkills",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const res = await createSkillsAPI(data);
      thunkAPI.dispatch(getSkills());
      return res;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || error.toString(); // console.log(error)
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editSkillDetails = createAsyncThunk(
  "work/editWorkDetails",
  async (data, thunkAPI) => {
    try {
      const res = await editskillDetailsAPI(data);
      thunkAPI.dispatch(getSkills());
      return res;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteskill = createAsyncThunk(
  "work/deleteWork",
  async (data, thunkAPI) => {
    try {
      const res = await deleteskillDetailsAPI(data);
      thunkAPI.dispatch(getSkills());
      return res;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
