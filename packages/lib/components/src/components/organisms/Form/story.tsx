import React from 'react'
import { storiesOf } from '@storybook/react';
import { Form } from './component';

storiesOf('Organisms/Form', module)
  .add('default', () => (
    <Form />
  ));