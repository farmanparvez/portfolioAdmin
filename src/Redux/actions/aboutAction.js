import { createAsyncThunk } from "@reduxjs/toolkit";
import {getAboutAPI,  createAboutAPI, editAboutDetailsAPI, deleteAboutDetailsAPI } from "../../service/aboutAPI"; 

export const getAbout = createAsyncThunk('about/getAbout', async(_, thunkAPI) => {
    try {
        const res = await getAboutAPI()
        // console.log(res)
        return res?.about
    } catch (error) {
        console.log(error.response.data.message )
        const message = error.response.data.message || error.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const createAbout = createAsyncThunk('About/createAbout', async(data, thunkAPI) => {
    try {
        const res = await createAboutAPI(data)
        thunkAPI.dispatch(getAbout());
        return res
    } catch (error) {
        console.log(error.response.data.message )
        const message = error.response.data.message || error.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const editAboutDetails = createAsyncThunk(
    "about/editAboutDetails",
    async (data, thunkAPI) => {
      try {
        const res = await editAboutDetailsAPI(data);
        thunkAPI.dispatch(getAbout());
        return res;
      } catch (error) {
        const message =
          error?.response?.data?.message || error?.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  
  export const deleteAbout = createAsyncThunk(
    "about/deleteAbout",
    async (data, thunkAPI) => {
      try {
        const res = await deleteAboutDetailsAPI(data);
        thunkAPI.dispatch(getAbout());
        return res;
      } catch (error) {
        const message =
          error?.response?.data?.message || error?.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  