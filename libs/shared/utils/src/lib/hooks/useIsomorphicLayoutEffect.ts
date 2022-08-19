import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../misc';

export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;
