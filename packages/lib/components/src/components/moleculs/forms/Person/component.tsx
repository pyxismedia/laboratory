import React, { FunctionComponent} from 'react';
import { Input } from '../../../atoms/forms/Input';
import { OnFieldChange } from '../../../types/form';
import { IInput } from '../../../atoms/forms/Input/component';

export interface PersonProps {
  forname: IInput;
  surname: IInput;
  onFieldChange: OnFieldChange;
}

export const Person: FunctionComponent<PersonProps> = ({ forname, surname, onFieldChange: handleFieldChange }) => (
  <fieldset className="form-row" name="name">
    <div className="col-6 mb-3">
      <Input label="Forname" id={forname.id} value={forname.value} onChange={handleFieldChange(forname.id)} />
    </div>
    <div className="col-6 mb-3">
      <Input label="Surname" id={surname.id} value={surname.value} onChange={handleFieldChange(surname.id)} />
    </div>
</fieldset>
);