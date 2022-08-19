import clsx from 'clsx';
import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          className={clsx(
            'm-auto w-max py-12',
            'flex flex-col gap-6 items-center'
          )}
        >
          <h1 className="font-semibold text-3xl">Oops, there is an error!</h1>
          <button
            className={clsx(
              'p-4',
              'border border-black rounded-full',
              'transition-colors',
              'hover:(bg-black text-white)'
            )}
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}
