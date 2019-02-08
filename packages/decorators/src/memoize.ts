const { assign, defineProperty } = Object;
export function memoize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = assign({}, descriptor);

  defineProperty(descriptor, 'get', {
    get() {
      return function() {
        // @ts-ignore
        if(!this.hasOwnProperty('__memoized__')) {
          // @ts-ignore
          defineProperty(this, '__memoized__', { value: new Map() });
        }

        // @ts-ignore
        if (this.__memoized__.has(propertyKey)) {
          // @ts-ignore
          return this.__memoized__.get(propertyKey);
        }

        // @ts-ignore
        const value = original.get.call(this);
        // @ts-ignore
        this.__memoized__.set(propertyKey, value);
        return value;
      }
    }
  });
}