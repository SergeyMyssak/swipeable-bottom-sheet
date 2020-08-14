import React from 'react';

const withWindow = <T extends {}>(
  Component: React.ComponentType<T>,
): ((props: T) => JSX.Element | null) => (props: T): JSX.Element | null => {
  if (typeof window === 'undefined') return null;

  return <Component {...props} />;
};

export default withWindow;
