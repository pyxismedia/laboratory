import keystone from 'keystone';

const Post = keystone.list('Post');

exports = module.exports = function(done) {
  new Post.model.insertMany([
    {
      _id: '000000000000000000000a00',
      title: 'Lorem ipsum 1',
      subtitle: 'Dolor sit amet',
      content: {
        md: 'Integer posuere erat.'
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
      title: 'Lorem ipsum 2',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'lifestyle', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000c00',
      title: 'Lorem ipsum 3',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'lifestyle'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000000d00',
      title: 'Lorem ipsum 4',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000e00',
      title: 'Lorem ipsum 5',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: [],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000000f00',
      title: 'Lorem ipsum 6',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech', 'lifestyle', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000001a00',
      title: 'Lorem ipsum 7',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'lifestyle', 'business'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001b00',
      title: 'Lorem ipsum 8',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['beauty'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001c00',
      title: 'Lorem ipsum 9',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000001d00',
      title: 'Lorem ipsum 10',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'hitech', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001e00',
      title: 'Lorem ipsum 11',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle', 'beauty'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000001f00',
      title: 'Lorem ipsum 12',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'hitech', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000002a00',
      title: 'Lorem ipsum 13',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'business'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002b00',
      title: 'Lorem ipsum 14',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002c00',
      title: 'Lorem ipsum 15',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['hitech', 'beauty'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000002d00',
      title: 'Lorem ipsum 16',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002e00',
      title: 'Lorem ipsum 17',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['lifestyle'],
      author: '0000000000000000000000a0',
      section: '00000000000000000000000a'
    },
    {
      _id: '000000000000000000002f00',
      title: 'Lorem ipsum 18',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      image: { filename: 'someimage.png' },
      state: 'draft',
      date: new Date(),
      labels: ['fashion', 'hitech', 'lifestyle', 'beauty', 'business'],
      author: '0000000000000000000000b0',
      section: '00000000000000000000000b'
    },
    {
      _id: '000000000000000000003a00',
      title: 'Lorem ipsum 19',
      subtitle: 'Dolor sit amet',
      content:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
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
