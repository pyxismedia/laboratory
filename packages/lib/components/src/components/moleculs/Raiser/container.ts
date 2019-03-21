import React from 'react';
import { Raiser as Component } from './component';

export class Raiser extends React.Component {
  render() {
    return React.createElement(Component, { ...this.props });
  }
}