import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { Add } from '../../moleculs/Add';

interface SidescriptionProps {
  title: string;
  description: string;
  onAdd: (event: MouseEvent, count: number) => void;
  subtitle: string;
}

export const Sidescription: FunctionComponent<SidescriptionProps> = ({
  title,
  description,
  onAdd,
  subtitle
}) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    <strong className={styles.subtitle}>{subtitle}</strong>
    <p>{description}</p>
    <Add title="Add to cart" onAdd={onAdd} />
  </div>
);
