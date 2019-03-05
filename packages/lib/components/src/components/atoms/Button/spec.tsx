import React from 'react';
import { Button, Variants } from './';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('Button', () => {
  it('should have class btn by default', () => {
    const component = mount(<Button variant={Variants.PRIMARY}>Click me!</Button>)
    expect(component).to.have.className('btn');
  });

  it('should render button according its type', () => {
    expect(mount(<Button variant={Variants.PRIMARY}>Click me!</Button>)).to.have.className('btn-primary');
    expect(mount(<Button variant={Variants.SECONDARY}>Click me!</Button>)).to.have.className('btn-secondary');
    expect(mount(<Button variant={Variants.SUCCESS}>Click me!</Button>)).to.have.className('btn-success');
    expect(mount(<Button variant={Variants.INFO}>Click me!</Button>)).to.have.className('btn-info');
    expect(mount(<Button variant={Variants.WARNING}>Click me!</Button>)).to.have.className('btn-warning');
    expect(mount(<Button variant={Variants.DANGER}>Click me!</Button>)).to.have.className('btn-danger');
  });
});
