import React, { FunctionComponent } from 'react';
import { Image } from '../../atoms/Image';
import { OrderItem } from './types';

export interface ListProps {
  items: OrderItem[];
  onRemove: () => void;
}

export const List: FunctionComponent<ListProps> = ({ items, onRemove }) => (
  <table>
    {items.map((item: OrderItem) => (
      <tr>
        <td>
          <Image src={item.image} alt={item.description} />
        </td>
        <td>
          {item.description}
        </td>
        <td>
          {item.price}
        </td>
        <td>
          <a href="#" onClick={onRemove}>X</a>
        </td>
      </tr>
    ))}
  </table>
);