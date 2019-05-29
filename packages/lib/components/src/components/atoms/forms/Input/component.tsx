import React, { FunctionComponent } from 'react';
import { FormEvent } from 'react';

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
}

export interface InputProps {
  id: string;
  label: string;
  value: string | number;
  placeholder?: string;
  datalist?: (string | number)[];
  type?: InputType;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const { placeholder, label, id, datalist, value, type = InputType.TEXT, onChange: handleChange } = props;
  return <>
    <label htmlFor={id}>{label}</label>
    <input type={type} className="form-control" id={id} placeholder={placeholder} value={value} onChange={handleChange} />
    {datalist && datalist.length > 0 ? <datalist>
      {datalist.map((option: string | number, i: number) => <option key={i} value={option} />)}
    </datalist> : null}
  </>
};