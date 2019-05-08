import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDescription } from './component';


const props = {
  title: 'Lorem',
  category: 'Dolor',
  description: 'Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  price: '$300',
  action: 'Add to basket',
  onAdd: () => {},
};

storiesOf('moleculs/ProductDescription', module)
  .add('default', () => <ProductDescription {...props} />);