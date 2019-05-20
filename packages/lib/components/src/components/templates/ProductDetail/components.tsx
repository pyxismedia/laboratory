import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import '../../../themes/animaux.theme.scss';
import { ProductDescription } from '../../moleculs/ProductDescription';
import { ImageVariants } from '../../atoms/Image/types';
import { Image } from '../../atoms/Image';
import { ProductDescriptionProps } from '../../moleculs/ProductDescription/component';
import { NavigationProps, Navigation } from '../../moleculs/Navigation/component';
import { NavigationAbstract } from '../../moleculs/Navigation/types';
import { Guard } from '../../atoms/Guard/component';

type NavigationComponent = FunctionComponent<NavigationProps>
type ChildrenComponents = NavigationComponent;

export interface ProductDetailsProps extends ProductDescriptionProps {
  image: string;
  children: ChildrenComponents;
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
  image,
  children
}) => {
  const productDescriptionProps = {
    title,
    category,
    description,
    price,
    action,
    onAdd
  };

  const navigationProps = {
    className: 'position-absolute',
    style: { left: 0, right: 0 },
  };

  return (
    <div className={styles.detail}>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-end align-items-sm-center">
          <div className={`${styles['image-column']} col-lg-7 col-sm-12`} >
            <div className="w-100 position-relative">
              <Guard<NavigationAbstract, NavigationComponent>
                Abstract={NavigationAbstract}
                Component={Navigation}
                props={navigationProps}
              >
                {children}
              </Guard>
            </div>
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
