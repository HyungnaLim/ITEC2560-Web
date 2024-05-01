import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    proxy: {
      // requests to http://localhost:5173/wyr to go to http://localhost:3000/wyr
      '/wyr': 'http://localhost:3000/'
    }
  }
})
