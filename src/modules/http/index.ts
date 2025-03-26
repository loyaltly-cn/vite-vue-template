import axios from "axios";
import {LoadingBar, Snackbar} from "@varlet/ui";
import storage from "@/modules/storage";
import router from "@/modules/router";
const baseURL = 'http://localhost:8080/'
// const baseURL = 'https://xxxxxx/api/'
const X_API_Key = '16e809101a48d214c91b95518d60c117'

const http = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key':X_API_Key
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
    error.response.data.message?Snackbar.error(error.response.data.message):Snackbar.error("服务器连接超时,请稍后重试")
    handler(error.response.status)
    return Promise.reject(error);
});


const handler = (code:number) =>{
    switch (code){
        case 401:
            storage.clear()
            setTimeout(() =>{
                router.push('/login')
            },1500)
            break;
        default:break
    }
}

export default http