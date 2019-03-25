import React, { FunctionComponent } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Item } from './types';
import { Svg } from '../Svg';

export interface NavigationProps {
  items: Item[];
  brand: string;
  home: string;
}

export const Navigation: FunctionComponent<NavigationProps> = ({ items, brand, home }) => (
  <Navbar bg="transparent" variant="light">
    <Nav className="mr-auto">
      {items.map((item: Item, i) => (
        <Nav.Link href={item.link} key={item.id || i}>{item.title}</Nav.Link>
      ))}
    </Nav>
    <Navbar.Brand href="#home"><Svg svg={brand} fill="black" /></Navbar.Brand>
  </Navbar>
);
