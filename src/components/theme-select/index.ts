import {StyleVars, Themes} from "@varlet/ui";
import { reactive } from "vue";
import theme from "@/js/theme/theme.ts"

const list:{text:string,theme:StyleVars}[] = [{
    text:'自定义',
    theme:theme
},{
    text:'Md2暗色',
    theme:Themes.dark
},{
    text:'Md3亮色',
    theme:Themes.md3Light
},{
    text:'Md3暗色',
    theme:Themes.md3Dark
}]

export default reactive(list)