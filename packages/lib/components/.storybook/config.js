import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import path from 'path';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  addDecorator(withKnobs);
  addParameters({
    panelPosition: 'right',
  });

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
