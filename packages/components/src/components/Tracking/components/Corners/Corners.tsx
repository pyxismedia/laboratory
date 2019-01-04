import React, { Component } from 'react';
import { Context } from 'konva';
import { Shape, Layer } from 'react-konva';
import { inject, observer } from 'mobx-react';
import { Corners as Pairs } from '@pyxis/imigary/build';
import { StoreAbstract } from '../../store';
import { StoreState } from '../../store/types';

export interface CornersProps {
  store?: StoreAbstract;
}

@inject('store')
@observer
export class Corners extends Component<CornersProps> {
  private static STYLES = [
    ['lineWidth', 10],
    ['fillStyle', '#FF0000'],
  ];
  scene(context: Context) {
    const { corners } = this.props.store!;
    const canvas = new Pairs(context);
    canvas.rectFromPairs(corners);
    canvas.style(Corners.STYLES);
    canvas.fill();
  }

  protected get isReady() {
    const { state } = this.props.store;
    return state === StoreState.DONE
  }
  
  render() {
    if (this.isReady) {
      return <Layer><Shape sceneFunc={this.scene.bind(this)} /></Layer>
    }
    return null;
  }
}

