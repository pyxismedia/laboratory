import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDetail } from './components';
import { props as productDescriptionProps } from '../../moleculs/ProductDescription/mocks';
import { Navigation } from '../../moleculs/Navigation';
import { ReactComponent as Brand } from '../../moleculs/Navigation/svg.svg';

storiesOf('Templates/ProductDetail', module).add('default', () => (
  <ProductDetail
    {...productDescriptionProps}
    image="http://lorempixel.com/640/480/fashion"
  >
    <Navigation
      items={[{ title: 'Get to know Animaux!', link: 'http://' }]}
      Brand={Brand}
    />
  </ProductDetail>
));
