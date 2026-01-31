import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/artha-tutorials/', // Add the exact repository name here with slashes
});
