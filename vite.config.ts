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
      resolvers: [VarletImportResolver()],
      dirs:['src/components'],
      extensions:['vue','jsx','tsx'],
      deep:true,
      dts: 'src/components.d.ts'
    }),
    autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts'
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
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 你后端服务的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  define:{
    global: 'window',
    __BASE_URL__: JSON.stringify('/api')
  }
})