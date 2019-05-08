import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDescription } from './component';

storiesOf('moleculs/ProductDescription', module)
  .add('default', () => <ProductDescription />);