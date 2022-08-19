import clsx from 'clsx';
import { Icon } from '@ecommerce/shared/ui/icon';

interface Props {
  input: string;
  loading: boolean;
  handleClear: () => void;
}

export const Control: React.FC<Props> = (props) => {
  const { input, loading, handleClear } = props;

  return (
    <div
      className={clsx(
        'right-4 absolute h-full',
        'flex items-center gap-2',
        'transition-opacity',
        input ? 'opacity-100' : 'opacity-0 pointer-events-none invisible'
      )}
      data-testid="search-controls"
    >
      <Icon loading={true} classes={clsx(!loading && 'hidden')} />
      <button
        className={clsx(
          'h-4 w-4 relative',
          'flex items-center',
          loading && 'hidden'
        )}
        type="button"
        title="clear input"
        onClick={handleClear}
      >
        <Icon icon="x" />
      </button>
      <div className={clsx('h-1/2 w-px', 'bg-gray-300')} aria-hidden="true" />
      <button
        className={clsx(
          'h-4 w-4 relative',
          'flex items-center',
          'transition-colors'
        )}
        type="submit"
        title="submit search"
      >
        <Icon icon="search" loading={loading} />
      </button>
    </div>
  );
};
