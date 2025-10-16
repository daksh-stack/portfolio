import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/portfolio/tree/main/daksh-portfolio', // Ensures correct path resolution
  build: {
    outDir: 'dist' // Specifies the output directory
  },
  server: {
    historyApiFallback: true // Supports client-side routing during development
  }
});
