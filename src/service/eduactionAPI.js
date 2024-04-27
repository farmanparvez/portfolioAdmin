
import { postRequest, getRequest, putRequest, deleteRequest } from "../utils/request"

export const getEducationAPI = () => getRequest(`/education`)
export const createEducationAPI = data => postRequest(`/education`, data)
export const editEducationDetailsAPI = data => putRequest(`/education`, data)
export const deleteEducationDetailsAPI = data => deleteRequest(`/education/${data.id}`)

