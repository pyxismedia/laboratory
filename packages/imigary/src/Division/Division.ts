// Module
import { Sequence, DerivatedDivision, DerivatedDivisionPairs } from './types';
import { DivisionAbstract } from './DivisionAbstract';

export class Division extends DivisionAbstract {
  public static pairs(scale: DerivatedDivision): DerivatedDivisionPairs {
    const pairs = [];
    for (let i = 0; i < scale.length; i++) {
      const current = scale[i];
      const next = scale[i + 1];
      // Guard: do not include last occurence
      if (typeof next === 'undefined') break;
      pairs.push([current, next]);
    }
    return pairs;
  }

  constructor(
    protected readonly max: number
  ) {
    super();
  }

  protected get straight(): DerivatedDivision {
    const { round } = Math;
    return this.sequence.map((fib: Sequence) => round(this.max / fib)); /*?*/
  }

  protected get reverse(): DerivatedDivision {
    const { round } = Math;
    return this.sequence.map((fib: Sequence) => {
      const result = round(this.max - (this.max / fib));
      if (result === 0) {
        return this.max;
      }
      return result;
    });
  }

  public get scale(): DerivatedDivision {
    const { round } = Math;
    return [...(new Set([...this.straight, round(this.max / 2) ,...this.reverse]))].sort((a, b) => a - b);
  }
}