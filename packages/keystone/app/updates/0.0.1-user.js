const keystone = require('keystone');

const User = keystone.list('User');

module.exports = function(done) {

  new User.model.insertMany([
    {
      _id: '0000000000000000000000a0',
      displayName: 'alfred',
      name: { first: 'Alfred', last: 'Long' },
      email: 'alfred@long.com',
      password: 'alfred',
      canAccessKeystone: true,
    },
    {
      _id: '0000000000000000000000b0',
      displayName: 'luis',
      name: { first: 'Luis', last: 'Home' },
      email: 'luis@home.com',
      password: 'luis',
      canAccessKeystone: true,
    },
  ]).then(() => {
    console.log('INFO: User updated.');
    new User.model({
      displayName: 'admin',
      name: { first: 'Admin', last: 'User' },
      email: 'admin@keystonejs.com',
      password: 'admin',
      canAccessKeystone: true
    }).save(done);
  }).catch((e) => {
    console.log('ERROR: User update error ', e);
  });
};
