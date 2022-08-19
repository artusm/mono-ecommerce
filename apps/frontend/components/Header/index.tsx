import React from "react";
import { NavButton } from '@ecommerce/shared/ui/NavButton';
import { Logo } from '@ecommerce/shared/ui/Logo';

import CartIcon from './Components/CardIcon';
import FavoriteIcon from './Components/FavoriteIcon';
import {NavSearch} from './Components/Search';

import {UserIcon} from './Components/UserIcon';
import clsx from "clsx";

const index = () => {
  return (
    <header
      className={clsx(
        'mx-auto max-w-screen-xl my-4 w-full p-4',
        'flex flex-wrap gap-4 justify-between items-center'
      )}
    >
      <Logo />
      <div className={clsx('order-3 w-full', 'sm:(order-none w-2/5)')}>
        <NavSearch />
      </div>
      <nav>
        <ul className="flex gap-2 items-center">
          <li>
            <UserIcon />
          </li>
          <li>
            <FavoriteIcon />
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default index;
