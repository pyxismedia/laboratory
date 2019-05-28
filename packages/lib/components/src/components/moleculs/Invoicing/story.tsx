import React from 'react';
import { storiesOf } from '@storybook/react';
import { Invoicing } from './component';

storiesOf('Moleculs/Invoicing', module)
  .add('default', () => (
    <Invoicing /> 
  ));