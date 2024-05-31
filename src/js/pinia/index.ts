import {defineStore} from "pinia";
import {reactive} from "vue";

const user = defineStore('userinfo',() => reactive([]))


export default {
    user
}