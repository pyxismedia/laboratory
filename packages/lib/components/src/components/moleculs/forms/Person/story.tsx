import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Person } from './component';
import { FormEvent } from 'react';

export const props = {
  forname: {
    value: 'Karel',
    id: 'forname',
    label: 'Forname'
  },
  surname: {
    value: 'Vomacka',
    id: 'surname',
    label: 'Surname'
  },
  onFieldChange: () => () => {}
};

const PersonContainer = () => {
  const [forname, setForname] = useState('');
  const [surname, setSurname] = useState('');

  const props = {
    forname: {
      value: forname,
      id: 'forname',
      label: 'Forname'
    },
    surname: {
      value: surname,
      id: 'surname',
      label: 'Surname'
    },
    onFieldChange: (id: string) => (e: FormEvent<HTMLInputElement>) => {
      if (id === 'forname') {
        setForname(e.currentTarget.value)
      };

      if (id === 'surname') {
        setSurname(e.currentTarget.value);
      }
    },
  };
  
  return <Person {...props} />
};

storiesOf('Moleculs/forms/Person', module)
  .add('default', () => <Person {...props} />)
  .add('state-full', () => <PersonContainer />);