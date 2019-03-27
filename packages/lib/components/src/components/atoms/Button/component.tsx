import React, { FunctionComponent, ReactChild } from 'react';
import { Variants } from './types'
import '../../bootstrap.scss';
import { default as Btn } from 'react-bootstrap/Button';

export interface ButtonProps {
  children: ReactChild;
  variant: Variants;
}

export const Button: FunctionComponent<ButtonProps> = ({ children = 'Confirm', variant = Variants.PRIMARY }) => (
  <Btn variant={variant}>{children}</Btn>
);
