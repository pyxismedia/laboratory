import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';

/**
 * Svg properties.
 */
export interface SvgProps {
  Svg: any;
  /** link to url */
  link: string;
  aria?: {
    label: string;
  };
  fill?: string;
}

/**
 * Svg component.
 *
 * @visibleName Logotype
 */
export const Svg: FunctionComponent<SvgProps> = ({
  Svg,
  link,
  aria = { label: undefined },
  fill = 'white'
}) => (
  <a href={link} aria-label={aria.label} className={styles.root}>
    <Svg className={styles.svg} styles={{ fill }} />
  </a>
);
