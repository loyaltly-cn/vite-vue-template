import {Themes} from "@varlet/ui";
import { reactive } from "vue";
import theme from "@/js/theme/index.ts"

const list = [{
    text:'自定义主题',
    theme: theme
},{
    text:'Md2亮色',
    theme:null
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