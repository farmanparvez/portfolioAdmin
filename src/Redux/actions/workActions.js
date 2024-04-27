import { createAsyncThunk } from "@reduxjs/toolkit";
import { createWorkDetailsAPI, getWorkDetailsAPI, editWorkDetailsAPI, deleteWorkDetailsAPI  } from "../../service/workAPI";


export const getWorkDetails = createAsyncThunk("wrok/getWorkDetails", async(data, thunkAPI) => {
    try {
        const res = await getWorkDetailsAPI(data)
        // console.log(res)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const createWorkDetails = createAsyncThunk("work/creatWorkDetails", async(data, thunkAPI) => {
    try {
        const res = await createWorkDetailsAPI(data)
        thunkAPI.dispatch(getWorkDetails())
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const editWorkDetails = createAsyncThunk("work/editWorkDetails", async(data, thunkAPI) => {
    try {
        const res = await editWorkDetailsAPI(data)
        thunkAPI.dispatch(getWorkDetails())
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteWork = createAsyncThunk("work/deleteWork", async(data, thunkAPI) => {
    try {
        const res = await deleteWorkDetailsAPI(data)
        thunkAPI.dispatch(getWorkDetails())
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})




