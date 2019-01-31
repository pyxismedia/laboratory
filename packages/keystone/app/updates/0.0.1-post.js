const keystone = require('keystone');

const Post = keystone.list('Post');

exports = module.exports = function(done) {
  new Post.model.insertMany([
    {
      _id: '000000000000000000000a00',
      slug: 'lorem-ipsum-1',
      title: {
        en: 'Lorem ipsum 1',
        de: 'Lorem ipsum 1',
        fr: 'Lorem ipsum 1',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech', 'lifestyle'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000b00',
      slug: 'lorem-ipsum-2',
      title: {
        en: 'Lorem ipsum 2',
        de: 'Lorem ipsum 2',
        fr: 'Lorem ipsum 2',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'lifestyle', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000c00',
      slug: 'lorem-ipsum-3',
      title: {
        en: 'Lorem ipsum 3',
        de: 'Lorem ipsum 3',
        fr: 'Lorem ipsum 3',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'lifestyle'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000000d00',
      slug: 'lorem-ipsum-4',
      title: {
        en: 'Lorem ipsum 4',
        de: 'Lorem ipsum 4',
        fr: 'Lorem ipsum 4',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000e00',
      slug: 'lorem-ipsum-5',
      title: {
        en: 'Lorem ipsum 5',
        de: 'Lorem ipsum 5',
        fr: 'Lorem ipsum 5',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: [],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000f00',
      slug: 'lorem-ipsum-6',
      title: {
        en: 'Lorem ipsum 6',
        de: 'Lorem ipsum 6',
        fr: 'Lorem ipsum 6',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech', 'lifestyle', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000001a00',
      slug: 'lorem-ipsum-7',
      title: {
        en: 'Lorem ipsum 7',
        de: 'Lorem ipsum 7',
        fr: 'Lorem ipsum 7',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'lifestyle', 'business'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001b00',
      slug: 'lorem-ipsum-8',
      title: {
        en: 'Lorem ipsum 8',
        de: 'Lorem ipsum 8',
        fr: 'Lorem ipsum 8',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['beauty'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001c00',
      slug: 'lorem-ipsum-9',
      title: {
        en: 'Lorem ipsum 9',
        de: 'Lorem ipsum 9',
        fr: 'Lorem ipsum 9',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000001d00',
      slug: 'lorem-ipsum-10',
      title: {
        en: 'Lorem ipsum 10',
        de: 'Lorem ipsum 10',
        fr: 'Lorem ipsum 10',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'hitech', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001e00',
      slug: 'lorem-ipsum-11',
      title: {
        en: 'Lorem ipsum 11',
        de: 'Lorem ipsum 11',
        fr: 'Lorem ipsum 11',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle', 'beauty'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001f00',
      slug: 'lorem-ipsum-12',
      title: {
        en: 'Lorem ipsum 12',
        de: 'Lorem ipsum 12',
        fr: 'Lorem ipsum 12',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'hitech', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000002a00',
      slug: 'lorem-ipsum-13',
      title: {
        en: 'Lorem ipsum 13',
        de: 'Lorem ipsum 13',
        fr: 'Lorem ipsum 13',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'business'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002b00',
      slug: 'lorem-ipsum-14',
      title: {
        en: 'Lorem ipsum 14',
        de: 'Lorem ipsum 14',
        fr: 'Lorem ipsum 14',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002c00',
      slug: 'lorem-ipsum-15',
      title: {
        en: 'Lorem ipsum 15',
        de: 'Lorem ipsum 15',
        fr: 'Lorem ipsum 15',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech', 'beauty'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000002d00',
      slug: 'lorem-ipsum-16',
      title: {
        en: 'Lorem ipsum 16',
        de: 'Lorem ipsum 16',
        fr: 'Lorem ipsum 16',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002e00',
      slug: 'lorem-ipsum-17',
      title: {
        en: 'Lorem ipsum 17',
        de: 'Lorem ipsum 17',
        fr: 'Lorem ipsum 17',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002f00',
      slug: 'lorem-ipsum-18',
      title: {
        en: 'Lorem ipsum 18',
        de: 'Lorem ipsum 18',
        fr: 'Lorem ipsum 18',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'hitech', 'lifestyle', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000003a00',
      slug: 'lorem-ipsum-19',
      title: {
        en: 'Lorem ipsum 19',
        de: 'Lorem ipsum 19',
        fr: 'Lorem ipsum 19',
      },
      subtitle: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet',
        fr: 'Dolor sit amet',
      },
      content: {
        en: 'Integer posuere erat.',
        de: 'Integer posuere erat.',
        fr: 'Integer posuere erat.',
      },
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['beauty', 'business'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    }
  ])
    .then(() => {
      console.log('INFO: Post updated.');
      done();
    })
    .catch(e => {
      console.log('ERROR: Post update error ', e);
    });
};
