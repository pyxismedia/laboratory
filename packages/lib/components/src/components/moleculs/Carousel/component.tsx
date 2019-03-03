import * as React from 'react';
import '../../bootstrap.scss';
import { CarouselSlide } from './types'
import { Carousel as BsCarousel } from 'react-bootstrap';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import defaultProps from 'recompose/defaultProps';
import cn from 'classnames';

const ITEM_WIDTH = 100;

interface ItemProps {
  slide: CarouselSlide;
  width?: number;
}

const Item = defaultProps<ItemProps>({ width: 100, slide: { src: '', alt: '' } })(({ slide, width }: ItemProps) => (
  <img className={cn({ 'd-block': width === ITEM_WIDTH }, `w-${width || ITEM_WIDTH}`)} src={slide.src} alt={slide.alt} />
));

interface ItemsProps {
  slide: CarouselSlide[];
}

const Items: React.FunctionComponent<ItemsProps> = ({ slide }) => (
  <>
    {slide.map((item: CarouselSlide) => (
      <Item width={ITEM_WIDTH / slide.length} slide={slide[0]} />
    ))}
  </>
);

type Slides = CarouselSlide[] | CarouselSlide[][];

export interface CarouselProps {
  slides: Slides;
}

export const  Carousel: React.FunctionComponent<CarouselProps> = ({ slides }) => (
  <BsCarousel className="carousel-multi-item">
    {slides.map((slide, i) => {
      const Content = branch<ItemsProps>(
        (props: ItemsProps) => Array.isArray(props.slide),
        renderComponent(Items)
      )(Item);

      return (
        <BsCarousel.Item key={i}>
          <Content slide={slide} />
        </BsCarousel.Item>
      );
    })}
  </BsCarousel>
);
