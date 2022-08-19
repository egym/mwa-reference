import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'egym-webview-reference',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    hostname: "my.testbackend.com",
    androidScheme: "https",
  },
};

export default config;
