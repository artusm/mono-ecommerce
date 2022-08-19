import { ReactNode, useMemo } from 'react';
import { Button } from '../button';
import { Icon, ICONS } from '../icon';

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
