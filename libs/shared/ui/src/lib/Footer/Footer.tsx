import React from 'react';

import clsx from 'clsx';

export const Footer: React.FC = () => {
    return (
        <footer className={clsx('mt-20 w-full', 'bg-gray-100')}>
            <div
                className={clsx(
                    'mx-auto max-w-screen-xl py-8 px-4',
                    'flex gap-8 items-center justify-between',
                )}
            >
                <ul
                    className={clsx(
                        'flex gap-4',
                        'text-xs not-italic',
                        'opacity-65',
                    )}
                >
                    <li>
                        <a
                            className="hover:underline"
                            rel="noreferrer noopener"
                            target="_blank"
                            href="https://github.com/artusm/mono-ecommerce"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:underline"
                            rel="author noreferrer noopener"
                            target="_blank"
                            href="https://github.com/artusm"
                        >
                            artusm
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
