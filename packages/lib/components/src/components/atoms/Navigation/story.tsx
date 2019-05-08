import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './';
import { props } from './mocks';
import { withDocs } from 'storybook-readme';
import README from './README.md';

const story = storiesOf('Organisms/Navigation', module)
  .addDecorator(withDocs([README]));

story.add('default', () => {
  return (
    <Navigation {...props} />
  );
});
