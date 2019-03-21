import React, { FunctionComponent } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Button, Variants } from '../../atoms/Button';

interface RaiserProps {
  onRaise: ((event: MouseEvent) => void);
  onDecrease: ((event: MouseEvent) => void);
}

export const Raiser: FunctionComponent<RaiserProps> = ({ onRaise, onDecrease }) => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant={Variants.SECONDARY} onClick={onDecrease}>-</Button>
    </InputGroup.Prepend>
    <FormControl placeholder="0" className="m" />
    <InputGroup.Append>
      <Button variant={Variants.SECONDARY} onClick={onRaise}>+</Button>
    </InputGroup.Append>
  </InputGroup>
);