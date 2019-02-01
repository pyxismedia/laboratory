const keystone = require('keystone');

const Section = keystone.list('Section');

module.exports = function(done) {
  new Section.model.insertMany([
    {
      _id: '00000000000000000000000a',
      slug: 'lore-ipsum',
      name: {
        en: 'Lorem ipsum',
        de: 'Lorem ipsum de',
        fr: 'Lorem ipsum fr',
      },
    },
    {
      _id: '00000000000000000000000b',
      slug: 'dolor-sit-amet',
      name: {
        en: 'Dolor sit amet',
        de: 'Dolor sit amet de',
        fr: 'Dolor sit amet fr',
      },
    },
  ]).then(() => {
    console.log('INFO: Section updated.');
    done();
  }).catch((e) => {
    console.log('ERROR: Section update error ', e);
  });
};
