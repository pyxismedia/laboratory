import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Person } from './component';
import { FormEvent } from 'react';

export const props = {
  forname: {
    value: 'Karel',
    onChange: () => {},
  },
  surname: {
    value: 'Vomacka',
    onChange: () => {}
  },
};

const PersonContainer = () => {
  const [forname, setForname] = useState('');
  const [surname, setSurname] = useState('');

  const props = {
    forname: {
      value: forname,
      onChange: (e: FormEvent<HTMLInputElement>) => setForname(e.currentTarget.value),
    },
    surname: {
      value: surname,
      onChange: (e: FormEvent<HTMLInputElement>) => setSurname(e.currentTarget.value),
    }
  };
  
  return <Person {...props} />
};

storiesOf('Moleculs/forms/Person', module)
  .add('default', () => <Person {...props} />)
  .add('state-full', () => <PersonContainer />);