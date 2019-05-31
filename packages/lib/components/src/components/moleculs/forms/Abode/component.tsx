import React, { FunctionComponent } from 'react';
import { Address } from '../Address/component';
import { Company } from '../Company';
import { Person } from '../Person';
import { OnFieldChange } from '../../../types/form';
import { IAbode } from './types';

export interface AbodeProps extends IAbode {
  onFieldChange: OnFieldChange
}

export const Abode: FunctionComponent<AbodeProps> = ({ person, company, address, onFieldChange: handleFieldChange }) => (
  <>
    <Person {...person} onFieldChange={handleFieldChange} />
    {company && <Company {...company} onFieldChange={handleFieldChange} />}
    <Address {...address} onFieldChange={handleFieldChange} />
  </>
);