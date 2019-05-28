
export class Select {
  constructor(
    public id: string,
    public title: string,
    public value: string,
  ) {}
}

export class City extends Select {}

export class Country extends Select {}