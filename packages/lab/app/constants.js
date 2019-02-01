const pkgDir = require('pkg-dir');
const { join } = require('path');

const PORT = process.env.PORT || 3001;
const PACKAGE_DIR = pkgDir.sync(__dirname);
const VIEWS_PATH = join(PACKAGE_DIR, 'src', 'views');

module.exports = {
  PORT,
  PACKAGE_DIR,
  VIEWS_PATH,
};