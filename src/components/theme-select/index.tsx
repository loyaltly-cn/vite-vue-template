import {defineComponent, onMounted, Ref, ref} from "vue";
import { StyleVars, Themes} from '@varlet/ui'
import list from "./index.ts";
import './style.css'
import storage from "@/js/storage";
import toggleTheme from "@/js/theme";
import theme from "@/js/theme";

const Theme = defineComponent({
    setup() {
        onMounted(() =>{
            const theme_str = storage.get('theme')
            if(!theme_str && window.matchMedia('(prefers-color-scheme: dark)').matches) handleThemeChange(Themes.dark)
            else handleThemeChange(theme_str?JSON.parse(theme_str):theme)
        })

        const currentTheme:Ref<StyleVars|null> = ref(null);
        const handleThemeChange = (_theme:StyleVars|null) => {
            toggleTheme(_theme)
            currentTheme.value = _theme;
        };

        return () => (
            <div class="containers relative w-auto flex flex-col flex-items-center hover:cursor-pointer px5">
                <div class="flex flex-items-center">
                    <var-icon name="palette-outline" size="30"/>
                    <var-icon name="menu-down" size="30"/>
                </div>
                <div class="hidden flex-col flex-items-center var-elevation--3 w-auto absolute bg-body p0 select">
                    {list.map((item,i) =>(
                        <p v-ripple class={
                            `p-4 text-sm ${item.theme === currentTheme.value ? 'text-primary' : 'hover:bg-outline color-text'}`
                        } key={i} onClick={() => handleThemeChange(item.theme)}>{item.text}</p>
                    ))}
                </div>
            </div>
        );
    },
});

export default Theme;
