import React, { Component } from 'react';
import { DerivatedDivisionPairs, Corners } from '@pyxis/imigary/build';
import { Layer, Rect } from 'react-konva';
import { inject, observer } from 'mobx-react';
import { StoreAbstract } from '../../store';

export interface MatrixProps {
  store?: StoreAbstract;
}

@inject('store')
@observer
export class Matrix extends Component<MatrixProps> {
  render() {
    const { dimension: { xPairs, yPairs }, width, height } = this.props.store!;
    return <Layer>
      {xPairs.map((pair, i) => <Rect key={i} fill="#000000" x={pair[0]} y={0} width={1} height={height} /> )}
      {yPairs.map((pair, i) => <Rect key={i} fill="#000000" x={0} y={pair[0]} width={width} height={1} /> )}
    </Layer>;
  }
}