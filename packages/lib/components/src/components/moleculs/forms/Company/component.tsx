import React, { FunctionComponent } from 'react';
import { Input } from '../../../atoms/forms/Input';
import { Input as IInput, OnFieldChange } from '../../../types/form';

export interface CompanyProps {
  company: IInput;
  vat: IInput;
  onFieldChange: OnFieldChange;
}

export const Company: FunctionComponent<CompanyProps> = ({ company, vat, onFieldChange: handleFieldChange }) => (
  <fieldset className="form-row" name="company">
    <div className="col-6 mb-3">
      <Input label="Company" id={company.id} value={company.value} onChange={handleFieldChange(company.id)} />
    </div>
    <div className="col-6 mb-3">
      <Input label="VAT" id={vat.id} value={vat.value} onChange={handleFieldChange(vat.id)} />
    </div>
  </fieldset>
);