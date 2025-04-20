import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-loulou1994-streamvideor-9e0gy32xvbt.ws-eu118.gitpod.io"]
  }
})