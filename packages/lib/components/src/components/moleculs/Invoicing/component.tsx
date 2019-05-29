import React, { FunctionComponent } from 'react';
import { City, Country } from './types';

interface InvoicingProps {
  forname: string;
  surname: string;
  company: string;
  vat: string;
  street: string;
  streetNo: number;
  postcode: string;
  cities: City[];
  countries: Country[];
}

export const Invoicing: FunctionComponent<InvoicingProps> = ({ forname, cities, countries, surname, company, vat, street, streetNo, postcode }) => (
  <>
    <div className="form-row">
      <div className="col-6 mb-3">
        <label htmlFor="forname">Forname</label>
        <input type="text" className="form-control" name="forname" id="" placeholder="" value={forname} required />
      </div>
      <div className="col-6 mb-3">
        <label htmlFor="surname">Surname</label>
        <input type="text" className="form-control" id="surname" placeholder="" value={surname} required />
      </div>
    </div>
    <div className="form-row">
      <div className="col-6 mb-3">
        <label htmlFor="company">Company</label>
        <input type="text" className="form-control" id="company" placeholder="" value={company} required />
      </div>
      <div className="col-6 mb-3">
        <label htmlFor="vat">VAT</label>
        <input type="text" className="form-control" id="vat" placeholder="" value={vat} required />
      </div>
    </div>
    <div className="form-row">
      <div className="col-6 mb-3">
        <label htmlFor="street">Street</label>
        <input type="text" className="form-control" id="street" placeholder="" value={street} required />
      </div>
      <div className="col-2 mb-3">
        <label htmlFor="streetNo">Street no.</label>
        <input type="text" className="form-control" id="streetNo" placeholder="" value={streetNo} required />
      </div>
      <div className="col-4 mb-3">
        <label htmlFor="postcode">Postcode</label>
        <input type="text" className="form-control" id="postcode" placeholder="" value={postcode} required />
      </div>
    </div>
    <div className="form-row">
      <div className="col-6 mb-3">
        <label htmlFor="city">City</label>
        <select className="custom-select" id="city">
          {cities.map((city: City) => (
            <option key={city.id} value={city.value}>{city.title}</option>
          ))}
        </select>
      </div>
      <div className="col-6 mb-3">
        <label htmlFor="country">Country</label>
        <select className="custom-select" id="country">
          {countries.map((country: Country) => (
            <option key={country.id} value={country.value}>{country.title}</option>
          ))}
        </select>
      </div>
    </div>
  </>
);