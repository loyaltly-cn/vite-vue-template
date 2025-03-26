import even from "./even.ts";
import {defineComponent} from "vue";

export default defineComponent({
    props:{
        phone:String,
    },
    emits: ['active'],
    setup(props,{emit}){
        const bind = () => {
            if(typeof props.phone === 'string' && even.sendCode(props.phone)) emit('active')
        }
        return () => (
            <small class={"text-primary text-sm hover:cursor-pointer"} onClick={bind}>{even.msg.value}</small>
        )
    }
})