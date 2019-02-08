import React, { Component, createRef, RefObject } from 'react';
import { IStore, StoreState } from '../../store';
import { Layer, Text } from 'react-konva';
import { inject, observer } from 'mobx-react';
import { Text as TextType } from 'konva';
import { Coordinates } from '@pyxis/imigary/src/Squares/types';
import { memoize } from '@pyxis/decorators/build/main';

export enum Align {
  LEFT = 'left',
  RIGHT = 'right',
}

export type CoordinatesAlign = [number, number, Align];

export interface TitleProps {
  store: IStore;
}

@inject('store')
@observer
export class Title extends Component<TitleProps> {
  titleRef: RefObject<TextType>;

  constructor(props: TitleProps) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    }

    this.titleRef = createRef();
  }

  componentDidUpdate() {
    const { title } = this.store;
    if (this.titleRef.current && title.width === 0 && title.height === 0) {
      this.store.setTitle(
        this.titleRef.current!.getWidth(),
        this.titleRef.current!.getHeight()
      );
    }
    // TODO: Take edge where text is rendered and compare with which square edge is getWidth lower
    const { edges } = this.store.squares;
  }

  private get store() {
    return this.props.store!;
  }

  @memoize private get edges(): CoordinatesAlign {
    // TODO: Problem here that i need to first render text and as soon i have it i can render its position
    // This is caused by that i have to know its height and width
    const { safeAreaActiveSquares, edges } = this.store.squares;
    let x = 0;
    let y = 0;
    let align = Align.LEFT;
    for (let i = 0; i <= safeAreaActiveSquares.length; i++) {
      if (safeAreaActiveSquares[i]) {
        if (i < safeAreaActiveSquares.length / 2) {
          x = edges[i][1][0];
          y = edges[i][1][1];
          align = Align.RIGHT;
          break;
        }
        x = edges[i][0][0];
        y = edges[i][0][1]; 
        align = Align.LEFT;
        break;
      }
    }
    return [x, y, align];
  }

  private get x() {
    const align = this.edges[2];
    const x = this.edges[0];

    if (align === Align.LEFT) {
      return x;
    } else if (align === Align.RIGHT) {
      return (x - this.store.title.width);
    }
  }

  private get y() {
    const align = this.edges[2];
    const y = this.edges[1];

    if (align === Align.LEFT) {
      return y;
    } else if (align === Align.RIGHT) {
      return (y - this.store.title.height);
    }
  }

  private get isReady() {
    const { state } = this.store;
    return state === StoreState.DONE;
  }

  render() {
    if (this.isReady) {
      return (
        <Layer>
          <Text fill="#0000FF" fontSize={36} fontFamily="Georgia" x={this.x} y={this.y} text='Try to click here!' ref={this.titleRef} />
        </Layer>
      );
    }
    return null;
  }
}
