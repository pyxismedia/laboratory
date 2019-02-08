import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from './';
import faker from 'faker';

storiesOf('Button', module)
  .add('with text', () => {
    const props = {
      pathname: faker.image.imageUrl(),
      alt: 'Lorem ipsum',
      link: '#',
      styled: { Image: 'img', A: 'a' },
    };
    return <Logo {...props} />
  });
