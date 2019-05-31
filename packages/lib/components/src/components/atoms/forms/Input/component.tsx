import React, { FunctionComponent } from 'react';
import { OnChange } from '../../../types/form';

export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
}

export interface IInput {
  id: string;
  label: string;
  value: string | number;
  placeholder?: string;
  type?: InputTypeEnum;
}

export interface IInputData extends IInput {
  datalist?: (string | number)[];
}

export interface InputProps extends IInputData {
  onChange: OnChange;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const { placeholder, label, id, datalist, value, type = InputTypeEnum.TEXT, onChange: handleChange } = props;
  return <>
    <label htmlFor={id}>{label}</label>
    <input type={type} className="form-control" id={id} placeholder={placeholder} value={value} onChange={handleChange} />
    {datalist && datalist.length > 0 ? <datalist>
      {datalist.map((option: string | number, i: number) => <option key={i} value={option} />)}
    </datalist> : null}
  </>
};