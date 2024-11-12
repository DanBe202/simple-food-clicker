import { Big } from 'big.js';

export function toString(value: Big): string {
    if(value.cmp(1000000) == 1) {
      return value.toExponential(2)
    }
    return value.toString();
  }