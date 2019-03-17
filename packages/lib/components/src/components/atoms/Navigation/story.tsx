import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './';

const story = storiesOf('Organisms/Navigation', module);

story.add('default', () => {
  return (
    <Navigation />
  );
});
