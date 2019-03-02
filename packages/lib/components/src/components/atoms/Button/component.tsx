import React, { FunctionComponent, ReactChild } from 'react';
import styled from 'styled-components';
import '../../bootstrap.scss';
import { Types } from './types'

interface BtnProps {
  type: Types;
}

const Btn = styled.button.attrs<BtnProps>((props) => ({
  className: `btn btn-${props.type}`,
  type: 'button'
}))``;


export interface ButtonProps {
  children: ReactChild;
  type: Types;
}

export const Button: FunctionComponent<ButtonProps> = ({ children = 'Confirm', type = Types.PRIMARY }) => (
  <Btn type={type}>{children}</Btn>
);
