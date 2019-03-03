import React, { FunctionComponent, ReactChild } from 'react';
import { Types } from './types'
import '../../bootstrap.scss';
import { Button as Btn } from 'react-bootstrap';

export interface ButtonProps {
  children: ReactChild;
  type: Types;
}

export const Button: FunctionComponent<ButtonProps> = ({ children = 'Confirm', type = Types.PRIMARY }) => (
  <Btn variant={type}>{children}</Btn>
);
