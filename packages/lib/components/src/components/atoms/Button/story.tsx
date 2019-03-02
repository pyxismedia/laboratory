import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import { withReadme } from 'storybook-readme';
import README from './README.md';
import { Types } from './types'

const { keys } = Object;

const story = storiesOf('Atoms/Button', module)
  .addDecorator(withReadme(README));

keys(Types).forEach((key: string) => {
  story.add(Types[key], () => {
    const props = {
      children: 'Click me!',
      type: Types[key],
    };
    return <Button {...props} />
  })
});
