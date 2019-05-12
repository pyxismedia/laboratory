import React, { FunctionComponent } from 'react';
import { Button, Variants } from '../../atoms/Button';
import styles from './styles.module.scss';
import '../../../themes/animaux.theme.scss';

export interface ProductDescriptionProps {
  title: string;
  category: string;
  description: string;
  price: string;
  action: string;
  onAdd: (event: MouseEvent) => void;
}

export const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({
  title,
  category,
  description,
  price,
  action,
  onAdd
}) => (
  <div
    className={`${
      styles.wrapper
    } d-flex align-items-center justify-content-center`}
  >
    <div className={`${styles.container} d-flex flex-column`}>
      <h2 className={styles.headline}>{title}</h2>
      <p className={styles.category}>{category}</p>
      <p className={`${styles.description} font-weight-light`}>{description}</p>
      <div className={styles.action}>
        <div className={styles['product-description__price']}>{price}</div>
        <Button variant={Variants.OUTLINE_DARK} onClick={onAdd} className={styles['product-description__action']}>
          {action}
        </Button>
      </div>
    </div>
  </div>
);
