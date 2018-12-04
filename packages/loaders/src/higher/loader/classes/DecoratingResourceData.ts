import { Resource } from './Resource';
import { Data } from './Options/Data';

export class DecoratingResourceData {
  constructor(
    private resource: Resource,
    private data: Data,
  ) {}

  public get path() {
    const groupPath = this.data.group ? `${this.data.group}/` : '';
    const themePath = this.data.theme ? `${this.data.theme}/` : '';
    return `${groupPath}${themePath}${this.data.path}/${this.resource.name}`;
  }
}
