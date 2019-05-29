import React, { FunctionComponent } from 'react';
import { Input } from '../../../atoms/forms/Input';
import { Input as IInput } from '../../../types/form';

export interface CompanyProps {
  company: IInput;
  vat: IInput;
}

export const Company: FunctionComponent<CompanyProps> = ({ company, vat }) => (
  <fieldset className="form-row" name="company">
    <div className="col-6 mb-3">
      <Input label="Company" id="company" value={company.value} onChange={vat.onChange} />
    </div>
    <div className="col-6 mb-3">
      <Input label="VAT" id="vat" value={vat.value} onChange={vat.onChange} />
    </div>
  </fieldset>
);