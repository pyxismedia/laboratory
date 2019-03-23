import React from 'react';
import { Add as Component } from './component';

interface AddProps {
  title: string;
  onAdd: (event: MouseEvent, count: number) => void;
}
export class Add extends React.Component<AddProps> {
  count!: number;
  constructor(props: AddProps) {
    super(props);
  }

  handleCount = (count: number) => {
    this.count = count;
  }

  handleAdd = (e: MouseEvent) => {
    this.props.onAdd(e, this.count);
  }

  render() {
    return React.createElement(Component, {
      title: this.props.title,
      onAdd: this.handleAdd,
      onCount: this.handleCount,
    });
  }
}