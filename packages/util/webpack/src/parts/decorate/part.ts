import { resolve } from "../../constants";
import { join } from 'path';
import { DecorateArgs, DecoratePart } from './types';

export const decorate = ({ test, loader, options }: DecorateArgs): DecoratePart => ({
	module: {
		rules: [{
			test,
			loaders: [
				{
					options,
					loader: resolve(join('@pyxis', 'loaders', loader)),
				},
			],
		}],
	},
});
