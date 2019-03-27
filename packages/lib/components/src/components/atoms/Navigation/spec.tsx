import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from './component';
import { expect } from 'chai';
import { props } from './mocks';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

describe('Navigation', () => {
  it('should be present', () => {
    const component = shallow(<Navigation {...props } />);
    expect(component).to.be.present();
  });

  it('should contain Navbar', () => {
    const component = shallow(<Navigation {...props } />);
    const navbar = component.find(Navbar);
    expect(navbar).to.be.present();
    expect(navbar).to.have.prop('bg', 'transparent');
    expect(navbar).to.have.prop('variant', 'light');
  });

  it('should contain Nav', () => {
    const component = shallow(<Navigation {...props } />);
    const navbar = component.find(Navbar);
    const nav = navbar.find(Nav);
    expect(navbar).to.have.exactly(1).descendants(Nav);
    expect(nav).to.have.prop('className', 'mr-auto');
  });

  it('should contain Nav.Link', () => {
    const component = shallow(<Navigation {...props } />);
    const navbar = component.find(Navbar);
    const nav = navbar.find(Nav);
    const navLink = nav.find(Nav.Link);
    expect(nav).to.have.exactly(2).descendants(Nav.Link);
    expect(navLink.first()).to.have.prop('href', props.items[0].link);
    expect(navLink.at(1)).to.have.prop('href', props.items[1].link);
  });

  it('should contain Nav', () => {
    const component = shallow(<Navigation {...props } />);
    const navbar = component.find(Navbar);
    const navbarBrand = navbar.find(Navbar.Brand);
    expect(navbarBrand).to.have.prop('href', '#home');
  });
});
