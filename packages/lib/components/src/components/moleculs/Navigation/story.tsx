import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from '.';
import { props } from './mocks';

const story = storiesOf('Moleculs/Navigation', module);

story.add('default', () => {
  return <Navigation {...props} />;
});
