import axios from "axios";
import {LoadingBar, Snackbar} from "@varlet/ui";
import storage from "@/modules/storage";
import router from "@/modules/router";

const http = axios.create({
    baseURL: __BASE_URL__,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key':import.meta.env.VITE_X_API_KEY
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