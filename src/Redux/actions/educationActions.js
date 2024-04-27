import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEducationAPI, getEducationAPI, editEducationDetailsAPI, deleteEducationDetailsAPI } from "../../service/eduactionAPI"; 

export const getEducation = createAsyncThunk('education/getEducation', async(data, thunkAPI) => {
    try {
        const res = await getEducationAPI()
        // console.log(res)
        return res?.education
    } catch (error) {
        console.log(error.response.data.message )
        const message = error.response.data.message || error.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const createEducation = createAsyncThunk('education/createEducation', async(data, thunkAPI) => {
    try {
        const res = await createEducationAPI(data)
        thunkAPI.dispatch(getEducation());
        return res
    } catch (error) {
        console.log(error.response.data.message )
        const message = error.response.data.message || error.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const editEducationDetails = createAsyncThunk(
    "education/editEducationDetails",
    async (data, thunkAPI) => {
      try {
        const res = await editEducationDetailsAPI(data);
        thunkAPI.dispatch(getEducation());
        return res;
      } catch (error) {
        const message =
          error?.response?.data?.message || error?.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  
  export const deleteEducation = createAsyncThunk(
    "Education/deleteEducation",
    async (data, thunkAPI) => {
      try {
        const res = await deleteEducationDetailsAPI(data);
        thunkAPI.dispatch(getEducation());
        return res;
      } catch (error) {
        const message =
          error?.response?.data?.message || error?.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  