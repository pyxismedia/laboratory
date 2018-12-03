// @ts-ignore
import Path from 'path';

/**
 * @param path Path of decorator
 * @param destructor Represent named export from module such as `import { $destructor } from '$path'`
 */
export interface DecoratorParams {
  path: Path;
  destructor: string;
}

export class Decorator implements DecoratorParams {
  path: Path;
  destructor: string;

  constructor({ path, destructor }: DecoratorParams) {
    this.path = path;
    this.destructor = destructor;
  }
}
