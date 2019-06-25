import { Component, FormEvent, createElement, ReactNode } from 'react';
import { Shipping as ShippingComponent } from './component';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { IAbode } from '../../../moleculs/forms/Abode/types';
import { ICheckbox } from '../../../atoms/forms/Checkbox/types';
import { InputTypeEnum } from '../../../atoms/forms/Input/types';
import { IRadioStack } from '../../../atoms/forms/RadioStack/types';

const { assign } = Object;

type Group = 'invoicing' | 'delivery';
type Field = 'distribution' | 'terms' | 'data';

interface IShipping {}

interface ShippingProps extends IShipping {}

interface ShippingState {
  data: {
    distribution: IRadioStack;
    invoicing: IAbode;
    delivery: IAbode;
    terms: ICheckbox;
    data: ICheckbox;
  };
}

export class Shipping extends Component<ShippingProps, ShippingState>
  implements IShipping {
  state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);
    this.state = {
      data: {
        distribution: {
          id: '01',
          active: undefined,
          radios: [
            {
              title: 'Home Delivery',
              icon: faTruck,
              id: '11'
            },
            {
              title: 'Personal Pickup',
              icon: faTruck,
              id: '12'
            }
          ]
        },
        invoicing: {
          forname: {
            id: 'forname1',
            label: 'Forname',
            value: '',
            placeholder: 'Denisa',
            type: InputTypeEnum.TEXT
          },
          surname: {
            id: 'surname1',
            label: 'Forname',
            value: '',
            placeholder: 'Juna',
            type: InputTypeEnum.TEXT
          },

          company: {
            id: 'company',
            label: 'Company',
            value: '',
            placeholder: 'Somethings LTD',
            type: InputTypeEnum.TEXT
          },
          vat: {
            id: 'vat',
            label: 'VAT',
            value: '',
            placeholder: '12345',
            type: InputTypeEnum.TEXT
          },

          street: {
            id: 'street1',
            label: 'Street',
            value: 'Street 1',
            placeholder: 'Your Street',
            type: InputTypeEnum.TEXT
          },
          streetNo: {
            id: 'streetNo1',
            label: 'Street Number',
            value: '5',
            placeholder: 'Your Number Street',
            type: InputTypeEnum.NUMBER
          },
          postcode: {
            id: 'postcode1',
            label: 'Postcode',
            value: '123 45',
            placeholder: '111 11',
            type: InputTypeEnum.TEXT
          },
          cities: {
            id: 'city1',
            label: 'City',
            value: '',
            options: [
              {
                id: 'prague',
                title: 'Prague',
                value: 'PRG'
              }
            ]
          },
          countries: {
            id: 'country1',
            label: 'Country',
            value: '',
            options: [
              {
                id: 'czechRepublic',
                title: 'Czech Republic',
                value: 'CZ'
              }
            ]
          }
        },
        delivery: {
          forname: {
            id: 'forname2',
            label: 'Forname',
            value: '',
            placeholder: 'Denisa',
            type: InputTypeEnum.TEXT
          },
          surname: {
            id: 'surname2',
            label: 'Forname',
            value: '',
            placeholder: 'Juna',
            type: InputTypeEnum.TEXT
          },

          street: {
            id: 'street2',
            label: 'Street',
            value: 'Street 2',
            placeholder: 'Your Street',
            type: InputTypeEnum.TEXT
          },
          streetNo: {
            id: 'streetNo2',
            label: 'Street Number',
            value: '5',
            placeholder: 'Your Number Street',
            type: InputTypeEnum.NUMBER
          },
          postcode: {
            id: 'postcode2',
            label: 'Postcode',
            value: '123 45',
            placeholder: '111 11',
            type: InputTypeEnum.TEXT
          },
          cities: {
            id: 'city2',
            label: 'City',
            value: '',
            options: [
              {
                id: 'prague',
                title: 'Prague',
                value: 'PRG'
              }
            ]
          },
          countries: {
            id: 'country2',
            label: 'Country',
            value: '',
            options: [
              {
                id: 'czechRepublic',
                title: 'Czech Republic',
                value: 'CZ'
              }
            ]
          }
        },
        terms: {
          checked: false,
          id: 'terms',
          title: 'I agree terms and conditions'
        },
        data: {
          checked: false,
          id: 'data',
          title: 'I agree with GDPR'
        }
      }
    };
  }

  handleChange = (field: Field) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let data = assign({}, this.state.data);

    if (event.currentTarget.type === 'checkbox') {
      const { checked } = event.currentTarget as HTMLInputElement;
      (data[field] as ICheckbox).checked = checked;
    }

    if (event.currentTarget.type === 'radio') {
      (data[field] as IRadioStack).active = event.currentTarget.value;
    }

    this.setState({ data });
  };

  handleGroupChange = (group: Group) => (field: keyof IAbode) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.currentTarget;
    let data = assign({}, this.state.data);
    data[group][field]!['value'] = value;
    this.setState({ data });
  };

  handleSubmit(e: FormEvent<HTMLFormElement>): void {
    console.log(e);
  }

  render(): ReactNode {
    const props = {
      ...this.state.data,
      onGroupChange: this.handleGroupChange,
      onFieldChange: this.handleChange,
      onSubmit: this.handleSubmit
    };
    return createElement(ShippingComponent, props);
  }
}
