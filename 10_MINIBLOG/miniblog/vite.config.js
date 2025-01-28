import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
    'process.cwd': '() => "/"', // Substituto para evitar erro de execução
  },
  resolve: {
    alias: {
      path: 'path-browserify', // Redireciona o módulo path
    },
  },
  plugins: [react()],
})
