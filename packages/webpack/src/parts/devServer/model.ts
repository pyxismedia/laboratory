export interface DevServer {
  stats: string,
  host: string;
  port: number;
  open: boolean;
  overlay: boolean;
}

export class DevServerModel {
  constructor(
    public devServer: DevServer,
  ) {}
}
