import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Index from '@pages/index/index.vue'

const list:Array<RouteRecordRaw> = [{
    path:'/',
    redirect:'/index'
},{
    path:'/index',
    component:Index,
}]

const router = createRouter({
    history: createWebHistory(),
    routes:list
})

export default router