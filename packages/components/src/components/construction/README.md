### With logo

```jsx
const logo = require('./mocks/logo.png');
const WebFontsLoader = require('@dr-kobros/react-webfont-loader').default;
const styles = { height: '500px' };
const config = {
  google: {
    families: ['Open Sans:100'],
  }
};
const props = {
  logo,
  backgroundColor: 'rgb(242, 164, 157)',
  email: 'info@animaux.glass',
  phone: '+420 731 533 412',
};
<div style={styles}>
  <WebFontsLoader config={config}>
    <Construction {...props} />
  </WebFontsLoader>
</div>
```

### Without logo

```jsx
const WebFontsLoader = require('@dr-kobros/react-webfont-loader').default;
const styles = { height: '500px' };
const config = {
  google: {
    families: ['Open Sans:100', 'Dr Sugiyama'],
  }
};
const props = {
  title: 'Animaux de Verre',
  subtitle: 'Glass Dildo',
  backgroundColor: 'rgb(242, 164, 157)',
  email: 'info@animaux.glass',
  phone: '+420 731 533 412',
};
<div style={styles}>
  <WebFontsLoader config={config}>
    <Construction {...props} />
  </WebFontsLoader>
</div>
```