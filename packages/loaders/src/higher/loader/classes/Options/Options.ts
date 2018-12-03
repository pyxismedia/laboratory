import { Decorator } from './Decorator';
import { Data } from './Data';

export interface OptionsParams {
  data: Data;
  decorator: Decorator;
}

export class Options implements OptionsParams {
  data: Data;
  decorator: Decorator;

  /**
   *
   * @param data Data object using which is required file decorated
   * @param decorator Will decorated required file
   */
  constructor({ data, decorator }: OptionsParams) {
    this.data = new Data(data);
    this.decorator = new Decorator(decorator);
  }
}
