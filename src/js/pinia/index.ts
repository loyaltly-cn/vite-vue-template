import {defineStore} from "pinia";
import {reactive, ref} from "vue";

const user = defineStore('userinfo',() => reactive({status:false}))
const theme = defineStore('current',() => ref())

export default {
    user,
    theme
}