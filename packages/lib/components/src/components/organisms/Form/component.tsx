import React, { FunctionComponent, FormEvent } from 'react';
import { RadioStackProps, RadioStack } from '../../atoms/forms/RadioStack/component';
import { Abode, AbodeProps } from '../../moleculs/forms/Abode';
import { Accordion, Card } from 'react-bootstrap';
import { Checkbox, CheckboxProps } from '../../atoms/forms/Checkbox';
import { Button } from '../../atoms/forms/Button';
import { Type as ButtonType } from '../../atoms/forms/Button/types';

interface FormProps {
  distribution: RadioStackProps;
  invoicing: AbodeProps;
  delivery: AbodeProps;
  terms: CheckboxProps;
  data: CheckboxProps;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const Form: FunctionComponent<FormProps> = ({ distribution, invoicing, delivery, terms, data, onSubmit: handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <RadioStack {...distribution} />
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Invoicing Address
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Abode {...invoicing} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Delivery Address
          </Accordion.Toggle>
          <small>Fill only if delivery address is different than invoicing address.</small>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Abode {...delivery} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <Checkbox {...terms} />
    <Checkbox {...data} />
    <Button type={ButtonType.SUBMIT}>Next</Button>
  </form>
);