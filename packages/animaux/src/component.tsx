import React from 'react';
import { Construction } from '@pyxis/components/build/construction';
import WebFontLoader from '@dr-kobros/react-webfont-loader';

const config = {
  google: {
    families: ['Open Sans:100', 'Dr Sugiyama'],
  }
};

const props = {
  backgroundColor:"rgb(242, 164, 157)",
  email: "info@animaux.glass",
  title: "Animaux de Verre",
  subtitle: "Glass Dildos",
  phone: '+44 7445 063 366',
}

export const App = () => (
  <WebFontLoader config={config}>
    <Construction {...props}/>
  </WebFontLoader>
);