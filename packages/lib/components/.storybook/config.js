import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import path from 'path';
// import { addParameters } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  addDecorator(withKnobs);
  // addParameters({
  //   options: {
  //     /**
  //      * name to display in the top left corner
  //      * @type {String}
  //      */
  //     name: 'Storybook',
  //     /**
  //      * URL for name in top left corner to link to
  //      * @type {String}
  //      */
  //     url: '#',
  //     /**
  //      * show story component as full screen
  //      * @type {Boolean}
  //      */
  //     isFullScreen: false,
  //     /**
  //      * display panel that shows a list of stories
  //      * @type {Boolean}
  //      */
  //     showNav: true,
  //     /**
  //      * display panel that shows addon configurations
  //      * @type {Boolean}
  //      */
  //     showPanel: true,
  //     /**
  //      * display floating search box to search through stories
  //      * @type {Boolean}
  //      */
  //     showSearchBox: false,
  //     /**
  //      * show addon panel as a vertical panel on the right
  //      * @type {Boolean}
  //      */
  //     addonPanelInRight: true,
  //     /**
  //      * sorts stories
  //      * @type {Boolean}
  //      */
  //   }
  // });

  let ctx;
  if (process.env.NODE_ENV === 'test') {
    const requireContext = require('require-context');
    ctx = requireContext(path.resolve(__dirname, "../src"), true, /story\.tsx?$/);
  } else {
    ctx = require.context("../src", true, /story\.tsx?$/);
  }

  requireAll(ctx);
}

configure(loadStories, module);
