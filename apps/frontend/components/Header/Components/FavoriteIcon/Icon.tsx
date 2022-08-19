import React  from "react";
import clsx from "clsx";
import { NavButton } from "@ecommerce/shared/ui/NavButton";

interface Props {
  favoriteItemsQuantity: number;
}

const Icon: React.FC<Props> = ({favoriteItemsQuantity}) => {
  return (
    <NavButton type="heart">
      {favoriteItemsQuantity > 0 && (
        <span
          className={clsx(
            'h-4.75 top-0 right-0 w-4.75 absolute',
            'flex items-center justify-center',
            'bg-sky-600',
            'rounded-full',
            'text-xs text-white'
          )}
          aria-hidden="true"
        >
          {favoriteItemsQuantity}
        </span>
      )}
    </NavButton>
  );
};

export default Icon;
