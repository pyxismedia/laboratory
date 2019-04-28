import ReactDOM from 'react-dom';
import React from 'react';

const { create } = Object;

export class WebComponent {
  private proto!: HTMLElement;

  private static camelToKebab(str: string) {
    str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  constructor(private Component: any) {
    this.proto = create(HTMLElement.prototype, {
      createdCallback: {
        value() {
          const mountPoint = document.createElement('span');
          this.createShadowRoot().appendChild(mountPoint);

          const name = this.getAttribute('name');
          
          const reactElement = React.createElement(this.Component, { name });

          ReactDOM.render(reactElement, mountPoint);
        }
      },
    }); 
  }

  private get displayName() {
    if (this.Component.displayName) {
      return WebComponent.camelToKebab(`r-${this.Component.displayName}`);
    }
    throw new Error('Component has to have displayName property.');
  }

  public register() {
    document.registerElement(this.displayName, { prototype: this.proto });
  }
}