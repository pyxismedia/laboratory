import React, { FunctionComponent } from 'react';
import { OnChange } from '../../../types/form';

export interface IOption {
  id: string;
  title: string;
  value: string;
}

export interface ISelect {
  id: string;
  label: string;
  value: string | number;
  options: IOption[];
}

export interface SelectProps extends ISelect {
  onChange: OnChange;
}

export const Select: FunctionComponent<SelectProps> = ({ label, id, options, value }) => (
  <>
    <label htmlFor="city">{label}</label>
    <select value={value} className="custom-select" id={id}>
      {options.map((option: IOption) => <option key={option.id} value={option.value}>{option.title}</option>)}
    </select>
  </>
);