const fs = require('fs');
const beautify = require('js-beautify').js;
const { highlight } = require('cli-highlight');
const { resolve } = require('path');
const { runLoaders } = require('loader-runner');

const hofResourcePath = './resource/decorable.ts';

runLoaders(
	{
		resources: [hofResourcePath],
		loaders: [{
			loader: resolve(__dirname, './loader'),
			options: {
				data: {
				  group: '',
				  path: './resource',
          theme: '',
        },
				decorator: {
					path: resolve(__dirname, 'resources', 'decorator'),
					destructor: 'decorator',
				},
			},
		}],
		context: {
			get resourcePath() {
				return resolve(__dirname, hofResourcePath);
			},
			loadModule(path, callback) {
				if (!fs.existsSync(resolve(__dirname, `${path}.ts`))) {
					callback(new Error('File doesn\'t exists'));
					return;
				}
				callback();
			},
		},
		readResource: fs.readFile.bind(fs),
	},
	(err, result) => {
		if (err) {
			console.error(err)
		}
		console.log(highlight(beautify(result.result[0]), { language: 'javascript' }));
    },
);
