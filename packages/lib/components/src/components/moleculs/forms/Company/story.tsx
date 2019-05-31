import React from 'react';
import { storiesOf } from '@storybook/react';
import { Company } from './component';

const props = {
  company: {
    value: 'Neco LTD',
  },
  vat: {
    value: '123456',
  },
  onFieldChange() {}
};

storiesOf('Moleculs/forms/Company', module)
  .add('default', () => <Company {...props} />);