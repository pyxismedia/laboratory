import { APP_DIRNAME
 } from "../../constants";
import { join } from 'path';
import { DecorateArgs, DecoratePart } from './types';

export const decorate = ({ test, loader, options }: DecorateArgs): DecoratePart => ({
	module: {
		rules: [{
			test,
			loaders: [
				{
					options,
					loader: join(APP_DIRNAME, 'node_modules', '@pyxis', 'loaders', loader),
				},
			],
		}],
	},
});
