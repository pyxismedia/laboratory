import React, { FunctionComponent } from 'react';
import { Input } from '../../atoms/Input';

export interface PersonProps {
  forname: string;
  surname: string;
}

export const Person: FunctionComponent<PersonProps> = ({ forname, surname }) => (
  <fieldset className="form-row" name="name">
    <div className="col-6 mb-3">
      <Input label="Forname" id="forname" value={forname} />
    </div>
    <div className="col-6 mb-3">
      <Input label="Surname" id="surname" value={surname} />
    </div>
  </fieldset>
);