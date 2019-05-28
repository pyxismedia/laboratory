import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class Radio {
  constructor(
    public title: string,
    public icon: IconDefinition,
    public id: string,
  ) {}
}