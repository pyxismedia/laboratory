import { IInput, IInputData } from "../../../atoms/forms/Input/types";
import { ISelect } from "../../../atoms/forms/Select/types";

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