import task from "@/modules/task";
import {Snackbar} from "@varlet/ui";
import theme from "@/modules/theme";
import router from "@/modules/router";
import pinia from "@/modules/pinia";

export default () =>{
    task.start()
    Snackbar.allowMultiple(true)
    theme.init()
    router.beforeEach((to, _, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)){
            if (!pinia().user.status){
                next('/login')
            }else {
                next()
            }
        }else {
            next()
        }
    })
}