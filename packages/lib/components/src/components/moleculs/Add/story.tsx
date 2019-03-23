import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Add } from './';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Moleculs/Add', module);
const typings = story.addDecorator(withInfo({ header: false }));

typings.add('default', () => (
  <Add title="Add" onAdd={action('added amount')} />
));