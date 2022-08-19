import { Button } from '@ecommerce/shared/ui/button';
import { Icon } from '@ecommerce/shared/ui/icon';

interface Props {
  handleClick: () => void;
}

export const Cart: React.FC<Props> = (props) => {
  const { handleClick } = props;

  return (
    <Button
      classes="flex items-center"
      tag="button"
      elProps={{
        onClick: handleClick,
        title: 'add to cart',
        type: 'button',
      }}
    >
      <Icon icon="cart" size="sm" />
    </Button>
  );
};
