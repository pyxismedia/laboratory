import React, { FunctionComponent} from 'react';
import { Input } from '../../../atoms/forms/Input';
import { Input as IInput } from '../../../types/form';

export interface PersonProps {
  forname: IInput;
  surname: IInput;
}

export const Person: FunctionComponent<PersonProps> = ({ forname, surname }) => (
  <fieldset className="form-row" name="name">
    <div className="col-6 mb-3">
      <Input label="Forname" id="forname" value={forname.value} onChange={forname.onChange}/>
    </div>
    <div className="col-6 mb-3">
      <Input label="Surname" id="surname" value={surname.value} onChange={surname.onChange} />
    </div>
</fieldset>
);