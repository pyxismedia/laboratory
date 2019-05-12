import React, { FunctionComponent } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Item } from './types';
import { Svg } from '../../atoms/Svg';

export interface NavigationProps {
  items: Item[];
  Brand: any;
  home: string;
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  items,
  Brand,
  home
}) => (
  <Navbar bg="transparent" variant="light">
    <Nav className="mr-auto">
      {items.map((item: Item, i) => (
        <Nav.Link href={item.link} key={item.id || i}>
          {item.title}
        </Nav.Link>
      ))}
    </Nav>
    <Navbar.Brand href="#home">
      <Svg Svg={Brand} fill="black" link={home} />
    </Navbar.Brand>
  </Navbar>
);
