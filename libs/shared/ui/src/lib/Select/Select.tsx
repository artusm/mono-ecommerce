import { useState, useRef } from 'react';
import { useClickOutside } from '@ecommerce/shared/utils/hooks/useClickOutside';
import { Button } from './Components/Button';
import type { Props as DropdownProps } from './Components/Dropdown';
import dynamic from 'next/dynamic';

export type Item = { label: string; value: string };
export type ItemMap = Map<Item['value'], string>;
type SelectedState<T extends boolean> = T extends true ? ItemMap : Item;

/* eslint-disable-next-line */
export interface SelectProps {
  items: Item[];
  onChange: (item?: string | string[]) => void;
  initial?: string | string[];
  placeholder?: string;
  multiple?: boolean;
  alignClasses?: string;
}

export function createInitial(
  initial: SelectProps['initial'],
  items: SelectProps['items'],
  multiple: SelectProps['multiple']
) {
  if (!initial) return multiple ? new Map() : null;

  if (initial instanceof Array || multiple) {
    const map = items.reduce<[string, string][]>((prev, curr) => {
      if (initial.includes(curr.value)) {
        return [...prev, [curr.value, curr.label]];
      }

      return prev;
    }, []);

    return new Map(map);
  }

  return items.find(({ value }) => value === initial) || null;
}

function createSelected(prev: Item | ItemMap | null, item: Item) {
  const isMap = prev instanceof Map;

  if (isMap) {
    const copy = new Map(prev);
    const existInSelected = copy.has(item.value);

    if (existInSelected) {
      copy.delete(item.value);
    } else {
      copy.set(item.value, item.label);
    }

    return copy;
  }

  if (prev) {
    const same = prev.value === item.value;
    if (same) return null;
  }

  return item;
}

const LazyDropdown = dynamic<DropdownProps>(() =>
  import('./Components/Dropdown').then(({ Dropdown }) => Dropdown)
);

export const Select: React.FC<SelectProps> = (props) => {
  const {
    items,
    placeholder = 'Select',
    multiple = false,
    onChange,
    initial,
    alignClasses,
  } = props;

  const [selected, setSelected] = useState<SelectedState<
    typeof multiple
  > | null>(createInitial(initial, items, multiple));

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setOpen(false));

  const handleItemChange = (item: Item) => {
    setSelected((prev) => {
      const newItem = createSelected(prev, item);

      onChange(newItem instanceof Map ? [...newItem.keys()] : newItem?.value);
      return newItem;
    });
  };

  return (
    <div className="rotate relative" ref={containerRef}>
      <Button
        open={open}
        placeholder={placeholder}
        setOpen={setOpen}
        selected={selected}
      />
      {open && (
        <LazyDropdown
          handleItemChange={handleItemChange}
          items={items}
          selected={selected}
          alignClasses={alignClasses}
        />
      )}
    </div>
  );
};
