import React from 'react';
import { Raiser as Component } from './component';

interface RaiserProps {
  onCount: (count: number) => void;
}

interface RaiserState {
  count: number;
}

export class Raiser extends React.Component<RaiserProps, RaiserState> {
  constructor(props: RaiserProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  reset() {
    this.setState({ count: 0 });
  }

  handleDecrease = () => {
    if (this.state.count === 0) return;
    const count = this.state.count - 1;
    this.setState({ count });
    this.props.onCount(count);
  }

  handleRaise = () => {
    const count = this.state.count + 1;
    this.setState({ count });
    this.props.onCount(count);
  }

  render() {
    return React.createElement(Component, {
      ...this.props,
      count: this.state.count,
      onDecrease: this.handleDecrease,
      onRaise: this.handleRaise,
    });
  }
}