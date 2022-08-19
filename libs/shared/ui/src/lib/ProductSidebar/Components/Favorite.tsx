import { Button } from '@ecommerce/shared/ui/button';
import { Icon } from '@ecommerce/shared/ui/icon';

interface Props {
  handleFavoriteClick: () => void;
  isFavorite: boolean;
}

export const Favorite: React.FC<Props> = (props) => {
  const { isFavorite, handleFavoriteClick } = props;

  return (
    <Button
      classes="flex justify-center items-center"
      tag="button"
      size="lg"
      type="transparent-border"
      elProps={{
        onClick: handleFavoriteClick,
        title: 'add to favorite',
        type: 'button',
      }}
    >
      <Icon
        icon="heart"
        fill={isFavorite ? 'red' : 'none'}
        size="sm"
      />
    </Button>
  );
};
