import * as React from 'react'

export const tap = <T extends {}>(callback: Function) => (Wrapped: React.ComponentClass) => (props: T) => {
  callback(props);
  return <Wrapped {...props} />;
};
