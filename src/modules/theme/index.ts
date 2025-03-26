import {StyleProvider, Themes} from "@varlet/ui";
import theme from "./custom";

const toggleTheme = (type:string) =>{
    console.log(type)
    switch (type){
        case 'dark':
            StyleProvider(Themes.dark)
            break
        case 'light':
            StyleProvider(null)
            break
        case 'md3-light':
            StyleProvider(Themes.md3Light)
            break
        case 'md3-dark':
            StyleProvider(Themes.md3Dark)
            break
        case 'custom':
            StyleProvider(theme)
            break;
        default:break
    }
}

const init = () => toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches?'md3-dark':'md3-light')

export default {
    init,
    toggleTheme
}