import { Configuration } from "webpack-dev-server";

export enum Host {
  ALL_ACCESS = '0.0.0.0',
  LOCALHOST = 'localhost',
}

export enum Port {
  NODE = 3000,
}

export interface DecorateArgs {
  host?: Host;
  port?: Port;
}

export interface DecoratePart {
  devServer: Configuration;
}
