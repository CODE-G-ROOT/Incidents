import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import data from './auto_setting.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: data.SERVER_FRONT.port,
    host: data.SERVER_FRONT.host
  }
})
