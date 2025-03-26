import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import jsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    UnoCSS(),
    components({
      resolvers: [
        VarletImportResolver(),
        // (name:string) =>{
        //   if (name.startsWith('dv-')) return {
        //     name:`dv-${name}`,
        //     from:'@kjgl77/datav-vue3'
        //   }
        // }
      ],
      dirs:['src/components'],
      extensions:['vue','jsx','tsx'],
      deep:true,
      dts: 'src/components.d.ts'
    }),
    autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })]
    })
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname,'src/'),
      '@pages': resolve(__dirname, 'src/pages')
    }
  },
  base:'./',
  server:{
    host:'0.0.0.0',
  },
  define:{
    global: 'window'
  }
})