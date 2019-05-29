import React, { FunctionComponent } from 'react';

export class Option {
  constructor(
    public id: string,
    public value: string,
    public title: string,
  ) {}
}

export interface SelectProps {
  id: string;
  label: string;
  value: string | number;
  options: Option[];
}

export const Select: FunctionComponent<SelectProps> = ({ label, id, options, value }) => (
  <>
    <label htmlFor="city">{label}</label>
    <select value={value} className="custom-select" id={id}>
      {options.map((option: Option) => <option key={option.id} value={option.value}>{option.title}</option>)}
    </select>
  </>
);