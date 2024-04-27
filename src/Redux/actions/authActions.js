import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, logoutAPI } from "../../service/authAPI";


export const login = createAsyncThunk("login/authLogin", async(data, thunkAPI) => {
    try {
        const res = await loginAPI(data)
        console.log(res)
        localStorage.setItem('porToken', res.token)
        console.log(res.token)
        return res.token
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk("logout/authLogout", async() => {
    logoutAPI() 
})

