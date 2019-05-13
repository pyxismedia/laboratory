import React, { Component } from 'react';
import { Square } from '@pyxis/imigary/build/Squares';
import { Layer, Text } from 'react-konva';
import { IStore } from '../../store';
import { inject, observer } from 'mobx-react';
import { StoreState } from '../../store/types';

export interface EdgesProps {
  store?: IStore;
}

@inject('store')
@observer
export class Edges extends Component<EdgesProps> {
  private get isReady() {
    const { state } = this.props.store!;
    return StoreState.DONE === state;
  }
  render() {
    if (this.isReady) {
      const { edges, sizes } = this.props.store!.squares;
      return (
        <Layer>
          {edges.map((edge, i) => (
            <Text
              fill="#FF0000"
              key={i}
              fontSize={6}
              text={`(${i}) ${edge[0][0]},${edge[0][1]}`}
              x={edge[0][0] + 5}
              y={edge[0][1] + 5}
            />
          ))}
          {edges.map((edge, i) => (
            <Text
              fill="#0000FF"
              key={i}
              fontSize={6}
              verticalAlign="bottom"
              align="right"
              text={`(${i}) ${edge[1][0]},${edge[1][1]}`}
              width={sizes[i][1][0]}
              height={sizes[i][1][1]}
              x={sizes[i][0][0] - 5}
              y={sizes[i][0][1] - 5}
            />
          ))}
        </Layer>
      );
    }
    return null;
  }
}
