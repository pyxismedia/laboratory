import React, { FunctionComponent, ReactChild } from 'react';
import { Variants } from './types'
import '../../bootstrap.scss';
import { Button as Btn } from 'react-bootstrap';
import { Sizes } from '../../types/sizes';

export interface ButtonProps {
  children: ReactChild;
  variant?: Variants;
  size?: Sizes
  onClick: ((event: MouseEvent) => void);
}

export const Button: FunctionComponent<ButtonProps> = ({ children = 'Confirm', variant = Variants.PRIMARY, size, onClick }) => (
  <Btn variant={variant} size={size} onClick={onClick}>{children}</Btn>
);
