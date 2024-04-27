import { createAsyncThunk } from "@reduxjs/toolkit";
import { createHeroDetailsAPI, getHeroDetailsAPI  } from "../../service/heroAPI";


export const createHeroDetails = createAsyncThunk("hero/createHeroDetails", async(data, thunkAPI) => {
    try {
        const res = await createHeroDetailsAPI(data)
        // console.log(res)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getHeroDetails = createAsyncThunk("hero/getHeroDetails", async(data, thunkAPI) => {
    try {
        const res = await getHeroDetailsAPI(data)
        // console.log(res)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


