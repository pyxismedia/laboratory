import React, { FunctionComponent, FormEvent } from 'react';
import { RadioStack, IRadioStack } from '../../../atoms/forms/RadioStack/component';
import { Abode, IAbode } from '../../../moleculs/forms/Abode';
import { Accordion, Card } from 'react-bootstrap';
import { Checkbox } from '../../../atoms/forms/Checkbox';
import { Button } from '../../../atoms/forms/Button';
import { OnFieldChange } from '../../../types/form';
import { ICheckbox } from '../../../atoms/forms/Checkbox/component';

interface ShippingProps {
  distribution: IRadioStack;
  invoicing: IAbode;
  delivery: IAbode;
  terms: ICheckbox;
  data: ICheckbox;
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