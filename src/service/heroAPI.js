import { postRequest, getRequest } from "../utils/request";

export const createHeroDetailsAPI = data => postRequest(`/hero`, data)
export const getHeroDetailsAPI = () => getRequest(`/hero`)
