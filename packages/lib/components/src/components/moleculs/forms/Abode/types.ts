import { IInput, IInputData } from "../../../atoms/forms/Input/component";
import { ISelect } from "../../../atoms/forms/Select/component";

export interface IAbode {
    forname: IInput,
    surname: IInput
    company?: IInput,
    vat?: IInput,
    street: IInputData,
    streetNo: IInputData,
    postcode: IInputData,
    cities: ISelect,
    countries: ISelect,
  
}