import {Snackbar} from "@varlet/ui";
import {ref} from "vue";
import rules from "@/modules/rules";

let flag = true
let msg = ref("发送验证码")

const sendCode = (phone:string) =>{

    if (!rules.phone.test(phone)){
        Snackbar.warning('请输入正确的手机号')
        return false
    }

    if (!flag){
        Snackbar.warning('请勿重复点击')
        return false
    }

    flag = false
    let s = 60
    msg.value = String(s--)+'s'
    const countdown = setInterval(() =>{
        msg.value = String(s--)+'s'
        if (s < 0){
            flag = true
            msg.value = '重新获取验证码'
            clearInterval(countdown)
        }
    },1000)

    return true
}

export default {
    sendCode,
    msg
}