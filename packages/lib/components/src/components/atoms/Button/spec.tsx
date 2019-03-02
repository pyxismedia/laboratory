import React from 'react';
import { Button, Types } from './';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('Button', () => {
  it('should have class btn by default', () => {
    const component = mount(<Button type={Types.PRIMARY}>Click me!</Button>)
    expect(component).to.have.className('btn');
  });

  it('should render button according its type', () => {
    expect(mount(<Button type={Types.PRIMARY}>Click me!</Button>)).to.have.className('btn-primary');
    expect(mount(<Button type={Types.SECONDARY}>Click me!</Button>)).to.have.className('btn-secondary');
    expect(mount(<Button type={Types.SUCCESS}>Click me!</Button>)).to.have.className('btn-success');
    expect(mount(<Button type={Types.INFO}>Click me!</Button>)).to.have.className('btn-info');
    expect(mount(<Button type={Types.WARNING}>Click me!</Button>)).to.have.className('btn-warning');
    expect(mount(<Button type={Types.DANGER}>Click me!</Button>)).to.have.className('btn-danger');
  });
});
