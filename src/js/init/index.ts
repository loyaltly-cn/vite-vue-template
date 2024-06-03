import router from "@/js/router";
import pinia from "@/js/pinia";
import task from "@/js/task";
import {Snackbar} from "@varlet/ui";
import local from "@/js/local";
import storage from "@/js/storage";
import theme from "@/js/theme/index.ts";
// import http from "@/js/http";

export default async () =>{

    task()
    Snackbar.allowMultiple(true)
    theme.init()
    local.token = storage.get('token')

    // if (local.token){
    //     http.defaults.headers.common['Authorization'] = local.token
    //     const res = await http.post("auth/token")
    //     if (!res){
    //         storage.clear()
    //         await router.push('/login')
    //     }
    //
    //
    // }

    router.beforeEach((to, _, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)){
            if (!pinia.user().status){
                next({
                    path:'/login',
                    query:{redirect: to.fullPath}
                })
            }else {
                next()
            }
        }else {
            next()
        }
    })
}