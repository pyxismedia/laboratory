import React, { FunctionComponent } from 'react';
import { AddContainer } from './container';
import { AddComponent, AddComponentProps } from './component'; 
import { shallow, ShallowWrapper } from 'enzyme';
import { expect } from 'chai';

describe('Add', () => {
  describe('Component', () => {
    let component: ShallowWrapper<FunctionComponent<AddComponentProps>>;

    beforeEach(() => {
      component = shallow(<AddComponent title="Lorem ipsum" onCount={() => {}} onAdd={() => {}} />);
    });

    it('should render Add component', () => {
      expect(component).to.be.present();
    });
  });

  describe('Container', () => {
    let container: ShallowWrapper<AddContainer>;

    beforeEach(() => {
      container = shallow(<AddContainer title="Lorem ipsum" onAdd={() => {}} />);
    });

    it('should render Add container', () => {
      expect(container).to.be.present();
    });
  });
});