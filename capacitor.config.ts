import { CapacitorConfig } from '@capacitor/cli';

console.log(' ------ capacitor.config.ts');

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'egym-webview-reference',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    hostname: "my.testbackend.com",
    androidScheme: "https",
  }
};

export default config;
