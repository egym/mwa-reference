export const applyIosSafeAreaFallback = (platform: string): void => {
  if (platform !== 'ios') return;

  const root = document.documentElement;
  const styles = window.getComputedStyle(root);
  const top = styles.getPropertyValue('--ion-safe-area-top').trim();
  const bottom = styles.getPropertyValue('--ion-safe-area-bottom').trim();

  if (top === '0px' && bottom === '0px') {
    root.style.setProperty('--ion-safe-area-top', 'var(--safe-area-inset-top, 40px)');
    root.style.setProperty('--ion-safe-area-bottom', 'var(--safe-area-inset-bottom, 20px)');
  }
};
