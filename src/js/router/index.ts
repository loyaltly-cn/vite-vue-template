import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

import Index from '@pages//index/index.vue'
import Test from '@pages/test/index.jsx'



const list:Array<RouteRecordRaw> = [{
    path:'/',
    redirect:'/index'
},{
    path:'/index',
    component:Index,
    children:[{
        path:'test',
        name:'test',
        component:Test,
    }]
}]

const router = createRouter({
    history: createWebHistory(),
    routes:list
})

export default router