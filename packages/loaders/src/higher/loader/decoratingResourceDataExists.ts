
export const decoratingResourceDataExists = (source, callback, options, resource, decoratingResourceData) => (error) => {
  if (error) {
    console.error(`ERROR: @pyxis/loaders/higher: File doesn't exists on path: ${decoratingResourceData.path}. Fallback on origin one.\n`);
    callback(null, source);
    return;
  }

  const result = `
			import wrapped from '${resource.path}';
			import { ${options.decorator.destructor} } from '${options.decorator.path}';
			import * as data from '${decoratingResourceData.path}';

			export default decorator(data)(wrapped);
		`;

  callback(null, result);
};
