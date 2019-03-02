import React, { FunctionComponent } from 'react';
// @ts-ignore
import InlineSVG from 'svg-inline-react';

/**
 * Svg properties.
 */
export interface SvgProps {
  /** link to specific location */
  link: string;
  svg: string;
  aria: {
    label: string,
  };
}

/**
 * Svg component.
 * 
 * @visibleName Logotype
 */
export const Svg: FunctionComponent<SvgProps> = ({ svg, link, aria }) => (
  <a href={link} {...style('root', {})} aria-label={aria.label}>
    <InlineSVG className={style.svg} src={svg}/>
  </a>
);
