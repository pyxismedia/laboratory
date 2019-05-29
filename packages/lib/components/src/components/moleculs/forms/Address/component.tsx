import React, { FunctionComponent } from 'react';
import { Input } from '../../../atoms/forms/Input';
import { InputData, Select as ISelect } from '../../../types/form';
import { Select } from '../../../atoms/forms/Select';

interface AddressProps {
  street: InputData;
  streetNo: InputData;
  postcode: InputData;
  cities: ISelect;
  countries: ISelect;
}

export const Address: FunctionComponent<AddressProps> = ({ street, streetNo, postcode, cities, countries }) => (
  <fieldset name="address">
    <div className="form-row">
      <div className="col-6 mb-3">
        <Input label="Street" id="street" {...street} />
      </div>
      <div className="col-2 mb-3">
        <Input label="Street No." id="streetNo" {...streetNo} />
      </div>
      <div className="col-4 mb-3">
        <Input label="Postcode" id="postcode" {...postcode} />
      </div>
    </div>
    <div className="form-row">
      <div className="col-6 mb-3">
        <Select label="City" id="city" {...cities} />  
      </div>
      <div className="col-6 mb-3">
        <Select label="Country" id="country" {...countries} />
      </div>
    </div>
  </fieldset>
);