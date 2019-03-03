import React from 'react';
import { storiesOf } from '@storybook/react';
import { Svg } from '.';
import { withDocs } from 'storybook-readme';
import README from './README.md';
import svg from './svg.svg';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

storiesOf('Atoms/Svg', module)
  .addDecorator(withInfo({ header: false }))
  .addDecorator(withDocs(README))
  .add(
  'default',
  () => {
    const props = {
      svg,
      link: text('Link', '#'),
      aria: {
        label: text('Label', 'pyxis media'),
      },
      fill: 'black',
    };
    return <Svg {...props} />
  });
