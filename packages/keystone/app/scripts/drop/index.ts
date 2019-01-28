/* eslint-disable global-require */
import isDevelopment from '../../environment/isDevelopment';

console.log(isDevelopment);

if (isDevelopment) exports.default = require('./development').default;
else exports.default = require('./production').default;

// Make from commonjs module es6 module
// https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/
Object.defineProperty(exports, '__esModule', {
  value: true,
});
