import {StyleProvider, StyleVars} from "@varlet/ui";
import storage from "@/js/storage";

const toggleTheme = (theme:StyleVars|null) =>{
    StyleProvider(theme);
    storage.set('theme',JSON.stringify(theme));
}

export default toggleTheme