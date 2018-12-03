import { getOptions } from 'loader-utils';
import { Options } from './classes/Options/index';
import { Resource } from './classes/Resource';
import { DecoratingResourceData } from './classes/DecoratingResourceData';
import { decoratingResourceDataExists } from './decoratingResourceDataExists';

export default function(source) {
	const callback = this.async();
	const options = new Options(getOptions(this));
	const resource = new Resource(this.resourcePath);
	const decoratingResourceData = new DecoratingResourceData(resource, options.data);

	this.loadModule(
	  decoratingResourceData.path,
    decoratingResourceDataExists(
      source,
      callback,
      options,
      resource,
      decoratingResourceData
    ),
  );
};
