import React, { Component } from 'react';
import { Shape, Layer } from 'react-konva';
import { Context } from 'konva';
import { Corners as Pairs, ActiveSquares } from '@pyxis/imigary/build';
import { IStore, StoreState } from '../../store';
import { observer, inject } from 'mobx-react';
import { hexToRgbA } from '../../helpers';

export interface ActiveProps {
  store?: IStore;
}

@inject('store')
@observer
export class Active extends Component<ActiveProps> {
  private static STYLES: string[][] = [
    ['fillStyle', hexToRgbA('#000000', 0.15)],
  ];

  private get store() {
    return this.props.store!;
  }

  private get isReady() {
    return this.store.state === StoreState.DONE;
  }

  private scene(context: Context): void {
    const canvas = new Pairs(context);
    const inactive = this.store.squares.inactiveEdges;
    for (let i = 0; i < inactive.length; i++) {
      context.rect(inactive[i][0][0], inactive[i][0][1], inactive[i][1][0], inactive[i][1][1]);
    }
    canvas.style(Active.STYLES);
    canvas.fill();
  }
  
  render() {
    if (this.isReady) {
      return (
        <Layer>
          <Shape sceneFunc={this.scene.bind(this)} />
        </Layer>
      );
    }
    return null;
  }
}