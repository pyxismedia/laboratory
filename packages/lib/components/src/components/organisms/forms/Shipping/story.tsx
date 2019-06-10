import React from 'react'
import { storiesOf } from '@storybook/react';
import { Shipping } from './component';
import { Shipping as ShippingContainer } from './container';
import { props as radioStackProps } from '../../../atoms/forms/RadioStack/story';
import { invoicingProps, deliveryProps } from '../../../moleculs/forms/Abode/story';
import { props as termsProps } from '../../../atoms/forms/Checkbox/story';

const props = {
  distribution: radioStackProps,
  invoicing: invoicingProps,
  delivery: deliveryProps,
  terms: termsProps,
  data: termsProps,
  onFieldChange: () => () => {},
  onGroupChange: () => () => () => {},
  onSubmit() {}
}

storiesOf('Organisms/forms/Shipping', module)
  .add('default', () => <Shipping {...props} />)
  .add('state-full', () => <ShippingContainer />);