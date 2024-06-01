import {defineComponent, onMounted, Ref, ref} from "vue";
import {StyleProvider, StyleVars, Themes} from '@varlet/ui'
import list from "./index.ts";
import './style.css'
import storage from "@/js/storage";

const Theme = defineComponent({
    setup() {
        onMounted(() =>{
            const theme_str = storage.get('theme')
            if(!theme_str && window.matchMedia('(prefers-color-scheme: dark)').matches) handleThemeChange(Themes.dark)
            else handleThemeChange(theme_str?JSON.parse(theme_str):null)
        })

        const currentTheme:Ref<StyleVars|null> = ref(null);
        const handleThemeChange = (theme:StyleVars|null) => {
            StyleProvider(theme);
            storage.set('theme',JSON.stringify(theme));
            currentTheme.value = theme;
        };

        return () => (
            <div class="container flex flex-col flex-items-center hover:cursor-pointer">
                <div class="flex">
                    <var-icon name="palette-outline" size="30"/>
                    <var-icon name="menu-down" size="30"/>
                </div>
                <div class="hidden flex-col flex-items-center var-elevation--3  select">
                    {list.map((item,i) =>(
                        <span class={
                            `p-4 bg-opacity-50 ${item.theme === currentTheme.value ? 'text-primary bg-opacity-50' : 'hover:bg-outline'}`
                        } key={i} onClick={() => handleThemeChange(item.theme)}>{item.text}</span>
                    ))}
                </div>
            </div>
        );
    },
});

export default Theme;
