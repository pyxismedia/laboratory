```jsx
const { store } = require('./store');
const { Provider } = require('mobx-react');
const img2 = require('./images/brouseni_gradients.jpg');

const image = new window.Image();
image.src = img2;
image.width = 902;
image.height = 507;

<Provider store={store}>
  <Tracking image={image} />
</Provider>
```