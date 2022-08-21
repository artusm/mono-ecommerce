import React, { ReactNode, useMemo } from 'react';

import { Button } from '@ecommerce/shared/ui/Button';
import { ICONS, Icon } from '@ecommerce/shared/ui/Icon';

type TypeProp<T extends keyof typeof ICONS> = keyof Pick<typeof ICONS, T>;

export type NavButtonProps = (
  | {
      type: TypeProp<'user'>;
      loading: boolean;
    }
  | {
      type: TypeProp<'cartBlack' | 'heart'>;
      loading?: boolean;
    }
) & { children?: ReactNode };

export function getHref(type: NavButtonProps['type']): string {
  switch (type) {
    case 'cartBlack':
      return 'cart';
    case 'heart':
      return 'favorite';
    default:
      return type;
  }
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { type, loading, children } = props;

  const href = useMemo(() => getHref(type), [type]);

  return (
    <Button
      tag="a"
      type="transparent"
      elProps={{
        href: `/${href}`,
        title: `${href} page`,
      }}
      disabled={loading}
    >
      <Icon icon={type} loading={loading} />
      {children}
    </Button>
  );
};
