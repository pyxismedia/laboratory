import React, { FunctionComponent } from 'react';
import { Button } from '../../atoms/Button';
import { Sizes } from '../../types/sizes';


export interface ButtonProps {
  title: string;
  category: string;
  description: string;
  price: string;
  action: string;
  onAdd: ((event: MouseEvent) => void);
}

export const ProductDescription: FunctionComponent<ButtonProps> = ({ title, category, description, price, action, onAdd }) => (
  <div>
    <h2>{title}</h2>
    <div>{category}</div>
    <p>{description}</p>
    <div>{price}</div>
    <Button size={Sizes.LG} onClick={onAdd}>{action}</Button>
  </div>
);
