import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create();

api.interceptors.response.use(
    (response) => response.data,
    (error: any) =>
        Promise.reject(
            (error.response && error.response.data) || 'Wrong Service'
        )
);

export default api;
