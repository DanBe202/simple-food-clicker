import { Item } from './item.object.ts';
import itemsObj from './items.json';
import { Big } from 'big.js';

export class Items {
  private readonly _items: Item[] = [];

  constructor(items?: {id: number, name: string, description: string, value: string, income: string, quantity: number}[]) {
    if (items) {
      this._items = items.map((item) => new Item(item.id, item.name, item.description, item.value, item.income, item.quantity));
      return;
    }
    itemsObj.forEach(
      (currentValue) => {
        const item = new Item(currentValue.id, currentValue.name, currentValue.description, currentValue.value, currentValue.income);
        this._items.push(item);
      });
  }

  get items(): Item[] {
    return this._items;
  }

  public getItem(itemId: number): Item {
    const item = this._items.find((item) => item.id == itemId);
    if (item == undefined) {
      throw new Error('Item not existing');
    }
    return item;
  }

  public upgradeItem(itemId: number): void {
    const item = this._items.find((item) => item.id == itemId);
    if (item == undefined) {
      throw new Error('Item not existing');
    }
    item.upgrade();
  }

  public calculateIncome(): Big {
    return this._items.reduce((accumulator, item) => accumulator.add(item.income.mul(item.quantity)), new Big(0));
  }
}