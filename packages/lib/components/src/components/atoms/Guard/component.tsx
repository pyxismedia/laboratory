import React, { Children, cloneElement } from 'react';

interface Type<T> extends Function {
  new (...args: any[]): T
}

type Constructor<T> = Function & { prototype: T }

export interface GuardProps<A, C> {
  Abstract: Constructor<A>;
  Component: Constructor<C>;
  props?: { [key: string]: any };
  children: C;
}

export class Guard<A extends React.Component, C extends any> extends React.Component<GuardProps<A, C>> {
  render() {
    const { Abstract, Component, children, props } = this.props;
    return Children.map<JSX.Element | undefined, C>(children, (child) => {
      if (Abstract.isPrototypeOf(child.type) || child.type === Component) {
        return cloneElement((child as any), props);
      }
    });
  }
};