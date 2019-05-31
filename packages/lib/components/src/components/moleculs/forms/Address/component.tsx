import React, { FunctionComponent } from 'react';
import { Input } from '../../../atoms/forms/Input';
import { IInputData, Select as ISelect, OnFieldChange } from '../../../types/form';
import { Select } from '../../../atoms/forms/Select';

interface AddressProps {
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
  onFieldChange: OnFieldChange;
}

export const Address: FunctionComponent<AddressProps> = ({ street, streetNo, postcode, cities, countries, onFieldChange: handleFieldChange }) => (
  <fieldset name="address">
    <div className="form-row">
      <div className="col-6 mb-3">
        <Input label="Street" id={street.id} {...street} onChange={handleFieldChange(street.id)} />
      </div>
      <div className="col-2 mb-3">
        <Input label="Street No." id={streetNo.id} {...streetNo} onChange={handleFieldChange(streetNo.id)} />
      </div>
      <div className="col-4 mb-3">
        <Input label="Postcode" id={postcode.id} {...postcode} onChange={handleFieldChange(postcode.id)} />
      </div>
    </div>
    <div className="form-row">
      <div className="col-6 mb-3">
        <Select label="City" id={cities.id} {...cities} onChange={handleFieldChange(cities.id)} />  
      </div>
      <div className="col-6 mb-3">
        <Select label="Country" id={countries.id} {...countries} onChange={handleFieldChange(countries.id)} />
      </div>
    </div>
  </fieldset>
);