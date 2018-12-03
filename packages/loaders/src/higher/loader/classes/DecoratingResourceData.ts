import { Resource } from './Resource';
import { Data } from './Options/Data';

export class DecoratingResourceData {
  constructor(
    private resource: Resource,
    private data: Data,
  ) {}

  public get path() {
    return ''.concat(this.data.path, '/', this.resource.name);
  }
}
