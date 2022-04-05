import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL

export const axiosInstance = axios.create({ baseURL })

/**
 * This can be used to check that frontend has access to backend
 */
export const pingpong = () => axiosInstance.get("/ping")