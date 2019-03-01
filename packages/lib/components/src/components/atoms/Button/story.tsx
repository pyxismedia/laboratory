import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import { withReadme } from 'storybook-readme';
import README from './README.md';

storiesOf('Atoms/Button', module)
  .addDecorator(withReadme(README))
  .add(
    'default',
    () => {
      const props = {};
      return <Button {...props} />
    });
