import React from 'react';
import { ProductDescription } from './component';
import { shallow, ShallowWrapper } from 'enzyme';
import { expect } from 'chai';
import { Button } from '../../atoms/Button';
import { Variants } from '../../atoms/Button';
import { Sizes } from '../../types/sizes';
import { spy } from 'sinon';

describe("ProductDescription", () => {
  let component: ShallowWrapper;
  const props = {
    title: 'Lorem',
    category: 'Dolor',
    description: 'Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    price: '$300',
    action: 'Add to basket',
    onAdd: spy(),
  };
  
  beforeEach(() => {
    component = shallow(<ProductDescription {...props} />);
  });

  it("should render", () => {
    expect(component).to.be.present();
  });

  it("should render wrapper with required classNames", () => {
    expect(component.find('.wrapper')).to.be.present();
    expect(component.find('.wrapper')).to.have.className('d-flex');
    expect(component.find('.wrapper')).to.have.className('align-items-center');
    expect(component.find('.wrapper')).to.have.className('justify-content-center');
  });

  it('should contain container as child of wrapper with required classNames', () => {
    const wrapper = component.find('.wrapper');
    const container = component.find('.container');
    expect(wrapper).to.have.exactly(1).descendants('.container');
    expect(container).to.have.className('d-flex');
    expect(container).to.have.className('flex-column');
  });

  it('should contain h2 with required classNames as child of container', () => {
    const container = component.find('.container');
    const h2 = component.find('h2');
    expect(container).to.have.exactly(1).descendants('h2');
    expect(h2).to.have.className('h1');
    expect(h2).to.have.text(props.title);
  });

  it('should contain category label with required classNames', () => {
    const container = component.find('.container');
    const category = component.find('p').first();
    expect(container).to.have.exactly(2).descendants('p');
    expect(category).to.have.className('text-uppercase');
    expect(category).to.have.text(props.category);
  });

  it('should contain description with required classNames', () => {
    const container = component.find('.container');
    const description = component.find('p').at(1);
    expect(container).to.have.exactly(2).descendants('p');
    expect(description).to.have.className('font-weight-light');
    expect(description).to.have.text(props.description);
  });

  it('should contain price with required classNames', () => {
    const container = component.find('.container');
    const price = component.find('div').at(2);
    expect(container).to.have.exactly(2).descendants('div');
    expect(price).to.have.className('h3 mb-4');
    expect(price).to.have.text(props.price);
  });

  it('should contain Button component with required attributes as child of containe', () => {
    const container = component.find('.container');
    const button = component.find(Button);
    expect(container).to.have.exactly(1).descendants(Button);
    expect(button).to.have.prop('variant', Variants.OUTLINE_DARK);
    expect(button).to.have.prop('size', Sizes.LG);
    expect(button).to.have.prop('children', props.action);
  });

  it('should be possible to click on button', () => {
    const button = component.find(Button);
    button.simulate('click');
    expect(props.onAdd).to.have.been.calledOnce;
  });
}); 