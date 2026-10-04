import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ['**/*.jpe'],
  // GitHub Pages project site: https://<user>.github.io/Apex_Fantasy/
  base: command === 'build' ? '/Apex_Fantasy/' : '/',
}));
