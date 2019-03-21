import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Raiser } from './';

const story = storiesOf('Moleculs/Raiser', module);
const typings = story.addDecorator(withInfo({ header: false }));

typings.add('default', () => (
  <Raiser />
));