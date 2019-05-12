import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDetail } from './components';
import { props as productDescriptionProps } from '../../moleculs/ProductDescription/mocks';

storiesOf('Templates/ProductDetail', module).add('default', () => (
  <ProductDetail
    {...productDescriptionProps}
    image="http://lorempixel.com/640/480/fashion"
  />
));
