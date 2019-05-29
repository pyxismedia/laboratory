import React, { FunctionComponent } from 'react';
import { Address } from '../Address/component';
import { Company } from '../Company';
import { Person } from '../Person';
import { Input, InputData, Select } from '../../../types/form';

export interface AbodeProps {
  person: {
    forname: Input,
    surname: Input
  };
  company?: {
    company: Input,
    vat: Input,
  };
  address: {
    street: InputData,
    streetNo: InputData,
    postcode: InputData,
    cities: Select,
    countries: Select,
  }
}

export const Abode: FunctionComponent<AbodeProps> = ({ person, company, address }) => (
  <>
    <Person {...person} />
    {company && <Company {...company} />}
    <Address {...address} />
  </>
);