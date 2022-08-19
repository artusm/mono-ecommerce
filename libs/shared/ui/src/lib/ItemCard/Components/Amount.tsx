import clsx from 'clsx';
import { Button } from '@ecommerce/shared/ui/button';

interface Props {
  handleClick: () => void;
  inCartAmount: number;
}

export const Amount: React.FC<Props> = (props) => {
  const { handleClick, inCartAmount } = props;

  return (
    <Button
      classes={clsx(
        'absolute -top-1.25 -right-1.25 w-5.5 h-5.5',
        'bg-black rounded-full',
        'flex items-center justify-center',
        'select-none text-white text-xs',
        'active:(bg-red-500)',
        'focus:(bg-red-500)',
        'hover:(bg-red-500)'
      )}
      basic
      tag="button"
      elProps={{
        onClick: handleClick,
        type: 'button',
      }}
    >
      {inCartAmount}
    </Button>
  );
};
