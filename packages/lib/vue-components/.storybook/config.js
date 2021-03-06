import { configure, addDecorator } from '@storybook/vue';
import { addReadme } from 'storybook-readme/vue';

addDecorator(addReadme);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /story\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);