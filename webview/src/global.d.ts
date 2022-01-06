export {};
declare global {
  interface Window {
    // portals context
    portalInitialContext: {
      value: { startingRoute: string; gymName?: string },
    }
  }
}
