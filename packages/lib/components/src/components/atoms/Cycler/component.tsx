import React, { FunctionComponent } from 'react';
import styles from './styles.scss';

interface CyclerProps {
  items: Array<{
    title: string,
  }>;
}

export const Cycler: FunctionCompo






§nent<CyclerProps> = ({ items }) => (
  <div className={styles.cycler}>
    <div className={styles.up}></div>
    <ul>
      {items.map(item => (
        <li>{item.title}</li>
      ))}
    </ul>
    <div className={styles.down}></div>
  </div>
);
