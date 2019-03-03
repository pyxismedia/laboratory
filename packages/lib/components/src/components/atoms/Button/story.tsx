import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import { withDocs } from 'storybook-readme'
import README from './README.md';
import { Types } from './types'
import { withInfo } from '@storybook/addon-info'

const { keys } = Object;

const story = storiesOf('Atoms/Button', module)
  .addDecorator(withInfo({ header: false }))
  .addDecorator(withDocs(README))

keys(Types).forEach((key: string) => {
  story.add(Types[key], () => {
    const props = {
      children: 'Click me!',
      type: Types[key],
    };
    return <Button {...props} />
  })
});
