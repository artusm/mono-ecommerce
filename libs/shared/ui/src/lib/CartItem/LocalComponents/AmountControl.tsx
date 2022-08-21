import React from 'react';

import clsx from 'clsx';
import FeatherIcon from 'feather-icons-react';

interface Props {
    inCartAmount: number;
    handleCartMinusClick: () => void;
    handleCartPlusClick: () => void;
}

export const AmountControl: React.FC<Props> = (props) => {
    const { inCartAmount, handleCartMinusClick, handleCartPlusClick } = props;

    return (
        <div className={clsx('h-8', 'flex')}>
            <button
                className={clsx(
                    'h-full w-8 relative group',
                    'flex items-center justify-center',
                    'border rounded-l-xl',
                    'transition',
                    'hover:(bg-black text-white border-black)',
                )}
                onClick={handleCartMinusClick}
                type="button"
                title="remove 1 item"
            >
                <div
                    className={clsx(
                        'h-1/2 w-1/2 relative',
                        'group-hover:(filter invert brightness-0)',
                    )}
                    aria-hidden="true"
                >
                    <FeatherIcon icon="minus" size={15} />
                </div>
            </button>
            <span
                className={clsx(
                    'w-8',
                    'flex items-center justify-center',
                    'border-t border-b',
                )}
            >
                {inCartAmount}
            </span>
            <button
                className={clsx(
                    'h-full w-8 relative group',
                    'flex items-center justify-center',
                    'border rounded-r-xl',
                    'transition',
                    'hover:(bg-black text-white border-black)',
                )}
                onClick={handleCartPlusClick}
                type="button"
                title="add 1 item"
            >
                <div
                    className={clsx(
                        'h-1/2 w-1/2 relative',
                        'group-hover:(filter invert brightness-0)',
                    )}
                    aria-hidden="true"
                >
                    <FeatherIcon icon="plus" size={15} />
                </div>
            </button>
        </div>
    );
};
