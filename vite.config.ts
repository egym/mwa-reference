import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    svgrPlugin(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.json',
        buildMode: true,
      },
      eslint: {
        lintCommand: 'eslint --ext js,jsx,ts,tsx src',
        useFlatConfig: false,
      },
      overlay: false,
      terminal: true,
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@capacitor/core')) return 'capacitorCore';
          if (id.includes('@egym/mwa-logger')) return 'egym';
          if (id.includes('@ionic/portals')) return 'ionicPortals';
          if (id.includes('@ionic/react-router')) return 'ionicRouter';
          if (id.includes('@ionic/react')) return 'ionicReact';
        },
      },
    },
  },
  server: {
    open: false,
    proxy: {
      '^/np/.*': {
        target: 'https://egymqa.cgn-3.qa.netpulse.com',
        changeOrigin: true,
      },
    },
  },
});
