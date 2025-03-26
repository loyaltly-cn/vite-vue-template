import App from './App.vue'
import Varlet from '@varlet/ui'
import router from "@/modules/router";
import { createApp } from 'vue'
import {createPinia} from "pinia";
import init from "@/modules/init";
import '@varlet/ui/es/styles/elevation.css'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'
import '@/css/transition.css'
import '@/css/adaptive.css'
import './css/global.css'
import 'virtual:uno.css'


createApp(App)
    .use(Varlet)
    .use(createPinia())
    .use(router)
    .mount('#app')
    .$nextTick().then(_ => init())
