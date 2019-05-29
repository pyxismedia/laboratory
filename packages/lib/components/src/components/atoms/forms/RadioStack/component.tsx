import React, { FunctionComponent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Radio } from './types';
import cx from 'classnames';

export interface RadioStackProps {
  active: string;
  id: string;
  radios: Radio[];
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const RadioStack: FunctionComponent<RadioStackProps> = ({ radios, id, active, onChange: handleChange }) => (
  <div className="btn-group w-100" data-toggle="buttons">
    {radios.map((radio: Radio) => (
      <label className={cx('btn', 'btn-primary', { active: active === radio.id })} key={radio.id}>
        <FontAwesomeIcon icon={radio.icon} size="1x" className="mr-3" />
        <input type="radio" name={id} id={radio.id} className="sr-only" value={radio.id} checked={active === radio.id} onChange={handleChange} />
        {radio.title}
      </label>
    ))}
  </div>
);