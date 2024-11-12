import { Item } from '../items/item.object.ts';
import { Items } from '../items/items.ts';
import { Big } from 'big.js';

export class Player {

  private readonly _items: Items = new Items();
  private _balance: Big = new Big(0);
  private _income: Big = new Big(0);
  private _clickValue: Big = new Big(1);
  private _clickCost: Big = new Big(100);

  public constructor() {
    const stringPlayer = localStorage.getItem('player');
    if (stringPlayer && stringPlayer[0] == '{') {
      const objPlayer = JSON.parse(stringPlayer);
      this._items = new Items(objPlayer.items);
      this._balance = new Big(objPlayer.balance)
      this._clickValue = new Big(objPlayer.clickValue)
      this._clickCost = new Big(objPlayer.clickCost)
    }

  }

  get items(): Items {
    return this._items;
  }

  get balance(): Big {
    return this._balance;
  }

  get income(): Big {
    return this._income;
  }

  get clickValue(): Big {
    return this._clickValue;
  }

  get clickCost(): Big {
    return this._clickCost;
  }

  set income(value: Big) {
    this._income = value;
  }

  public changeBalance(): void {
    this.income = this._items.calculateIncome();
    this._balance = this._balance.add(this.income);
  }

  public addToBalance(): void {
    this._balance = this._balance.add(this._clickValue);
  }

  public upgradeItem(item: Item): boolean {
    if (this.balance.cmp(item.value) == -1) {
      return false;
    }
    this._balance = this._balance.sub(item.value);
    this._items.upgradeItem(item.id);
    return true;
  }
  public upgradeClick(): void {
    if (this.balance.cmp(this._clickCost) == -1) {
      return;
    }
    this._balance = this._balance.sub(this._clickCost);
    this._clickCost = this._clickCost.mul(5);
    this._clickValue = this._clickValue.mul(2);
  }

  public savePlayer(): void {
    localStorage.setItem("player", JSON.stringify({
      items: this.items.items,
      balance: this.balance.toString(),
      clickValue: this.clickValue.toString(),
      clickCost: this.clickCost.toString()
    }) );
  }

  public resetPlayer(): void {
    localStorage.removeItem("player");
    window.location.reload();
  }
}