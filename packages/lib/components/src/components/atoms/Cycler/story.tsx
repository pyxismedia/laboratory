import React from 'react';
import { storiesOf } from '@storybook/react';
import { Cycler } from '.';
import { withInfo } from '@storybook/addon-info';

storiesOf('Atoms/Cycler', module)
  .addDecorator(withInfo({ header: false }))
  .add(
    'default',
    () => {
      const props = {
        items: [],
      };
      return <Cycler {...props} />
    });
