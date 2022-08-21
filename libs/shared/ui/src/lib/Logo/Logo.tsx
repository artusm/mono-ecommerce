import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { useIsomorphicLayoutEffect } from '@ecommerce/shared/utils/hooks/useIsomorphicLayoutEffect';

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
    const [firstWord, secondWord] = 'cat shop'.split(' ');

    useIsomorphicLayoutEffect(() => {}, []);

    return (
        <Link href="/">
            <a
                className={clsx('-mb-4 w-max', 'flex flex-col items-center')}
                title="fake shop"
            >
                <div
                    className={clsx(
                        'flex',
                        'font-bold text-2xl leading-4 uppercase',
                        'pointer-events-none select-none',
                        'animate-jello',
                    )}
                    aria-hidden="true"
                    data-testid="first-word"
                >
                    {firstWord.split('').map((char, index) => (
                        <span
                            className={clsx('inline-block', 'animate-bounce')}
                            style={{ animationDelay: `-${index * 50}ms` }}
                            key={char}
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <div
                    className={clsx(
                        'flex',
                        'font-bold text-2xl uppercase',
                        'pointer-events-none select-none',
                        'animate-jello',
                    )}
                    aria-hidden="true"
                    data-testid="second-word"
                >
                    {secondWord.split('').map((char, index) => (
                        <span
                            className={clsx('inline-block', 'animate-bounce')}
                            style={{ animationDelay: `-${index * 50}ms` }}
                            key={char}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </a>
        </Link>
    );
};
