import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import { defineAsyncComponent, type Component } from "vue"
import _404 from '@/pages/_404/index.vue'
const pages = import.meta.glob('../../pages/**/meta.ts',{
    eager: true,
    import:'default'
})

const components = import.meta.glob('../../pages/**/index.vue')
console.log(components)
//@ts-ignore
const routes: RouteRecordRaw[] = Object.entries(pages).map(([path,meta])=>{
    const com_path = path.replace('meta.ts','index.vue')
    path = path.replace('../../pages','').replace('/meta.ts','') || '/'
    const name = path.split('/').filter(Boolean).join('-') || 'index'
    return {
        path,
        name,
        component: defineAsyncComponent(components[com_path] as () => Promise<Component>),
        meta
    }
})

routes.unshift({
    path: '/',
    redirect: '/home'
})

routes.push({
    path:'/:catchAll(.*)',
    component:_404
})

console.log(routes)

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router