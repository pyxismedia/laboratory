import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Corners } from './components/Corners';
import { Stage } from 'react-konva';
import { Matrix } from './components/Matrix/Matrix';
import { Edges } from './components/Edges/Edges';
import { Active } from './components/Active';
import { Image } from './components/Image';
import { Store } from './store';
import { Title } from './components/Title';

/**
 * Tracking properties.
 */
export interface TrackingProps {
  image: HTMLImageElement;
  store: Store;
}

/**
 * Tracking component.
 * 
 * @visibleName Tracking
 */
@inject('store')
@observer
export class Tracking extends Component<TrackingProps> {
  constructor(props: TrackingProps) {
    super(props);

    this.props.store.setImage(this.props.image);
  }

  render() {
    const { width, height } = this.props.store;
    return (
      <>
        <Stage width={width} height={height}>
          <Image />
          <Matrix />
          <Corners />
          <Active />
          <Edges />
          <Title store={this.props.store} />
        </Stage>
      </>
    );
  }
};