import React, { FunctionComponent } from 'react';
// @ts-ignore
import InlineSVG from 'svg-inline-react';
import styles from './module.scss';

/**
 * Svg properties.
 */
export interface SvgProps {
  svg: string;
  /** link to url */
  link?: string;
  aria?: {
    label: string,
  };
  fill?: string;
}

/**
 * Svg component.
 * 
 * @visibleName Logotype
 */
export const Svg: FunctionComponent<SvgProps> = ({ svg, link = 'javascript:void(0)', aria = { label: undefined }, fill = 'white' }) => (
  <a href={link} aria-label={aria.label} className={styles.root}>
    <InlineSVG className={styles.svg} styles={{ fill }} src={svg} />
  </a>
);
