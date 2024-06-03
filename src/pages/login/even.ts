import http from "@/js/http";
import {obj} from "./index.ts";

const submit_code = (e:boolean) =>{
    if (e){
        http.post('auth/login/code',{
            phone:obj.phone,
            code:obj.code,
        }).then(res =>{
            console.log(res)
        })
    }
}

const submit_pwd = (e:boolean) =>{
    if (e){

    }
}

const sendCode = () =>{
    console.log(obj.phone)
}

export default {
    submit_code,
    submit_pwd,
    sendCode
}