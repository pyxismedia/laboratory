import React, { FunctionComponent } from 'react';
import { Raiser } from '../Raiser';
import { Button, Variants } from '../../atoms/Button';
import setDisplayName from 'recompose/setDisplayName';

export interface AddComponentProps {
  title: string;
  onAdd: ((event: MouseEvent) => void);
  onCount: ((count: number) => void);
}

const AddPure: FunctionComponent<AddComponentProps> = ({ title, onAdd, onCount }) => (
  <div>
    <Raiser onCount={onCount} />
    <Button variant={Variants.PRIMARY} onClick={onAdd}>{title}</Button>
  </div>
);

export const AddComponent: FunctionComponent<AddComponentProps> = setDisplayName('AddComponent')(AddPure);