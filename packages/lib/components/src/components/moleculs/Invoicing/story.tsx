import React from 'react';
import { storiesOf } from '@storybook/react';
import { Invoicing } from './component';

const props = {
  forname: 'Karel',
  surname: 'Vomacka',
  company: 'Neco LTD',
  vat: '123456',
  street: 'Some Street',
  streetNo: 5,
  postcode: '12345',
  countries: [
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
  cities: [
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

storiesOf('Moleculs/Invoicing', module)
  .add('default', () => (
    <Invoicing {...props} /> 
  ));