
import { postRequest, getRequest, putRequest, deleteRequest } from "../utils/request"

export const getAboutAPI = () => getRequest(`/about`)
export const createAboutAPI = data => postRequest(`/about`, data)
export const editAboutDetailsAPI = data => putRequest(`/about`, data)
export const deleteAboutDetailsAPI = data => deleteRequest(`/about/${data.id}`)

