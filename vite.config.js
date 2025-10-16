import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use root path for Vercel deployment
  build: {
    outDir: 'dist' // Specifies the output directory
  },
  server: {
    historyApiFallback: true // Supports client-side routing during development
  }
});
