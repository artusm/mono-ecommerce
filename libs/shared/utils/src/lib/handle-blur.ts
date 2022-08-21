import type * as React from 'react';

export const handleBlur =
    (e: React.FocusEvent<HTMLElement, Element>) => (callback: () => void) => {
        const currentTarget = e.currentTarget;

        // Give browser time to focus the next element
        requestAnimationFrame(() => {
            // Check if the new focused element is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                callback();
            }
        });
    };
