import clsx from 'clsx';
import React from "react";

export const ErrorPage: React.FC = () => {
  return (
    <section
      className={clsx('m-auto w-max py-12', 'flex flex-col gap-6 items-center')}
    >
      <h1 className="font-semibold text-3xl">
        500 - Server-side error occurred
      </h1>
    </section>
  );
};

export default ErrorPage;
