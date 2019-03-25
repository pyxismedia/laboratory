import React, { FunctionComponent } from 'react';
import styles from './styles.scss';
import { Add } from '../../moleculs/Add';

interface SidescriptionProps {
  title: string;
  description: string;
  onAdd: (event: MouseEvent, count: number) => void;
}

export const Sidescription: FunctionComponent<SidescriptionProps> = ({ title, description, onAdd }) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    <p>{description}</p>
    <Add title="Add to cart" onAdd={onAdd} />
  </div>
);