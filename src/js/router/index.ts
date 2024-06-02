import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

import Index from '@pages//index/index.vue'
import Test from '@pages/test/index.jsx'
import _404 from "@pages/404";
import Login from '@pages/login/index.vue'

const list:Array<RouteRecordRaw> = [{
    path:'/',
    redirect:'/index'
},{
    path:'/index',
    component:Index,
    meta:{
        requiresAuth:true
    }
},{
    path:'/test',
    component:Test,
},{
    path:'/:catchAll(.*)',
    component:_404
},{
    path:'/login',
    component:Login
}]

const router = createRouter({
    history: createWebHistory(),
    routes:list
})

export default router