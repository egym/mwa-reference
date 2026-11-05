import assert from 'node:assert/strict';
import { test } from 'node:test';
import { applyIosSafeAreaFallback } from '../src/utils/safeArea.ts';

const withSafeArea = (top, bottom, run) => {
  const previousDocument = globalThis.document;
  const previousWindow = globalThis.window;
  const values = { '--ion-safe-area-top': top, '--ion-safe-area-bottom': bottom };
  const updates = new Map();
  const root = { style: { setProperty: (name, value) => updates.set(name, value) } };

  globalThis.document = { documentElement: root };
  globalThis.window = {
    getComputedStyle: (element) => {
      assert.equal(element, root);
      return { getPropertyValue: (name) => values[name] ?? '' };
    },
  };

  try {
    run(updates);
  } finally {
    if (previousDocument === undefined) delete globalThis.document;
    else globalThis.document = previousDocument;
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
};

test('applies the documented fallback when both iOS insets are zero', () => {
  withSafeArea('0px', '0px', (updates) => {
    applyIosSafeAreaFallback('ios');
    assert.deepEqual(
      [...updates],
      [
        ['--ion-safe-area-top', 'var(--safe-area-inset-top, 40px)'],
        ['--ion-safe-area-bottom', 'var(--safe-area-inset-bottom, 20px)'],
      ]
    );
  });
});

test('preserves reported iOS insets when either inset is nonzero', () => {
  for (const [top, bottom] of [
    ['44px', '0px'],
    ['0px', '34px'],
    ['44px', '34px'],
  ]) {
    withSafeArea(top, bottom, (updates) => {
      applyIosSafeAreaFallback('ios');
      assert.equal(updates.size, 0);
    });
  }
});

test('does not apply the iOS fallback on Android or web', () => {
  for (const platform of ['android', 'web']) {
    withSafeArea('0px', '0px', (updates) => {
      applyIosSafeAreaFallback(platform);
      assert.equal(updates.size, 0);
    });
  }
});
