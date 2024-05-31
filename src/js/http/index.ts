import axios from "axios";
import {LoadingBar} from "@varlet/ui";

const baseURL = 'http://localhost:8080/'
const entCloud = '16e80910a48d21c91b96f5518d60c117'

const http = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'X-entCloud':entCloud
    },
});

http.interceptors.request.use(config => {
    LoadingBar.start()
    return config;
});

http.interceptors.response.use(response => {
    LoadingBar.finish()
    return response.data;
}, error => {
    LoadingBar.error()
    return Promise.reject(error);
});

export default http