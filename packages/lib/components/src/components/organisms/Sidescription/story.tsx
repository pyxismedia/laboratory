import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidescription } from '.';
// import { withDocs } from 'storybook-readme';
// import README from './README.md';
import { withInfo } from '@storybook/addon-info';

storiesOf('Atoms/Svg', module)
  .addDecorator(withInfo({ header: false }))
  // .addDecorator(withDocs([README]))
  .add(
  'default',
  () => {
    const props = {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet si'
    };
    return <Sidescription {...props} />
  });