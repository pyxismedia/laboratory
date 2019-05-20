import React from 'react';
import { storiesOf } from '@storybook/react';
import { Order } from './component';
import { List } from '../../moleculs/List';
import { props as listProps } from '../../moleculs/List/story';

const listEmptyProps = Object.assign({}, listProps);
listEmptyProps.items = [];

storiesOf('organisms/Order', module)
  .add('default', () => (
    <Order bare="There is now product in the checkout.">
      <List {...listProps} />
    </Order>
  ))
  .add('empty', () => (
    <Order bare="There is now product in the checkout.">
      <List {...listEmptyProps} />
    </Order>
  ));