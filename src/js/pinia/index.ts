import {defineStore} from "pinia";
import {reactive} from "vue";

const user = defineStore('userinfo',() => reactive({status:false}))


export default {
    user
}