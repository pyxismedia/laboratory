import React from 'react';
import { storiesOf } from '@storybook/react';
import { Carousel } from './component';
import { withDocs } from 'storybook-readme'
import README from './README.md';
import faker from 'faker';
import { withInfo } from '@storybook/addon-info'

const story = storiesOf('Moleculs/Carousel', module)
  .addDecorator(withInfo({ header: false }))
  .addDecorator(withDocs(README));

story.add(
  'multi',
  () => {
    const props = {
      slides: [
        [
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          },
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          },
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          },
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          }
        ],
        [
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          },
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          },
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          },
          {
            src: faker.image.image(),
            alt: faker.lorem.text(),
          }
        ],
      ],
    };
    return <Carousel {...props} />
  });

story.add(
'default',
() => {
  const props = {
    slides: [
      {
        src: faker.image.image(),
        alt: faker.lorem.text(),
      },
      {
        src: faker.image.image(),
        alt: faker.lorem.text(),
      },
      {
        src: faker.image.image(),
        alt: faker.lorem.text(),
      }
    ],
  };
  return <Carousel {...props} />
});
