
export class Data {
  path: string;
  theme: string;
  group: string;

  constructor({ path, theme, group }) {
    this.path = path;
    this.theme = theme;
    this.group = group
  }
}
