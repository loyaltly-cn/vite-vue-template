import {defineComponent} from "vue";
import router from "@/modules/router";

const list:{ text:string, fun:() => void }[]  = [{
    text:'返回首页',
    fun:() => router.push('/container')
},{
    text:'重新登录',
    fun:() =>  router.push('/login')
},{
    text:'返回上一级',
    fun:() => router.back()
}]

const _404 = defineComponent({
    setup(){
        return () =>(
            <var-space direction="column" align="center">
                <var-image src="/src/assets/img/404.png"/>
                <h1>页面不存在</h1>
                <small class="color-disabled">您打开了一个不存在的链接</small>
                <var-space>
                    {list.map((item,i) =>(
                        <var-chip class={"hover:bg-primary hover:cursor-pointer hover:color-body"} plain  v-ripple type="primary" key={i} onClick={() => item.fun()} >{item.text}</var-chip>
                    ))}
                </var-space>
            </var-space>
        )
    }
})

export default _404