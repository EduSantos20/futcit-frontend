import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se VITE_API_URL estiver definido (ex: ngrok do backend), usa ele.
// Caso contrário, usa localhost:8080 normalmente.
// || 'https://futcit-backend.onrender.com'
const API_URL = process.env.VITE_API_URL || 'http://localhost:8080'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acesso via IP local
    port: 5173,
    allowedHosts: ['dana-exploitative-biconically.ngrok-free.dev'], // Permite acesso via localhost e IP local
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        secure: false, // necessário para https do ngrok sem certificado válido
      },
      '/uploads': {
        target: API_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  }
})