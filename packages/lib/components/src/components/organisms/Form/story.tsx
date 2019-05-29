import React from 'react'
import { storiesOf } from '@storybook/react';
import { Form } from './component';
import { props as radioStackProps } from '../../atoms/forms/RadioStack/story';
import { invoicingProps, deliveryProps } from '../../moleculs/forms/Abode/story';
import { props as termsProps } from '../../atoms/forms/Checkbox/story';

const props = {
  distribution: radioStackProps,
  invoicing: invoicingProps,
  delivery: deliveryProps,
  terms: termsProps,
  data: termsProps,
}

storiesOf('Organisms/Form', module)
  .add('default', () => <Form {...props} />);