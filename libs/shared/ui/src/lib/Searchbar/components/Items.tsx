import clsx from 'clsx';
import { SearchbarItem } from '@ecommerce/shared/ui/SearchbarItem';
import type { Items as TItems } from '../searchbar';

export interface Props {
  items: TItems;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Items: React.FC<Props> = (props) => {
  const { items, setFocus } = props;

  return (
    <div className="mt-20 px-10 pb-2">
      <ul className={clsx('max-h-[50vh] overflow-scroll', 'flex flex-col')}>
        {items.map(
          (item) =>
            item.attributes && (
              <SearchbarItem
                key={item.id}
                item={item.attributes}
                handleClick={() => setFocus(false)}
              />
            )
        )}
      </ul>
    </div>
  );
};
