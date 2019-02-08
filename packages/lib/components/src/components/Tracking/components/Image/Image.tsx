import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Layer, Image as ImageComponent } from 'react-konva';
import { StoreAbstract, IStore } from '../../store';

export interface ImageProps {
  store?: StoreAbstract;
}

@inject('store')
@observer
export class Image extends Component<ImageProps> {
  render() {
    const { image, width, height } = this.props.store!;
    return (
      <Layer>
        <ImageComponent image={image} width={width} height={height}  />
      </Layer>
    );
  }
}