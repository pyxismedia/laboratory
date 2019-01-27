import keystone from 'keystone';

const User = keystone.list('User');

exports = module.exports = function(done) {

  new User.model.insertMany([
    {
      _id: '0000000000000000000000a0',
      name: { first: 'Alfred', last: 'Long' },
      email: 'alfred@long.com',
      password: 'alfred',
      canAccessKeystone: true,
    },
    {
      _id: '0000000000000000000000b0',
      name: { first: 'Luis', last: 'Home' },
      email: 'luis@home.com',
      password: 'luis',
      canAccessKeystone: true,
    },
  ]).then(() => {
    console.log('INFO: User updated.');
    new User.model({
      name: { first: 'Admin', last: 'User' },
      email: 'admin@keystonejs.com',
      password: 'admin',
      canAccessKeystone: true
    }).save(done);
  }).catch((e) => {
    console.log('ERROR: User update error ', e);
  });
};
