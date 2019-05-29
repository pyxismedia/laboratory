import React, { FunctionComponent } from 'react';
import styles from './cycler.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

export interface CyclerProps {
  items: {
    title: string;
    id: string;
  }[];
  position: number;
  up: () => void;
  down: () => void;
  isActive: (index: number) => boolean;
  handleItemClick: (url: string) => () => void;
}

const HEIGHT = 25;

export const Cycler: FunctionComponent<CyclerProps> = ({
  items,
  position,
  up,
  down,
  isActive,
  handleItemClick
}) => (
  <div className={styles.cycler}>
    <button onClick={up} className={`${styles['btn']} ${styles['btn-link']} ${styles.link} `}>
      <FontAwesomeIcon icon={faChevronUp} size="2x" className={styles.up} />
    </button>
    <div className={styles.wrapper}>
      <ul className={styles.items} style={{ top: `${position * HEIGHT}px` }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={classnames(styles.item, {
              [styles.active]: isActive(index)
            })}
          >
            <button
              className={`btn btn-link ${styles.link}`}
              onClick={handleItemClick(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <button className={`btn btn-link ${styles.down}`} onClick={down}>
      <FontAwesomeIcon icon={faChevronDown} size="2x" className={styles.down} />
    </button>
  </div>
);
