import { storiesOf } from '@storybook/vue';
import HelloWorld from './HelloWorld.vue'

storiesOf("HelloWorld", module)
  .add("default", () => ({
    component: { HelloWorld },
    render() {
      return <HelloWorld />;
    },
  }));
