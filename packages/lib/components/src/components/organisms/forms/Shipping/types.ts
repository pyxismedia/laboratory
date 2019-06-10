import { IAbode } from "../../../moleculs/forms/Abode";
import { IRadioStack } from "../../../atoms/forms/RadioStack/types";
import { ICheckbox } from "../../../atoms/forms/Checkbox/types";

export interface IShippingGroups {
  delivery: IAbode;
  invoicing: IAbode;
}

export interface IShippingFields {
  distribution: IRadioStack;
  terms: ICheckbox;
  data: ICheckbox;
}