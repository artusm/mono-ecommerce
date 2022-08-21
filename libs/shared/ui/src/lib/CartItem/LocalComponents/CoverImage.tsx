import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@ecommerce/shared/graphql/refactored-types';
import { getImageURL } from '@ecommerce/shared/utils/url';

export interface CartItemProps {
    images: Product['images'];
    name: Product['name'];
    href: string;
}

export const CoverImage: React.FC<CartItemProps> = (props) => {
    const { href, images, name } = props;

    return (
        <Link href={href}>
            <a>
                <div
                    className={clsx(
                        'relative aspect-square w-28',
                        'object-cover bg-gray-100',
                    )}
                >
                    {images && !!images?.data?.length && (
                        <Image
                            src={getImageURL(images.data[0].attributes?.url)}
                            alt={name}
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                </div>
            </a>
        </Link>
    );
};
