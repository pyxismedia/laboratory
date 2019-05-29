import React from 'react';
import { storiesOf } from '@storybook/react';
import { Address } from './component';

export const props = {
  street: {
    value: 'Some Street',
    datalist: [
      'Vodickova',
      'Stromovka'
    ],
    onChange() {}
  },
  streetNo: {
    value: 0,
    datalist: [3, 33, 333],
    onChange() {}
  },
  postcode: {
    value: '12345',
    datalist: ['12345', '68789'],
    onChange() {}
  },
  countries: {
    value: 'czechRepublic',
    options: [
      {
        id: 'czechRepublic',
        title: 'Czech Republic',
        value: 'CZ'
      },
      {
        id: 'germany',
        title: 'Germany',
        value: 'DE'
      }
    ],
  },
  cities: {
    value: 'prague',
    options: [
      {
        id: 'prague',
        title: 'Prague',                        
        value: 'prague'
      },
      {
        id: 'berlin',
        title: 'Berlin',
        value: 'berlin'
      }
    ]
  }
};

storiesOf('Moleculs/forms/Person', module)
  .add('default', () => <Address {...props} />)