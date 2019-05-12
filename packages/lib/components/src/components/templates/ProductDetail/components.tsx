import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { ProductDescription } from '../../moleculs/ProductDescription';
import { ImageVariants } from '../../atoms/Image/types';
import { Image } from '../../atoms/Image';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductDescriptionProps } from '../../moleculs/ProductDescription/component';

console.log(styles);

export interface ProductDetailsProps extends ProductDescriptionProps {
  image: string;
}

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
    <div className={styles['product-detail__wrapper']}>
      <Container fluid className={styles['product-detail__container-stretched']}>
        <Row className={styles['product-detail__row']}>
          <Col lg="8" sm="12" className={styles['product-detail__image-column']}>
            <div className={styles['product-detail__image-wrapper']}>
              <Image src={image} variant={ImageVariants.BACKGROUND} />
            </div>
          </Col>
          <Col lg="4" sm="12" className={styles['product-detail__description-column']}>
            <ProductDescription {...productDescriptionProps} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
