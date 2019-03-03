/**
 * @describe inject props to the method
 * @param target
 * @param name
 * @param descriptor
 * @returns {*}
 */
export const props = (target: any, name: string, descriptor: PropertyDescriptor) => {
  const original = descriptor.value;

  // eslint-disable-next-line no-param-reassign
  descriptor.value = function wrapper(...args: any[]) {
    // @ts-ignore
    return original.apply(this, [this.props, ...args]);
  };

  return descriptor;
};
