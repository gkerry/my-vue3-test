import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
  },
  build: {
    outDir: 'dist',
  },
  define:{
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
  }
});