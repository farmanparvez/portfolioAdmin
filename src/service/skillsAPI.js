import { postRequest, getRequest, putRequest, deleteRequest } from "../utils/request"
// const url = 'user'

export const getSkillsAPI = () => getRequest(`/skill`)
export const createSkillsAPI = (data) => postRequest(`/skill`, data)
export const editskillDetailsAPI = data => putRequest(`/skill`, data)
export const deleteskillDetailsAPI = data => deleteRequest(`/skill/${data.id}`, data)
