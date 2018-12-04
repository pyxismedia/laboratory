import { Resource } from "../Resource";

export class Component {
  group: string;
  theme: string;
  path: string;

  constructor(
    { group, theme, path },
    private resource: Resource,
  ) {
    this.group = group;
    this.theme = theme;
    this.path = path;
  }

  public get pathname() {
    return `${this.group}/${this.theme}/${this.path}/${this.resource.name}`;
  }
}
