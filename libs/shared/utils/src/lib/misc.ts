/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export const isBrowser = typeof window !== 'undefined';

export const on = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void => {
  obj?.addEventListener(
    ...(args as Parameters<HTMLElement['addEventListener']>)
  );
};

export const off = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T['removeEventListener']>
    | [string, Function | null, ...any]
): void => {
  obj?.removeEventListener(
    ...(args as Parameters<HTMLElement['removeEventListener']>)
  );
};
