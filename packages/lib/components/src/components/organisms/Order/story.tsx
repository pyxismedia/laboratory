import React from 'react';
import { storiesOf } from '@storybook/react';
import { Order } from './component';
import { List } from '../../moleculs/List';
import { props as listProps } from '../../moleculs/List/story';
import { props as stepsProps } from '../../moleculs/Steps/story';
import { Steps } from '../../moleculs/Steps';
import { action } from '@storybook/addon-actions';

const listEmptyProps = Object.assign({}, listProps);
listEmptyProps.items = [];

storiesOf('Organisms/Order', module)
  .add('default', () => (
    <Order bare="There is no product in the checkout.">
      <List {...listProps} onRemove={action('Clicked on remove!')} />
      <Steps {...stepsProps} />
    </Order>
  ))
  .add('empty', () => (
    <Order bare="There is no product in the checkout.">
      <List {...listEmptyProps} />
      <Steps {...stepsProps} />
    </Order>
  ));
