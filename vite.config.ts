import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  css: {
    modules: {
      localsConvention: 'dashesOnly',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
