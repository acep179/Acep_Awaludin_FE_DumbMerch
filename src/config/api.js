import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.SERVER_BASEURL,
});

//. Menyimpan token ke dalam Header
export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common['Authorization'];
    }
};