import { postRequest, getRequest, putRequest, deleteRequest } from "../utils/request";

export const getWorkDetailsAPI = () => getRequest(`/work`)
export const createWorkDetailsAPI = data => postRequest(`/work`, data)
export const editWorkDetailsAPI = data => putRequest(`/work`, data)
export const deleteWorkDetailsAPI = data => deleteRequest(`/work/${data.id}`)
