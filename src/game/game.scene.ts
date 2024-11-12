import { Player } from './player/player.object.ts';
import { Item } from './items/item.object.ts';

export class GameScene {
  private readonly _player: Player = new Player();

  constructor() {
  }

  get player(): Player {
    return this._player;
  }

  public itemUpgrade(item: number | Item): void {
    if (typeof item == 'number') {
      item = this.player.items.getItem(item);
    }
    this.player.upgradeItem(item);
  }

  public update(): void {
    this._player.changeBalance();
    this._player.savePlayer();
  }
}