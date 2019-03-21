import React from 'react';
import { Button, Variants } from './';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { action } from '@storybook/addon-actions';

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
    expect(mount(<Button variant={Variants.DARK}>Click me!</Button>)).to.have.className('btn-dark');
    expect(mount(<Button variant={Variants.LIGHT}>Click me!</Button>)).to.have.className('btn-light');
    expect(mount(<Button variant={Variants.OUTLINE_PRIMARY}>Click me!</Button>)).to.have.className('btn-outline-primary');
    expect(mount(<Button variant={Variants.OUTLINE_SECONDARY}>Click me!</Button>)).to.have.className('btn-outline-secondary');
    expect(mount(<Button variant={Variants.OUTLINE_SUCCESS}>Click me!</Button>)).to.have.className('btn-outline-success');
    expect(mount(<Button variant={Variants.OUTLINE_DANGER}>Click me!</Button>)).to.have.className('btn-outline-danger');
    expect(mount(<Button variant={Variants.OUTLINE_WARNING}>Click me!</Button>)).to.have.className('btn-outline-warning');
    expect(mount(<Button variant={Variants.OUTLINE_INFO}>Click me!</Button>)).to.have.className('btn-outline-info');
    expect(mount(<Button variant={Variants.OUTLINE_DARK}>Click me!</Button>)).to.have.className('btn-outline-dark');
    expect(mount(<Button variant={Variants.OUTLINE_LIGHT}>Click me!</Button>)).to.have.className('btn-outline-light');
  });
});
