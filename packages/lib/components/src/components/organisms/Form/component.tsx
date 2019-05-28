import React, { FunctionComponent } from 'react';
import { RadioStackProps, RadioStack } from '../../atoms/RadioStack/component';

interface FormProps {
  delivery: RadioStackProps;
}

export const Form: FunctionComponent<FormProps> = ({ delivery }) => (
  <form>
    <RadioStack {...delivery} />
  </form>
);