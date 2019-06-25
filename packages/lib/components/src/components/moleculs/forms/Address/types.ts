import { IInputData } from '../../../atoms/forms/Input/types';
import { ISelect } from '../../../atoms/forms/Select/types';

export interface IAddress {
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
}
