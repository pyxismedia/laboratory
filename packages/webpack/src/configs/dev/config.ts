// @ts-ignore // Doesn't work even @types/webpack-merge are installed
import merge from 'webpack-merge';
import { devServer } from '../../parts/devServer';
import { html } from '../../parts/html';
import { entry as entries } from '../../parts/entry';
import { output } from '../../parts/output';
import { module } from '../../parts/module';

export const dev = ({ entry }: { entry?: string } = {}) => merge(
  devServer(),
  html(),
  entries({ entry }),
  output(),
  module(),
);
