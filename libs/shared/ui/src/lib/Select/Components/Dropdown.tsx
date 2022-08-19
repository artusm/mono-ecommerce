import clsx from 'clsx';
import type { Item, ItemMap } from '../select';

export interface Props {
  selected: Item | ItemMap | null;
  items: Item[];
  handleItemChange: (item: Item) => void;
  alignClasses?: string;
}

export const Dropdown: React.FC<Props> = (props) => {
  const { items, handleItemChange, selected, alignClasses } = props;

  return (
    <ul
      className={clsx(
        'absolute top-13 p-4 z-20 w-max',
        'flex flex-col',
        'bg-white border rounded-md',
        alignClasses || 'left-0'
      )}
    >
      {items.map((item) => (
        <li
          key={item.value}
          className={clsx('min-w-max w-full p-2 relative', 'accent-black')}
        >
          <label
            className={clsx(
              'flex gap-8 justify-between items-center',
              'cursor-pointer select-none'
            )}
          >
            {item.label}
            <input
              className="cursor-pointer"
              checked={
                selected instanceof Map
                  ? selected.has(item.value)
                  : selected?.value === item.value
              }
              onChange={() => handleItemChange(item)}
              type="checkbox"
            />
          </label>
        </li>
      ))}
    </ul>
  );
};
