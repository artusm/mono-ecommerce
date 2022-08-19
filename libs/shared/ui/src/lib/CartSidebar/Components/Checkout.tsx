import clsx from 'clsx';
import { Button } from '@ecommerce/shared/ui/button';
import { Icon } from '@ecommerce/shared/ui/icon';

interface Props {
  isUser: boolean;
  isLoading?: boolean;
  handleCheckoutClick: () => Promise<void>;
}

export const Checkout: React.FC<Props> = (props) => {
  const { handleCheckoutClick, isUser, isLoading = false } = props;

  return (
    <Button
      classes={clsx(isLoading && 'pointer-events-none')}
      tag="button"
      size="lg"
      round="sm"
      elProps={{
        type: 'button',
        onClick: handleCheckoutClick,
      }}
      disabled={!isUser}
    >
      <div className={clsx('h-12 w-full', 'flex items-center justify-between')}>
        <div
          className={clsx(
            'h-full',
            'flex items-center justify-center',
            'font-bold text-lg select-none'
          )}
        >
          Checkout
        </div>
        <div
          className={clsx('h-fit w-fit p-2', 'bg-white', 'rounded-full')}
          aria-hidden="true"
        >
          <Icon size="sm" loading={isLoading} icon="arrow-right" fill="black" />
        </div>
      </div>
    </Button>
  );
};
