import React, { FunctionComponent, ReactElement } from 'react';
import { ListAbstract } from '../../moleculs/List/types';
import { List } from '../../moleculs/List';
import { ListProps } from '../../moleculs/List/component';
import { Guard } from '../../atoms/Guard';

type ListComponent = ReactElement<ListProps>
type ChildrenComponents = ListComponent;

export interface OrderProps {
  children: ChildrenComponents;
  bare: string;
}

export const Order: FunctionComponent<OrderProps> = ({ children, bare }) => (
  <div>
    {
      children.props.items.length > 0 ?
        <Guard<ListAbstract, ListComponent>
          Abstract={ListAbstract}
          Component={List}
        >
          {children}
        </Guard>
        : bare
    }
  </div>
);