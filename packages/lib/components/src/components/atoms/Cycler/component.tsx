import React, { FunctionComponent } from 'react';
import styles from './cycler.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

export interface CyclerProps {
  items: {
    title: string,
    id: string,
  }[];
  position: number;
  up: () => void;
  down: () => void;
  isActive: (index: number) => boolean;
  handleItemClick: (url: string) => () => void
}

const HEIGHT = 25;

export const Cycler: FunctionComponent<CyclerProps> = ({ items, position, up, down, isActive, handleItemClick }) => (
  <div className={styles.cycler}>
    <a href="javascript:void(0);" onClick={up}>
      <FontAwesomeIcon icon={faChevronUp} size="2x" className={styles.up} />
    </a>
    <div className={styles.wrapper}>
      <ul className={styles.items} style={{ top: `${position * HEIGHT}px` }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={classnames(styles.item, { [styles.active]: isActive(index) })}
          >
            <a className={styles.link} href="javascript:void(0);" onClick={handleItemClick(item.id)}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <a href="javascript:void(0);" className={styles.down} onClick={down}>
      <FontAwesomeIcon icon={faChevronDown} size="2x" className={styles.down} />
    </a>
  </div>
);
