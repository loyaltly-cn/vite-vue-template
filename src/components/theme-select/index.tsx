import {defineComponent} from "vue";
import list from "./index.ts";
import './style.css'
import theme from "@/js/theme";
import pinia from "@/js/pinia";

const Theme = defineComponent({
    setup() {
        return () => (
            <div class="containers relative w-auto flex flex-col flex-items-center hover:cursor-pointer px5">
                <div class="flex flex-items-center">
                    <var-icon name="palette-outline" size="30"/>
                    <var-icon name="menu-down" size="30"/>
                </div>
                <div class="hidden flex-col flex-items-center var-elevation--3 w-auto absolute bg-body p0 select">
                    {list.map((item,i) =>(
                        <p v-ripple class={
                            `p-4 text-sm m0 ${item.theme === pinia.theme().value ? 'text-primary' : 'hover:bg-outline color-text'}`
                        } key={i} onClick={() => theme.toggleTheme(item.theme)}>{item.text}</p>
                    ))}
                </div>
            </div>
        );
    },
});

export default Theme;
