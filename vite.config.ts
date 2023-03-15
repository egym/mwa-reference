import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.json',
        buildMode: true,
      },
      eslint: {
        lintCommand: 'eslint --ext js,jsx,ts,tsx src',
      },
      overlay: false,
      terminal: true,
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          capacitorCore: ['@capacitor/core'],
          egym: ['@egym/mwa-logger'],
          ionicPortals: ['@ionic/portals'],
          ionicReact: ['@ionic/react'],
          ionicRouter: ['@ionic/react-router'],
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
