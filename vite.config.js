import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/Publicaciones': {
        target: 'https://668ef8f5bf9912d4c9304864.mockapi.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
