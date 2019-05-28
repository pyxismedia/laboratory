import React from 'react'
import { storiesOf } from '@storybook/react';
import { Form } from './component';
import { props as radioStackProps } from '../../atoms/RadioStack/story';

const props = {
  delivery: radioStackProps,
}

storiesOf('Organisms/Form', module)
  .add('default', () => (
    <Form {...props} />
  ));