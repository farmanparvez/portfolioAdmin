import axios from "axios"
import { backend_Url } from "./enviroment"

export const getRequest = (url, data) => {
    const authToken = localStorage.getItem('porToken') ? localStorage.getItem( 'porToken') : undefined
    const conifg = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios.get(`${backend_Url}/${url}`, data, conifg).then(res => res.data)
} 

export const postRequest = (url, data) => {
    const authToken = localStorage.getItem('porToken') ? localStorage.getItem( 'porToken') : undefined
    const conifg = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios.post(`${backend_Url}/${url}`, data, conifg).then(res => res.data)
} 

export const putRequest = (url, data) => {
    const authToken = localStorage.getItem('porToken') ? localStorage.getItem( 'porToken') : undefined
    const conifg = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios.put(`${backend_Url}/${url}`, data, conifg).then(res => res.data)
} 

export const deleteRequest = (url, data) => {
    const authToken = localStorage.getItem('porToken') ? localStorage.getItem( 'porToken') : undefined
    const conifg = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios.delete(`${backend_Url}/${url}`, conifg).then(res => res.data)
} 