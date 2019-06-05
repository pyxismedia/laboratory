import React, { FunctionComponent } from 'react';
import { Address } from '../Address/component';
import { Company } from '../Company';
import { Person } from '../Person';
import { OnFieldChange } from '../../../types/form';
import { IAbode } from './types';

export interface AbodeProps extends IAbode {
  onFieldChange: OnFieldChange
}

export const Abode: FunctionComponent<AbodeProps> = ({ forname, surname, company, vat, street, streetNo, postcode, cities, countries, onFieldChange: handleFieldChange }) => (
  <>
    <Person forname={forname} surname={surname} onFieldChange={handleFieldChange} />
    {company && <Company company={company} vat={vat} onFieldChange={handleFieldChange} />}
    <Address street={street} streetNo={streetNo} postcode={postcode} cities={cities} countries={countries} onFieldChange={handleFieldChange} />
  </>
);