import { postRequest } from "../utils/request"
// const url = 'user'

export const loginAPI = data => postRequest(`/login`, data)
export const logoutAPI = () => localStorage.removeItem('porToken')