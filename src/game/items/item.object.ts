import { Big } from 'big.js';
import { Items } from './items.ts';

export class Item {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _baseValue: Big;
  private _value: Big;
  private _income: Big;
  private _quantity: number;

  public constructor(id: number, name: string, description: string, value: Big | number, income: Big | number, quantity: number = 0) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._income = new Big(income);
    this._value = new Big(value);
    this._baseValue = new Big(value);
    this._quantity = quantity;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get value(): Big {
    return this._value;
  }

  get income(): Big {
    return this._income;
  }

  get quantity(): number {
    return this._quantity;
  }

  public upgrade(): void {
    this._value = this._value.plus(this._baseValue.mul(Math.pow(1.15, this.quantity))).round(0);
    ++this._quantity;
  }
}