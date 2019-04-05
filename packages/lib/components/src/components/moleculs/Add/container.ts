import React from 'react';
import { AddComponent } from './component';

export interface AddContainerProps {
  title: string;
  onAdd: (event: MouseEvent, count: number) => void;
}
export class AddContainer extends React.Component<AddContainerProps> {
  count!: number;
  constructor(props: AddContainerProps) {
    super(props);
  }

  handleCount = (count: number) => {
    this.count = count;
  }

  handleAdd = (e: MouseEvent) => {
    this.props.onAdd(e, this.count);
  }

  render() {
    return React.createElement(AddComponent, {
      title: this.props.title,
      onAdd: this.handleAdd,
      onCount: this.handleCount,
    });
  }
}