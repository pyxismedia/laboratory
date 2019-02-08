import React, { FunctionComponent, ComponentClass, ReactNode } from 'react';
import { StyledComponent } from 'styled-components';

interface StyledComponentsModule<C extends ComponentClass<P> | FunctionComponent<P>, P extends JSX.IntrinsicAttributes & { children?: ReactNode } & { styled: StyledComponent<C, T>}, T extends object> {
  [key: string]: StyledComponent<C, T>
}

export const design = <C extends FunctionComponent<P> | ComponentClass<P>, P extends JSX.IntrinsicAttributes & { children?: ReactNode } & { styled: StyledComponent<C, T extends object ? T : {}> }, T>(designed: StyledComponentsModule<C, P, T extends object ? T : {}>) => (
  (Component: FunctionComponent<P> | ComponentClass<P>) => (
    (props: P) => <Component styled={designed} {...props} />
  )
);
