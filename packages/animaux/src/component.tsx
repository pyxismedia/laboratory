import React from 'react';
import { Construction } from '@pyxis/components/build/construction';
import WebFontLoader from '@dr-kobros/react-webfont-loader';

const config = {
  google: {
    families: ['Open Sans:100', 'Dr Sugiyama'],
  }
};

export const App = () => (
  <WebFontLoader config={config}>
    <Construction backgroundColor="rgb(242, 164, 157)" />
  </WebFontLoader>
);