import React from 'react';
import { storiesOf } from '@storybook/react';
import { Svg } from '.';
import { withReadme } from 'storybook-readme';
import README from './README.md';
import svg from './svg.svg';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms/Svg', module)
  .addDecorator(withReadme(README))
  .add(
  'default',
  /*withDocs(README,*/ () => {
    const props = {
      svg,
      link: text('Link', '#'),
      aria: {
        label: text('Label', 'pyxis media'),
      },
    };
    return <Svg {...props} />
  }/*)*/);
