import React, { FunctionComponent } from 'react';
import { Button, Variants } from '../../atoms/Button';
import { Sizes } from '../../types/sizes';
import styles from './styles.module.scss';
import '../../bootstrap.scss';


export interface ButtonProps {
  title: string;
  category: string;
  description: string;
  price: string;
  action: string;
  onAdd: ((event: MouseEvent) => void);
}

export const ProductDescription: FunctionComponent<ButtonProps> = ({ title, category, description, price, action, onAdd }) => (
  <div className={`${styles.wrapper} d-flex align-items-center justify-content-center`}>
    <div className={`${styles.container} d-flex flex-column`}>
      <h2 className="h1">{title}</h2>
      <p className="text-uppercase">{category}</p>
      <p className="font-weight-light">{description}</p>
      <div className="h3 mb-4">{price}</div>
      <Button variant={Variants.OUTLINE_DARK} size={Sizes.LG} onClick={onAdd}>{action}</Button>
    </div>
  </div>
);
