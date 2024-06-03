import {StyleProvider, StyleVars,Themes} from "@varlet/ui";
import storage from "@/js/storage";
import pinia from "@/js/pinia";
import theme from "./theme.ts";

const toggleTheme = (theme:StyleVars|null) =>{
    StyleProvider(theme);
    pinia.theme().value = theme;
    storage.set('theme',JSON.stringify(theme));
}

const init = () =>{
    const theme_str = storage.get('theme')
    if(!theme_str && window.matchMedia('(prefers-color-scheme: dark)').matches) toggleTheme(Themes.dark)
    else toggleTheme(theme_str?JSON.parse(theme_str):theme)
}

export default {
    init,
    toggleTheme
}