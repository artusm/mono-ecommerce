import React from 'react';

import clsx from 'clsx';

const NotFoundPage: React.FC = () => {
  return (
    <section
      className={clsx('m-auto w-max py-12', 'flex flex-col gap-6 items-center')}
    >
      <h1 className="font-semibold text-3xl">404 - Page Not Found</h1>
      <small>Keep searching</small>
    </section>
  );
};

export default NotFoundPage;
