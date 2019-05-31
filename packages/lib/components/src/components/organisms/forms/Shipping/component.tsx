import React, { FunctionComponent, FormEvent } from 'react';
import { RadioStackProps, RadioStack } from '../../../atoms/forms/RadioStack/component';
import { Abode, AbodeProps } from '../../../moleculs/forms/Abode';
import { Accordion, Card } from 'react-bootstrap';
import { Checkbox, CheckboxProps } from '../../../atoms/forms/Checkbox';
import { Button } from '../../../atoms/forms/Button';
import { OnFieldChange } from '../../../types/form';

// TODO: Create namespaces like <Form.Groups.Shipping />

interface ShippingProps {
  distribution: RadioStackProps;
  invoicing: AbodeProps;
  delivery: AbodeProps;
  terms: CheckboxProps;
  data: CheckboxProps;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: OnFieldChange;
}

export const Shipping: FunctionComponent<ShippingProps> = ({
    distribution, invoicing, delivery, terms, data,
    onSubmit: handleSubmit, onFieldChange: handleFieldChange 
  }) => (
  <>
    <RadioStack {...distribution} onChange={handleFieldChange(distribution.id)} />
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Invoicing Address
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Abode {...invoicing} onFieldChange={handleFieldChange} />
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
            <Abode {...delivery} onFieldChange={handleFieldChange} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <Checkbox {...terms} onChange={handleFieldChange(terms.id)} />
    <Checkbox {...data} onChange={handleFieldChange(data.id)} />
    <Button onClick={handleSubmit}>Next</Button>
  </>
);