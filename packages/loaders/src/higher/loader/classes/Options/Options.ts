import { Decorator } from './Decorator';
import { Data } from './Data';
import {Component} from "./Component";
import {Resource} from "../Resource";

export interface OptionsParams {
  data: Data;
  decorator: Decorator;
  component: Component;
}

export class Options implements OptionsParams {
  data: Data;
  decorator: Decorator;
  component: Component;

  /**
   *
   * @param data Data object using which is required file decorated
   * @param decorator Will decorated required file
   * @param component Represent state-less component
   */
  constructor({ data, decorator, component }: OptionsParams, resource: Resource) {
    this.data = new Data(data);
    this.decorator = new Decorator(decorator);
    this.component = new Component(component, resource);
  }
}
