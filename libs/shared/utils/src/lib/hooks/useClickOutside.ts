import { useEffect, RefObject } from 'react';
import { on, off } from '../misc';

type Event = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref?.current;
      if (!element || element.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    on(document, 'mousedown', listener);
    on(document, 'mousedown', listener);

    return () => {
        off(document, 'mousedown', listener);
        off(document, 'touchstart', listener);
    };
  }, [ref, handler]);
};