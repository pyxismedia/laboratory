import { FormEvent } from "react";

export interface Input {
  value: string | number;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export interface InputData extends Input {
  datalist: string[] | number[];
}

export interface Select {
  options: {
    id: string,
    title: string,
    value: string,
  }[],
  value: string;
}