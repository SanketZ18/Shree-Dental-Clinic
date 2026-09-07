import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  appType: 'spa',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-navigation-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.headers.accept?.includes('text/html') &&
            req.method === 'GET' &&
            !req.url.startsWith('/@') &&
            !req.url.includes('.')
          ) {
            req.url = '/index.html'
          }
          next()
        })
      }
    }
  ]
})

