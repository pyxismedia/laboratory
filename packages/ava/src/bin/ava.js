import program from 'commander';
import packageJson from '../../package.json';
import { PACKAGE_DIRNAME } from '../constants';
import { join } from 'path';
import { exec } from 'child_process';

// console.log(process.argv);

program
  .version(packageJson.version, '-v, --version')
  .command('group <group>')
  .option('-f, --files [files]', 'provide test files')
  .action((env, options) => {
    const group = options.parent.args[0];
    const { files } = options;
    console.log('files', files)
    exec(`${join(PACKAGE_DIRNAME, 'node_modules', '.bin', 'ava')} ${files}`,  { cwd: join(PACKAGE_DIRNAME, 'build', group) }, function(err, stdout, stderr) {
      console.log(join(PACKAGE_DIRNAME, 'build', group));
      if (err) {
        console.error(err);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  });

program.parse(process.argv);
