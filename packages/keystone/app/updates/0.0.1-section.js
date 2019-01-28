const keystone = require('keystone');

const Section = keystone.list('Section');

module.exports = function(done) {
  new Section.model.insertMany([
    {
      _id: '00000000000000000000000a',
      name: 'Lorem ipsum',
    },
    {
      _id: '00000000000000000000000b',
      name: 'Dolor sit amet',
    },
  ]).then(() => {
    console.log('INFO: Section updated.');
    done();
  }).catch((e) => {
    console.log('ERROR: Section update error ', e);
  });
};
