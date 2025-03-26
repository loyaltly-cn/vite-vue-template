import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";

import test from '@/pages/test/index.vue'
import _404 from "@pages/_404/index.tsx";
import Home from '@pages/home/index.vue'
import Login from '@pages/login/index.vue'

const list:Array<RouteRecordRaw> = [{
    path:'/',
    redirect:'/home'
},{
    path:'/home',
    component:Home,
},{
    path:'/login',
    component:Login,
},{
    path:'/test',
    component:test,
},{
    path:'/:catchAll(.*)',
    component:_404
}]

const router = createRouter({
    history: createWebHistory(),
    routes:list
})

export default router