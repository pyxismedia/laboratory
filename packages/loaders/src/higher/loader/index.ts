import { getOptions } from 'loader-utils';
import { Options } from './classes/Options';
import { Resource } from './classes/Resource';
import { DecoratingResourceData } from './classes/DecoratingResourceData';

export default function(source) {
	const callback = this.async();
  const resource = new Resource(this.resourcePath);
	const options = new Options(getOptions(this), resource);
	const decoratingResourceData = new DecoratingResourceData(resource, options.data);

  console.log('HEEEEEEY', decoratingResourceData, decoratingResourceData.path, decoratingResourceData.source, decoratingResourceData._source);
	this.loadModule(
	  decoratingResourceData.path,
    (error, decoratingResourceSource) => {
      if (error) {
        throw new Error(`ERROR: @pyxis/loaders/higher: File doesn't exists on path: ${decoratingResourceData.path}. Fallback on origin one.\n`);
        callback(null, source);
        return;
      }

      const result = `
        import { ${resource.component} as Wrapped } from '${options.component.pathname}';
        import { ${options.decorator.destructor} } from '${options.decorator.path}';
        import * as data from '${decoratingResourceData.path}';
        
        console.log(Wrapped, ${options.decorator.destructor}(data)(Wrapped));
        export const ${resource.component} = ${options.decorator.destructor}(data)(Wrapped);
      `;
      callback(null, result);
    }
  );
};
