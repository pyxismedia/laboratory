export class Resource {
  public resource;

  constructor(resource) {
    this.resource = resource;
  }

  public get name() {
    const arrayPath = this.resource.split('/');
    return arrayPath[arrayPath.length - 2];
  }

  public get component() {
    return this.name.charAt(0).toUpperCase() + this.name.substr(1);
  }
}
