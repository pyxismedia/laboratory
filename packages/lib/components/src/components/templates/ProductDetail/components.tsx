import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import '../../../themes/animaux.theme.scss';
import { ProductDescription } from '../../moleculs/ProductDescription';
import { ImageVariants } from '../../atoms/Image/types';
import { Image } from '../../atoms/Image';
import { ProductDescriptionProps } from '../../moleculs/ProductDescription/component';

export interface ProductDetailsProps extends ProductDescriptionProps {
  image: string;
}

// This has to be loaded some globaly
document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);

export const ProductDetail: FunctionComponent<ProductDetailsProps> = ({
  title,
  category,
  description,
  price,
  action,
  onAdd,
  image
}) => {
  const productDescriptionProps = {
    title,
    category,
    description,
    price,
    action,
    onAdd
  };
  return (
    <div className={styles.detail}>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-end align-items-sm-center">
          <div className={`${styles['image-column']} col-lg-7 col-sm-12`} >
            <div className={styles['image-wrapper']}>
              <Image src={image} variant={ImageVariants.BACKGROUND} />
            </div>
          </div>
          <div className={`${styles['description-column']} col-lg-5 col-sm-12`}>
            <ProductDescription {...productDescriptionProps} />
          </div>
        </div>
      </div>
    </div>
  );
};
