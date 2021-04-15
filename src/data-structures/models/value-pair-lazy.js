import { ValuePair } from '../models/value-pair.js';

export class ValuePairLazy extends ValuePair {
  constructor(key, value, isDeleted = false) {
    super(key, value);
    this.key = key;
    this.value = value;
    this.isDeleted = isDeleted;
  }
}
