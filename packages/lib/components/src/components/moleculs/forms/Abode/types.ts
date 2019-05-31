import { IInput, IInputData } from "../../../atoms/forms/Input/component";
import { ISelect } from "../../../atoms/forms/Select/component";

export interface IAbode {
  person: {
    forname: IInput,
    surname: IInput
  };
  company?: {
    company: IInput,
    vat: IInput,
  };
  address: {
    street: IInputData,
    streetNo: IInputData,
    postcode: IInputData,
    cities: ISelect,
    countries: ISelect,
  },
}