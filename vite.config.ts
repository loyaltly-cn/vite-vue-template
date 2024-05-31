import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
import { defineConfig } from 'vite'
import jsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'


export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    components({
      resolvers: [VarletImportResolver()]
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
  }
})