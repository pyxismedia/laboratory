import { PACKAGE_DIRNAME } from "../../constants";
import { join } from 'path';
import { LoaderOptionsPlugin } from 'webpack';

export const decorate = ({ test, loader, options }: { test: RegExp, loader: string, options: LoaderOptionsPlugin }) => ({
	module: {
		rules: {
			test,
			loaders: [
				{
					options,
					loader: join(PACKAGE_DIRNAME, 'node_modules', '@pyxis', 'loaders', loader),
				},
			],
		},
	},
});
