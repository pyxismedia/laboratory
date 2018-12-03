export class Resource {
  public path;

  constructor(resource) {
    this.path = resource;
  }

  public get name() {
    const arrayPath = this.path.split('/');
    return arrayPath[arrayPath.length - 2];
  }
}
