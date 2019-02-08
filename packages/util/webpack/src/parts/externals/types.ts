import { ExternalsElement, ExternalsObjectElement, ExternalsFunctionElement } from 'webpack';

export interface ExternalsPart {
  externals?: string | RegExp | ExternalsObjectElement | ExternalsFunctionElement | ExternalsElement[] | undefined;
}
