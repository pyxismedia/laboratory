import faker from 'faker';
import { Variants } from './types'

export const mocks = {
  simple: {
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
    variant: Variants.SIMPLE,
  },
  multi: {
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
    variant: Variants.MULTI,
  }
};
