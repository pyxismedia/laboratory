import React, { FunctionComponent, FormEvent } from 'react';

export interface CheckboxProps {
  checked: boolean;
  id: string;
  title: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ checked, id, title, onChange: handleChange }) => (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" checked={checked} id={id} onChange={handleChange} name={id} />
    <label className="form-check-label" htmlFor={id}>{title}</label>
  </div>
);