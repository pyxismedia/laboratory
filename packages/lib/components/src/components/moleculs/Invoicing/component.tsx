import React, { FunctionComponent } from 'react';
import { Cities, Countries, Street, StreetNo, Postcode } from './../Address/types';
import { Input } from '../../atoms/Input';
import { Address } from '../Address/component';
import { Company } from '../Company';

interface InvoicingProps {
  forname: string;
  surname: string;
  company: string;
  vat: string;
  street: Street;
  streetNo: StreetNo;
  postcode: Postcode;
  cities: Cities;
  countries: Countries;
}

export const Invoicing: FunctionComponent<InvoicingProps> = ({ forname, cities, countries, surname, company, vat, street, streetNo, postcode }) => (
  <>

    <Company company={company} vat={vat} />
    <Address street={street} streetNo={streetNo} postcode={postcode} cities={cities} countries={countries} />
  </>
);