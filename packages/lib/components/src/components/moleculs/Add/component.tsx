import React, { FunctionComponent } from 'react';
import { Raiser } from '../Raiser';
import { Button, Variants } from '../../atoms/Button';

interface AddProps {
  title: string;
  onAdd: ((event: MouseEvent) => void);
  onCount: ((count: number) => void);
}

export const Add: FunctionComponent<AddProps> = ({ title, onAdd, onCount }) => (
  <div>
    <Raiser onCount={onCount} />
    <Button variant={Variants.PRIMARY} onClick={onAdd}>{title}</Button>
  </div>
);