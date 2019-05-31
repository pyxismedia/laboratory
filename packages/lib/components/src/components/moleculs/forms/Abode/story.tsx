import React from 'react';
import { storiesOf } from '@storybook/react';
import { Abode } from './component';

const { assign } = Object;

export const deliveryProps = {
  person: {
    forname: {
      value: 'Karel',
      onChange() {}
    },
    surname: {
      value: 'Vomacka',
      onChange() {}
    },
  },
  address: {
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
  },
  onFieldChange() {},
}

export const invoicingProps = assign({}, deliveryProps, {
  company: {
    company: {
      value: 'Neco LTD',
    },
    vat: {
      value: '123456',
    },
  },
  onFieldChange() {},
});

storiesOf('Moleculs/forms/Abode', module)
  .add('invoicing', () => (
    <Abode {...invoicingProps} /> 
  ))
  .add('delivery', () => (
    <Abode {...deliveryProps} /> 
  ))