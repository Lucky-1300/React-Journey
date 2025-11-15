import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // add this import

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // ensure tailwindcss() is referenced after import
})
